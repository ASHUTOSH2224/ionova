import GhostContentAPI from '@tryghost/content-api';

const api = new GhostContentAPI({
  url: import.meta.env.VITE_GHOST_API_URL || '',
  key: import.meta.env.VITE_GHOST_CONTENT_API_KEY || '',
  version: 'v5.0'
});

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
  async getPosts(options?: { limit?: number; include?: string }): Promise<GhostPost[]> {
    try {
      const posts = await api.posts.browse({
        limit: options?.limit || 10,
        include: options?.include || 'tags,authors',
      });
      return posts as GhostPost[];
    } catch (error) {
      console.error('Error fetching Ghost posts:', error);
      return [];
    }
  },

  async getPostBySlug(slug: string): Promise<GhostPost | null> {
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
    try {
      const posts = await api.posts.browse({
        limit,
        filter: 'featured:true',
        include: 'tags,authors',
      });
      return posts as GhostPost[];
    } catch (error) {
      console.error('Error fetching featured Ghost posts:', error);
      return [];
    }
  }
};
