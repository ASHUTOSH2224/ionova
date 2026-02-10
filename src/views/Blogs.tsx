import { Layout } from "@/components/layout/Layout";
import { Link } from "@/lib/router-shim";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Globe, Code, Shield, Smartphone, Server, CreditCard, ChevronRight, Loader2 } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

import { useGhostPosts, useFeaturedGhostPosts } from "@/hooks/useGhostPosts";
import { GhostPost } from "@/lib/ghost";
import { format } from "date-fns";

import { AppWrapper } from "@/components/AppWrapper";

// ── Unified card shape ──────────────────────────────────────────────

interface NormalizedPost {
    title: string;
    excerpt: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    slug: string;
    image?: string;                       // Featured carousel – large image
    icon?: React.ComponentType<any>;      // Grid cards – icon
    featureImage?: string | null;         // Ghost feature image for grid cards
    source: "static" | "ghost";
}

// Map a icon‑name string from Ghost tags to a Lucide icon component
const categoryIconMap: Record<string, React.ComponentType<any>> = {
    product: Globe,
    insights: Code,
    security: Shield,
    engineering: Smartphone,
    growth: CreditCard,
    "case study": Server,
    banking: FileText,
    guides: CreditCard,
    technology: Globe,
    strategy: Code,
    compliance: Shield,
};

function getIconForCategory(category: string): React.ComponentType<any> {
    return categoryIconMap[category.toLowerCase()] || FileText;
}

function normalizeGhostPost(post: GhostPost): NormalizedPost {
    const primaryTag = post.tags?.[0]?.name || "Insights";
    const primaryAuthor = post.authors?.[0]?.name || "ioNova Team";
    return {
        title: post.title,
        excerpt: post.excerpt || "",
        author: primaryAuthor,
        date: post.published_at
            ? format(new Date(post.published_at), "MMM yyyy")
            : "",
        readTime: `${post.reading_time || 5} min read`,
        category: primaryTag,
        slug: post.slug,
        featureImage: post.feature_image,
        icon: getIconForCategory(primaryTag),
        source: "ghost",
    };
}

// ── Components ──────────────────────────────────────────────────────

