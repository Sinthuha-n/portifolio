import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FEED_URL = 'https://medium.com/feed/@sinthuhanadesan';
const OUTPUT_PATH = path.resolve(__dirname, '../src/data/mediumFeed.json');

function cleanHtml(html) {
  if (!html) return '';
  return html
    .replace(/<figcaption>.*?<\/figcaption>/gis, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function calculateReadTime(text) {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function formatDate(dateStr) {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return 'Recently published';
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  } catch {
    return 'Recently published';
  }
}

function detectPublication(url) {
  if (!url) return 'Medium';
  if (url.includes('/linkit-intecs/')) return 'LinkIT Intecs';
  try {
    const parsed = new URL(url);
    const parts = parsed.pathname.split('/').filter(Boolean);
    if (parts.length > 0 && !parts[0].startsWith('@')) {
      return parts[0].replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    }
  } catch {}
  return 'Medium';
}

function parseMediumXml(xml) {
  const items = [];
  const itemBlocks = xml.split('<item>').slice(1);

  for (const block of itemBlocks) {
    const titleMatch = block.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/s) || block.match(/<title>(.*?)<\/title>/s);
    const linkMatch = block.match(/<link>(.*?)<\/link>/s);
    const pubDateMatch = block.match(/<pubDate>(.*?)<\/pubDate>/s);
    const creatorMatch = block.match(/<dc:creator><!\[CDATA\[(.*?)\]\]><\/dc:creator>/s) || block.match(/<dc:creator>(.*?)<\/dc:creator>/s);
    const contentMatch = block.match(/<content:encoded><!\[CDATA\[(.*?)\]\]><\/content:encoded>/s) || block.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/s);

    const title = titleMatch ? titleMatch[1].trim() : '';
    const url = linkMatch ? linkMatch[1].trim() : '';
    const rawDate = pubDateMatch ? pubDateMatch[1].trim() : '';
    const author = creatorMatch ? creatorMatch[1].trim() : 'Sinthuha Nadesan';

    // Parse categories / tags
    const tagMatches = [...block.matchAll(/<category><!\[CDATA\[(.*?)\]\]><\/category>/g)];
    const tags = tagMatches.map(m => m[1].trim()).filter(Boolean);

    // Compute excerpt and read time
    const rawContent = contentMatch ? contentMatch[1] : '';
    const cleanText = cleanHtml(rawContent);
    const readTime = calculateReadTime(cleanText);

    // Create 1-2 sentence description
    let description = cleanText.slice(0, 240);
    const lastPeriod = description.lastIndexOf('.');
    if (lastPeriod > 100) {
      description = description.slice(0, lastPeriod + 1);
    } else {
      description = description.trim() + '...';
    }

    if (title && url) {
      items.push({
        title,
        publication: detectPublication(url),
        url,
        readTime,
        date: formatDate(rawDate),
        isoDate: rawDate ? new Date(rawDate).toISOString() : new Date().toISOString(),
        author,
        description,
        tags: tags.length > 0 ? tags.slice(0, 4) : ['Engineering', 'Medium'],
      });
    }
  }

  // Sort by newest first
  items.sort((a, b) => new Date(b.isoDate).getTime() - new Date(a.isoDate).getTime());
  return items;
}

export async function fetchAndSyncMediumFeed() {
  console.log(`[Medium Sync] Fetching feed from ${FEED_URL}...`);
  return new Promise((resolve) => {
    https.get(FEED_URL, (res) => {
      if (res.statusCode !== 200) {
        console.warn(`[Medium Sync] Feed returned HTTP ${res.statusCode}. Keeping existing cache.`);
        return resolve(false);
      }
      let xml = '';
      res.on('data', chunk => xml += chunk);
      res.on('end', () => {
        try {
          const articles = parseMediumXml(xml);
          if (articles.length === 0) {
            console.warn('[Medium Sync] Parsed 0 articles. Keeping existing cache.');
            return resolve(false);
          }
          fs.writeFileSync(OUTPUT_PATH, JSON.stringify(articles, null, 2), 'utf-8');
          console.log(`[Medium Sync] Successfully synced ${articles.length} articles to ${OUTPUT_PATH}`);
          resolve(true);
        } catch (err) {
          console.error('[Medium Sync] Error parsing feed:', err);
          resolve(false);
        }
      });
    }).on('error', (err) => {
      console.warn(`[Medium Sync] Network error: ${err.message}. Keeping existing cache.`);
      resolve(false);
    });
  });
}

// Execute if run directly
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  fetchAndSyncMediumFeed().then(() => process.exit(0));
}
