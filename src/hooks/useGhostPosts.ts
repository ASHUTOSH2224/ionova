import { useQuery } from '@tanstack/react-query';
import { ghostAPI, GhostPost } from '@/lib/ghost';

export const useGhostPosts = (limit?: number) => {
  return useQuery<GhostPost[], Error>({
    queryKey: ['ghost-posts', limit],
    queryFn: () => ghostAPI.getPosts({ limit }),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useGhostPostBySlug = (slug: string) => {
  return useQuery<GhostPost | null, Error>({
    queryKey: ['ghost-post', slug],
    queryFn: () => ghostAPI.getPostBySlug(slug),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useFeaturedGhostPosts = (limit?: number) => {
  return useQuery<GhostPost[], Error>({
    queryKey: ['ghost-featured-posts', limit],
    queryFn: () => ghostAPI.getFeaturedPosts(limit),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
