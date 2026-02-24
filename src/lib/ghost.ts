import GhostContentAPI from '@tryghost/content-api';

// Lazy-initialize the API client to avoid crashes when env vars are missing
let _api: any = null;

function getApi() {
  if (_api) return _api;

  // Support both VITE_ and PUBLIC_ prefixes (Astro uses PUBLIC_ natively, but also supports VITE_ via Vite)
  const url = import.meta.env.VITE_GHOST_API_URL
    || import.meta.env.PUBLIC_GHOST_API_URL
    || '';
  const key = import.meta.env.VITE_GHOST_CONTENT_API_KEY
    || import.meta.env.PUBLIC_GHOST_CONTENT_API_KEY
    || '';

  if (!url || !key) {
    console.warn('[Ghost] Missing API URL or Content API Key – Ghost integration disabled.');
    return null;
  }

  try {
    _api = new GhostContentAPI({ url, key, version: 'v5.0' });
  } catch (err) {
    console.warn('[Ghost] Failed to initialize API client:', err);
    return null;
  }

  return _api;
}

export interface GhostPost {
  id: string;
  uuid: string;
  title: string;
  slug: string;
  html: string;
  excerpt: string;
  feature_image: string | null;
  featured: boolean;
  created_at: string;
  updated_at: string;
  published_at: string;
  reading_time: number;
  tags?: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  authors?: Array<{
    id: string;
    name: string;
    slug: string;
    profile_image: string | null;
  }>;
}

export const ghostAPI = {
  async getPosts(options?: { limit?: number | string; include?: string; filter?: string }): Promise<GhostPost[]> {
    const api = getApi();
    if (!api) return [];

    try {
      const posts = await api.posts.browse({
        limit: options?.limit || 10,
        include: options?.include || 'tags,authors',
        filter: options?.filter || 'status:published',
      });
      return posts as GhostPost[];
    } catch (error) {
      console.error('Error fetching Ghost posts:', error);
      return [];
    }
  },

  async getPostBySlug(slug: string): Promise<GhostPost | null> {
    const api = getApi();
    if (!api) return null;

    try {
      const post = await api.posts.read(
        { slug },
        { include: 'tags,authors' }
      );
      return post as GhostPost;
    } catch (error) {
      console.error(`Error fetching Ghost post with slug ${slug}:`, error);
      return null;
    }
  },

  async getFeaturedPosts(limit = 3): Promise<GhostPost[]> {
    const api = getApi();
    if (!api) return [];

    try {
      const posts = await api.posts.browse({
        limit,
        filter: 'featured:true+status:published',
        include: 'tags,authors',
      });
      return posts as GhostPost[];
    } catch (error) {
      console.error('Error fetching featured Ghost posts:', error);
      return [];
    }
  }
};
