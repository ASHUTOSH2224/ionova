import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Globe, Code, Shield, Smartphone, Server, CreditCard, ChevronRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Blog Data Structure
const featuredPosts = [
  {
    title: "ioNova Open Sources Payments Orchestration in India",
    excerpt: "ioNova has open-sourced its payments routing engine as part of its broader open-source initiative, Hyperswitch.",
    author: "Nitish Mohan Saxena",
    date: "Mar 2025",
    readTime: "4 min read",
    image: "/Logo/hero Image/hero.png", // Using existing asset as placeholder
    category: "Featured"
  },
  {
    title: "Merchant's freedom of choice & our response to media articles",
    excerpt: "ioNova Orchestrator is not a payments intermediary. We are a TSP to the merchants. It is the merchants who partner with us.",
    author: "Vimal Kumar, Sheetal Lalwani",
    date: "Jan 2025",
    readTime: "4 min read",
    image: "/Logo/hero Image/hero.png",
    category: "Featured"
  },
  {
    title: "Our belief in an Ecosystem that fosters Diversity, Interoperability and Innovation",
    excerpt: "We are a payments TSP and work with leading merchants as their extended payments team to help unify and tackle complex ecosystems.",
    author: "Vimal Kumar, Sheetal Lalwani",
    date: "Dec 2024",
    readTime: "5 min read",
    image: "/Logo/hero Image/hero.png",
    category: "Featured"
  }
];

const allPosts = [
  {
    title: "Google's Universal Commerce Protocol: What It Means for Payment Orchestration",
    author: "Matthew Healey",
    date: "Feb 2026",
    readTime: "9 min read",
    category: "Product",
    icon: Globe
  },
  {
    title: "Agentic Commerce: Understanding the Shift and What It Means for the Payments Ecosystem",
    author: "Mohan Mishra",
    date: "Dec 2025",
    readTime: "8 min read",
    category: "Insights",
    icon: Code
  },
  {
    title: "What Is a Passkey? How does it work?",
    author: "Rishi Sharma, Juilee Kamble",
    date: "Nov 2025",
    readTime: "10 min read",
    category: "Security",
    icon: Shield
  },
  {
    title: "Updates Within Seconds: Reimagining Mobile App Releases with ioNova's Airborne",
    author: "Raghunandhan V, Juilee Kamble",
    date: "Oct 2025",
    readTime: "7 min read",
    category: "Engineering",
    icon: Smartphone
  },
  {
    title: "How to Maximize Payment Acceptance Rate: A Complete Guide for Growing Businesses",
    author: "Divyansh Sharma",
    date: "Sep 2025",
    readTime: "17 min read",
    category: "Growth",
    icon: CreditCard
  },
  {
    title: "The Airlines' Playbook to Building a Global Payments Stack",
    author: "Nakul Kothari, Prashant Khandelwal",
    date: "Aug 2025",
    readTime: "14 min read",
    category: "Case Study",
    icon: Server
  },
  {
    title: "From Legacy to Leading-Edge: Next-Gen Payment Acceptance Platform for Banks",
    author: "James Lloyd",
    date: "Jul 2025",
    readTime: "18 min read",
    category: "Banking",
    icon: FileText
  },
  {
    title: "Revolutionizing Code Intelligence: How AutoTranspiler Ensures Flawless Code Conversion",
    author: "Payal Choudhary, Saket Raman",
    date: "Jun 2025",
    readTime: "14 min read",
    category: "Engineering",
    icon: Code
  },
  {
    title: "Recurring Payments 101: A Comprehensive Guide for Merchants",
    author: "Divyansh Sharma",
    date: "Jun 2025",
    readTime: "19 min read",
    category: "Guides",
    icon: CreditCard
  }
];

const Resources = () => {
  return (
    <Layout>
      {/* Header Section */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-background">
        <div className="container text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-navy-950 mb-4 tracking-tight">
            Payments. Tech. <span className="text-blue-600">Decoded.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Insights on payments tech, infrastructure and orchestration.
          </p>
        </div>
      </section>

      {/* Featured Blogs Section */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container">
          <div className="mb-6 flex items-center gap-2">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Featured Blogs
            </span>
          </div>
          
          <Carousel 
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent>
              {featuredPosts.map((post, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <div className="p-1">
                    <Card className="border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-2 gap-0">
                          {/* Image Section */}
                          <div className="relative h-64 md:h-auto bg-slate-100 flex items-center justify-center p-8">
                             {/* Placeholder for blog image */}
                             <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 opacity-50"></div>
                             <FileText className="h-20 w-20 text-blue-200 relative z-10" />
                          </div>
                          
                          {/* Content Section */}
                          <div className="p-8 md:p-12 flex flex-col justify-center">
                            <h2 className="text-2xl md:text-3xl font-bold text-navy-950 mb-4 leading-tight hover:text-blue-600 cursor-pointer transition-colors">
                              {post.title}
                            </h2>
                            <p className="text-slate-600 mb-6 text-lg leading-relaxed line-clamp-3">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex items-center gap-4 mt-auto">
                              <div className="flex -space-x-2">
                                <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white text-xs font-bold text-blue-700">
                                  {post.author.charAt(0)}
                                </div>
                              </div>
                              <div className="text-sm">
                                <p className="font-semibold text-navy-950">{post.author}</p>
                                <p className="text-slate-500">{post.readTime} • {post.date}</p>
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
            <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
               <CarouselNext />
            </div>
            <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2 z-10">
               <CarouselPrevious />
            </div>
          </Carousel>
        </div>
      </section>

      {/* All Blog Posts Grid */}
      <section className="py-16 bg-slate-50/50">
        <div className="container">
          <h2 className="text-3xl font-bold text-navy-950 mb-10">All Blog Posts</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPosts.map((post, index) => (
              <Link to="#" key={index} className="group h-full">
                <Card className="h-full border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
                  {/* Card Image Area */}
                  <div className="h-48 bg-gradient-to-br from-slate-100 to-white relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                      <post.icon className="h-16 w-16 text-blue-200/50" />
                    </div>
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold text-navy-950 shadow-sm border border-slate-100 uppercase tracking-wide">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-navy-950 mb-3 group-hover:text-blue-600 transition-colors leading-tight line-clamp-3">
                      {post.title}
                    </h3>
                    
                    <div className="mt-auto pt-6 flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                        {post.author.charAt(0)}
                      </div>
                      <div className="text-xs text-slate-500">
                        <span className="font-semibold text-navy-950 block">{post.author}</span>
                        <span>{post.readTime} • {post.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="border-blue-200 text-blue-700 hover:bg-blue-50">
              View More Articles <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resources;
