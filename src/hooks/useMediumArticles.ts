import { useState, useEffect } from 'react';
import { Article, portfolioData } from '../data/portfolioData';
import cachedFeed from '../data/mediumFeed.json';

const MEDIUM_RSS_JSON_URL =
  'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40sinthuhanadesan';

// Clean HTML tags and entities
function cleanHtml(html: string): string {
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

function calculateReadTime(text: string): string {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function formatDate(dateStr: string): string {
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return 'Recently published';
    return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  } catch {
    return 'Recently published';
  }
}

function detectPublication(url: string): string {
  if (!url) return 'Medium';
  if (url.includes('/linkit-intecs/')) return 'LinkIT Intecs';
  try {
    const parsed = new URL(url);
    const parts = parsed.pathname.split('/').filter(Boolean);
    if (parts.length > 0 && !parts[0].startsWith('@')) {
      return parts[0].replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    }
  } catch {
    return 'Medium';
  }
  return 'Medium';
}

const DEFAULT_ARTICLES: Article[] =
  Array.isArray(cachedFeed) && cachedFeed.length > 0
    ? (cachedFeed as unknown as Article[])
    : portfolioData.writing;

export function useMediumArticles() {
  const [articles, setArticles] = useState<Article[]>(DEFAULT_ARTICLES);
  const [lastSynced, setLastSynced] = useState<Date | null>(new Date());
  const [isLiveSyncing, setIsLiveSyncing] = useState<boolean>(false);

  useEffect(() => {
    // Check if a test override exists on window for verification
    if (typeof window !== 'undefined' && (window as unknown as { __MOCK_MEDIUM_ENTRY__?: Article }).__MOCK_MEDIUM_ENTRY__) {
      const mockEntry = (window as unknown as { __MOCK_MEDIUM_ENTRY__: Article }).__MOCK_MEDIUM_ENTRY__;
      setArticles([mockEntry, ...DEFAULT_ARTICLES]);
      return;
    }

    let isMounted = true;

    async function fetchLiveFeed() {
      setIsLiveSyncing(true);
      try {
        const response = await fetch(MEDIUM_RSS_JSON_URL, {
          cache: 'no-cache',
          headers: { Accept: 'application/json' },
        });

        if (!response.ok) {
          throw new Error(`Feed proxy responded with status ${response.status}`);
        }

        const data = await response.json();

        if (data.status === 'ok' && Array.isArray(data.items) && data.items.length > 0) {
          interface FeedItem {
            title?: string;
            link?: string;
            pubDate?: string;
            author?: string;
            description?: string;
            content?: string;
            categories?: string[];
          }

          const parsed: Article[] = data.items.map((item: FeedItem) => {
            const rawContent = item.content || item.description || '';
            const cleanText = cleanHtml(rawContent);
            const words = cleanText.slice(0, 240);
            const lastPeriod = words.lastIndexOf('.');
            const description =
              lastPeriod > 100
                ? words.slice(0, lastPeriod + 1)
                : words.trim() + '...';

            return {
              title: item.title?.trim() || 'Untitled Article',
              publication: detectPublication(item.link || ''),
              url: item.link?.trim() || 'https://medium.com/@sinthuhanadesan',
              readTime: calculateReadTime(cleanText),
              date: formatDate(item.pubDate || ''),
              author: item.author || 'Sinthuha Nadesan',
              description,
              tags:
                Array.isArray(item.categories) && item.categories.length > 0
                  ? item.categories.slice(0, 4)
                  : ['Engineering', 'Medium'],
            };
          });

          if (isMounted && parsed.length > 0) {
            setArticles(parsed);
            setLastSynced(new Date());
          }
        }
      } catch (err) {
        // Silent graceful fallback to existing verified article list on network / CORS failure
        console.warn('[Medium Live Sync] Using cached feed fallback:', err);
      } finally {
        if (isMounted) setIsLiveSyncing(false);
      }
    }

    fetchLiveFeed();

    return () => {
      isMounted = false;
    };
  }, []);

  return { articles, lastSynced, isLiveSyncing };
}
