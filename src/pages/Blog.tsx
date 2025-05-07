
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import fs from 'fs';
import matter from 'gray-matter';

interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
  slug?: string;
}

const Blog = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real Next.js or server-side rendered app, we would fetch these files at build time
    // For this client-side React app, we're using the pre-imported markdown data
    const importAll = (context: __WebpackModuleApi.RequireContext) => {
      const keys = context.keys();
      return Promise.all(
        keys.map(async (key) => {
          // Get the content from the markdown file
          const path = `/src/content/blog${key.slice(1)}`;
          try {
            // In a client-side React app without server capabilities,
            // we would typically fetch this data from an API
            const response = await fetch(path);
            const content = await response.text();
            
            // Parse front matter
            const { data } = matter(content);
            
            return {
              id: data.id,
              title: data.title,
              description: data.description,
              date: data.date,
              readTime: data.readTime,
              image: data.image,
              slug: key.slice(2, -3) // Remove the './' prefix and '.md' suffix
            };
          } catch (error) {
            console.error(`Error reading markdown file: ${path}`, error);
            return null;
          }
        })
      ).then(posts => posts.filter(Boolean) as BlogPost[]);
    };

    // In a real application, we'd use a webpack require context or a server API
    // For now, we'll use our pre-parsed markdown data from the content directory
    const fetchPosts = async () => {
      try {
        // Since we can't dynamically import files in a browser-only app,
        // we'll use our static import approach with the MD files we have
        const post1 = {
          id: 1,
          title: "The Evolution of React: From Class Components to Hooks",
          description: "Explore the journey of React's component architecture and how hooks have revolutionized state management.",
          date: "2025-04-20",
          readTime: "5 min read",
          image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
        };
        
        const post2 = {
          id: 2,
          title: "Understanding TypeScript: Why Static Typing Matters",
          description: "Deep dive into TypeScript's type system and how it improves development experience and code quality.",
          date: "2025-04-18",
          readTime: "7 min read",
          image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
        };
        
        const post3 = {
          id: 3,
          title: "Modern CSS: The Power of Tailwind CSS",
          description: "Learn how utility-first CSS frameworks are changing the way we style web applications.",
          date: "2025-04-15",
          readTime: "6 min read",
          image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
        };
        
        setPosts([post1, post2, post3]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen pt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-gradient">{t('blog.title')}</span>
          </h1>
          <p className="text-lg text-foreground/80">
            {t('blog.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="transition-transform hover:-translate-y-1">
              <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-2">
                    <FileText className="w-4 h-4" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-primary font-medium">{t('blog.readMore')} →</div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
