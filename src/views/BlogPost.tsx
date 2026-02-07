import { Layout } from "@/components/layout/Layout";
import { useParams, Link } from "@/lib/router-shim";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Loader2 } from "lucide-react";
import { useGhostPostBySlug } from "@/hooks/useGhostPosts";
import { format } from "date-fns";

import { AppWrapper } from "@/components/AppWrapper";

const BlogPostContent = ({ post: propPost }: { post?: any }) => {
  const { slug } = useParams<{ slug: string }>();
  // Conditionally call hook? No, hooks can't be conditional.
  // But we can skip the query if we have the post? 
  // useGhostPostBySlug uses useQuery. We can distinguish by passing 'enabled' option if the hook supports it.
  // If not, we still call it. But now we are inside AppWrapper, so QueryClientProvider is present!
  const { data: ghostPost, isLoading, error } = useGhostPostBySlug(slug || '');

  // Use propPost if available, otherwise use ghostPost
  const post = propPost || ghostPost;

  // Normalize mock data to match expected structure if needed
  // If it's a mock post, it won't have 'html' or 'published_at' in the same format
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
            <h1 className="mb-4 text-3xl font-bold text-navy-950">Post Not Found</h1>
            <p className="mb-8 text-text-muted">
              The blog post you're looking for doesn't exist or couldn't be loaded.
            </p>
            <Button variant="hero" asChild>
              <Link to="/resources">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Resources
              </Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  // Helper values for rendering
  const title = post.title;
  const date = isMockPost ? post.date : (post.published_at ? format(new Date(post.published_at), 'MMMM d, yyyy') : '');
  const readTime = isMockPost ? post.readTime.replace(' min read', '') : post.reading_time;
  const authors = isMockPost ? [{ name: post.author }] : (post.authors || []);
  const image = isMockPost ? post.image : post.feature_image;
  const htmlContent = isMockPost ? `<p>${post.excerpt}</p><p><em>(Full content not available in preview)</em></p>` : post.html;
  const tags = isMockPost ? [{ id: '1', name: post.category }] : (post.tags || []);


  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <Button
              variant="outline"
              size="sm"
              className="mb-6 bg-white/10 text-white hover:bg-white/20"
              asChild
            >
              <Link to="/resources">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Resources
              </Link>
            </Button>

            <h1 className="mb-4 text-4xl font-bold text-sky-200 md:text-5xl">
              {title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sky-200/80">
              {date && (
                <span>{date}</span>
              )}
              <span>•</span>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{readTime} min read</span>
              </div>
              {authors && authors.length > 0 && (
                <>
                  <span>•</span>
                  <span>By {authors.map((author: any) => author.name).join(', ')}</span>
                </>
              )}
            </div>

            {tags && tags.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag: any) => (
                  <span
                    key={tag.id}
                    className="rounded-full bg-white/10 px-3 py-1 text-sm text-sky-200"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {image && (
        <section className="bg-background py-8">
          <div className="container">
            <div className="mx-auto max-w-4xl">
              <img
                src={image}
                alt={title}
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
              dangerouslySetInnerHTML={{ __html: htmlContent }}
              className="ghost-content"
            />
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-2 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold text-navy-950 md:text-3xl">
              Want to Learn More?
            </h2>
            <p className="mb-8 text-text-muted">
              See how Ionova can help your organization with ISO 20022 compliance.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/demo">Request a Demo</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/resources">More Articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const BlogPost = (props: { post?: any }) => (
  <AppWrapper>
    <BlogPostContent {...props} />
  </AppWrapper>
);

export default BlogPost;