const BlogsContent = () => {
    // Fetch Ghost posts
    const { data: ghostPosts, isLoading: postsLoading } = useGhostPosts(20);
    const { data: ghostFeatured, isLoading: featuredLoading } = useFeaturedGhostPosts(5);

    const normalizedGhostFeatured = (ghostFeatured || []).map(normalizeGhostPost);
    const mergedFeatured = normalizedGhostFeatured;

    // ── All posts (grid) ────────────────────────────────────────────
    const normalizedGhostAll = (ghostPosts || []).map(normalizeGhostPost);
    const mergedAll = normalizedGhostAll;

    const isLoading = postsLoading || featuredLoading;

    return (
        <Layout>
            {/* Header Section */}
            <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-background">
                <div className="container text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-navy-950 mb-4 tracking-tight">
                        Address Intelligence <span className="text-blue-600">Insights & Resources</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Stay ahead of ISO 20022 migration with expert analysis, technical deep-dives, and strategic guidance on structured address resolution for global payments.
                    </p>
                </div>
            </section>

            {/* Featured Blogs Section */}
            <section className="py-12 md:py-16 bg-background relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                <div className="container relative z-10">
                    <div className="mb-8 flex items-center justify-center md:justify-start">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-blue-100 rounded-full text-xs font-bold uppercase tracking-wider text-teal-600 shadow-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                            Featured Insights
                        </span>
                    </div>

                    {featuredLoading && mergedFeatured.length === 0 ? (
                        <div className="flex items-center justify-center py-20">
                            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                        </div>
                    ) : (
                        <Carousel
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            className="w-full relative"
                        >
                            <CarouselContent>
                                {mergedFeatured.map((post, index) => (
                                    <CarouselItem key={`featured-${post.slug}-${index}`} className="md:basis-1/1 lg:basis-1/1 pl-4">
                                        <div className="p-1">
                                            <Card className="border border-slate-100 overflow-hidden bg-white shadow-[0_4px_20px_rgba(14,25,53,0.06)] hover:shadow-[0_20px_60px_rgba(14,25,53,0.12)] transition-all duration-500 rounded-3xl group h-full">
                                                <CardContent className="p-0">
                                                    <div className="grid md:grid-cols-12 gap-0 h-full">
                                                        {/* Image Section */}
                                                        <div className="md:col-span-5 relative h-64 md:h-auto bg-gradient-to-br from-slate-50 to-blue-50/30 flex items-center justify-center p-8 overflow-hidden">
                                                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent opacity-100"></div>
                                                            {post.featureImage ? (
                                                                <img
                                                                    src={post.featureImage}
                                                                    alt={post.title}
                                                                    className="relative z-10 w-full h-full object-cover rounded-2xl"
                                                                />
                                                            ) : (
                                                                <div className="relative z-10 transform group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-700 ease-out">
                                                                    <div className="bg-white p-6 rounded-2xl shadow-lg shadow-blue-900/5 ring-1 ring-black/5">
                                                                        <FileText className="h-16 w-16 text-blue-600" />
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* Content Section */}
                                                        <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center relative">
                                                            <div className="mb-4">
                                                                <span className="text-teal-600 font-bold text-sm tracking-wide uppercase">{post.category}</span>
                                                            </div>
                                                            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 mb-6 leading-tight group-hover:text-blue-700 transition-colors">
                                                                {post.title}
                                                            </h2>
                                                            <p className="text-slate-600 mb-8 text-lg leading-relaxed line-clamp-3 font-medium">
                                                                {post.excerpt}
                                                            </p>

                                                            <div className="flex items-center gap-5 mt-auto border-t border-slate-100 pt-6">
                                                                <div className="flex -space-x-2">
                                                                    <div className="h-10 w-10 rounded-full bg-navy-900 text-white flex items-center justify-center border-2 border-white text-sm font-bold shadow-md">
                                                                        {post.author.charAt(0)}
                                                                    </div>
                                                                </div>
                                                                <div className="text-sm">
                                                                    <p className="font-bold text-navy-950">{post.author}</p>
                                                                    <p className="text-slate-500 font-medium">{post.readTime} • {post.date}</p>
                                                                </div>
                                                                <div className="ml-auto">
                                                                    <Link to={`/blog/${post.slug}`}>
                                                                        <Button className="rounded-full bg-navy-950 text-white hover:bg-blue-700 px-6 shadow-lg shadow-blue-900/20 group-hover:scale-105 transition-all">
                                                                            Read Article <ArrowRight className="ml-2 h-4 w-4" />
                                                                        </Button>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 gap-2">
                                <CarouselNext className="bg-white border-slate-200 text-navy-950 hover:bg-navy-50 hover:text-blue-600 h-12 w-12 rounded-full shadow-lg" />
                            </div>
                            <div className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 gap-2">
                                <CarouselPrevious className="bg-white border-slate-200 text-navy-950 hover:bg-navy-50 hover:text-blue-600 h-12 w-12 rounded-full shadow-lg" />
                            </div>
                        </Carousel>
                    )}
                </div>
            </section>

            {/* All Blog Posts Grid */}
            <section className="py-20 bg-background relative">
                {/* Noise overlay simulation */}
                <div className="absolute inset-0 opacity-[0.015] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

                <div className="container relative z-10">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                        <div>
                            <span className="text-teal-600 font-bold tracking-widest uppercase text-xs mb-2 block">Knowledge Base</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-950 tracking-tight">Latest Articles</h2>
                        </div>

                        {/* Filter Tabs (Mock) 
                        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                            {['All', 'Technology', 'Strategy', 'Compliance'].map((filter, i) => (
                                <button key={i} className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${i === 0 ? 'bg-navy-950 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100 border border-transparent'}`}>
                                    {filter}
                                </button>
                            ))}
                        </div>
                        */}
                    </div>

                    {postsLoading && mergedAll.length === 0 ? (
                        <div className="flex items-center justify-center py-20">
                            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {mergedAll.map((post, index) => (
                                <Link to={`/blog/${post.slug}`} key={`grid-${post.slug}-${index}`} className="group h-full block">
                                    <article className="h-full bg-white rounded-2xl overflow-hidden shadow-[0_2px_8px_rgba(14,25,53,0.04)] hover:shadow-[0_20px_40px_rgba(14,25,53,0.12)] transition-all duration-300 hover:-translate-y-1 border border-slate-100 flex flex-col">
                                        {/* Card Image Area */}
                                        <div className="h-56 bg-gradient-to-br from-slate-50 to-blue-50/50 relative overflow-hidden group-hover:from-blue-50 group-hover:to-indigo-50/50 transition-colors duration-500">
                                            {post.featureImage ? (
                                                <img
                                                    src={post.featureImage}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover"
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out">
                                                    <div className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-sm">
                                                        {post.icon ? (
                                                            <post.icon className="h-10 w-10 text-blue-600/80" />
                                                        ) : (
                                                            <FileText className="h-10 w-10 text-blue-600/80" />
                                                        )}
                                                    </div>
                                                </div>
                                            )}
                                            {/* Category Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-extrabold text-navy-950 shadow-sm border border-slate-100 uppercase tracking-widest">
                                                    {post.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-7 flex flex-col flex-grow relative">
                                            {/* Decorative gradient line */}
                                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                            <h3 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-blue-700 transition-colors leading-snug line-clamp-2">
                                                {post.title}
                                            </h3>

                                            <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                                                {post.excerpt || "Explore key insights and strategies driving the future of payment orchestration and address intelligence."}
                                            </p>

                                            <div className="mt-auto flex items-center justify-between border-t border-slate-50 pt-5">
                                                <div className="flex items-center gap-3">
                                                    <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-navy-800 border border-white shadow-sm">
                                                        {post.author.charAt(0)}
                                                    </div>
                                                    <div className="text-xs text-slate-500 font-medium">
                                                        <span className="block text-navy-950 font-semibold">{post.author}</span>
                                                        <span>{post.date} · {post.readTime}</span>
                                                    </div>
                                                </div>
                                                <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-blue-600 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                                    <ArrowRight className="h-4 w-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    )}

                    <div className="mt-16 text-center">
                        <Button variant="outline" size="lg" className="rounded-full border-2 border-slate-200 text-navy-950 font-bold hover:border-blue-600 hover:text-blue-600 hover:bg-white px-8 h-12">
                            Load More Articles <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

const Blogs = () => (
    <AppWrapper>
        <BlogsContent />
    </AppWrapper>
);

export default Blogs;
