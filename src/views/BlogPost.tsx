import { Layout } from "@/components/layout/Layout";
import { useParams, Link } from "@/lib/router-shim";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useGhostPostBySlug } from "@/hooks/useGhostPosts";
import { GhostPost } from "@/lib/ghost";
import { format } from "date-fns";

import { AppWrapper } from "@/components/AppWrapper";

interface MockPost {
  title: string;
  date?: string;
  readTime?: string;
  image?: string;
  html?: string;
  excerpt?: string;
  author?: string;
  category?: string;
}

const BlogPostContent = ({ post: propPost }: { post?: MockPost }) => {
  const { slug } = useParams<{ slug: string }>();

  const { data: ghostPost, isLoading, error } = useGhostPostBySlug(slug || '');

  // Use propPost if available, otherwise use ghostPost
  const post = propPost || ghostPost;

  // Determine if it's a mock post
  const isMockPost = !!propPost;

  if (isLoading && !post) {
    return (
      <Layout>
        <div className="container flex min-h-[60vh] items-center justify-center py-16">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
        </div>
      </Layout>
    );
  }

  if ((!isMockPost && error) || !post) {
    return (
      <Layout>
        <div className="container py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 font-bold text-navy-950">Post Not Found</h1>
            <p className="mb-8 text-text-muted">
              The blog post you're looking for doesn't exist or couldn't be loaded.
            </p>
            <Button variant="hero" asChild>
              <Link to="/blogs">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blogs
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  // Normalize data for display
  let displayTitle: string;
  let displayDate: string | undefined;
  let displayReadTime: string | undefined;
  let displayAuthors: { name: string }[] = [];
  let displayImage: string | undefined;
  let displayHtml: string;
  let displayTags: { id: string; name: string }[] = [];

  if (isMockPost) {
    const p = post as MockPost;
    displayTitle = p.title;
    displayDate = p.date;
    displayReadTime = p.readTime?.replace(' min read', '');
    if (p.author) displayAuthors = [{ name: p.author }];
    displayImage = p.image;
    displayHtml = p.html || `<p>${p.excerpt}</p><p><em>(Full content not available in preview)</em></p>`;
    if (p.category) displayTags = [{ id: '1', name: p.category }];
  } else {
    const p = post as GhostPost;
    displayTitle = p.title;
    displayDate = p.published_at ? format(new Date(p.published_at), 'MMMM d, yyyy') : undefined;
    displayReadTime = p.reading_time?.toString();
    displayAuthors = p.authors?.map(a => ({ name: a.name })) || [];
    displayImage = p.feature_image || undefined;
    displayHtml = p.html;
    displayTags = p.tags?.map(t => ({ id: t.id, name: t.name })) || [];
  }

  return (
    <Layout>
      {/* Back to Blogs + Title */}
      <section className="bg-background pt-28 pb-4 lg:pt-36">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Button
              variant="outline"
              size="sm"
              className="group gap-2 text-text-muted hover:text-navy-950 transition-colors"
              asChild
            >
              <Link to="/blogs">
                <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Back to Blogs
              </Link>
            </Button>

            <h1 className="mt-6 font-bold tracking-tight text-navy-950">
              {displayTitle}
            </h1>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {displayImage && (
        <section className="bg-background pt-8 pb-8">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <img
                src={displayImage}
                alt={displayTitle}
                width={896}
                height={504}
                loading="lazy"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="bg-background py-16 lg:py-24">
        <div className="container">
          <article className="prose prose-lg prose-blue mx-auto max-w-4xl">
            <div
              dangerouslySetInnerHTML={{ __html: displayHtml }}
              className="ghost-content"
            />
          </article>
        </div>
      </section>
    </Layout>
  );
};

const BlogPost = (props: { post?: MockPost }) => (
  <AppWrapper>
    <BlogPostContent {...props} />
  </AppWrapper>
);

export default BlogPost;
