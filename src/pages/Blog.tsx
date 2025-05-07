
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
import matter from 'gray-matter';
import MarkdownRenderer from '../components/MarkdownRenderer';

// Interface for blog post data
interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

const Blog = () => {
  const { t } = useTranslation();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Define the markdown file paths
        const postPaths = [
          '/src/content/blog/post1.md',
          '/src/content/blog/post2.md',
          '/src/content/blog/post3.md'
        ];
        
        // Fetch all markdown files
        const fetchedPosts = await Promise.all(
          postPaths.map(async (path, index) => {
            try {
              const response = await fetch(path);
              const content = await response.text();
              
              // Parse front matter using gray-matter
              const { data, content: markdownContent } = matter(content);
              
              return {
                id: data.id || index + 1,
                title: data.title || '',
                description: data.description || '',
                date: data.date || '',
                readTime: data.readTime || '',
                image: data.image || '',
                content: markdownContent || ''
              } as BlogPost;
            } catch (error) {
              console.error(`Error reading markdown file: ${path}`, error);
              return null;
            }
          })
        ).then(posts => posts.filter(Boolean) as BlogPost[]);
        
        setPosts(fetchedPosts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
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

  if (posts.length === 0) {
    return (
      <div className="min-h-screen pt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>No blog posts found.</p>
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

        <div className="grid grid-cols-1 gap-16">
          {posts.map((post) => (
            <div key={post.id} className="border-b pb-12 last:border-b-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                  <Link to={`/blog/${post.id}`}>
                    <div className="aspect-video relative overflow-hidden rounded-lg">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </Link>
                </div>
                <div className="md:col-span-2">
                  <div className="flex items-center gap-2 text-sm text-foreground/60 mb-2">
                    <FileText className="w-4 h-4" />
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h2 className="text-2xl font-bold mb-2 hover:text-primary transition-colors">{post.title}</h2>
                  </Link>
                  <p className="text-foreground/80 mb-4">{post.description}</p>
                  
                  <div className="mb-4 max-h-60 overflow-hidden relative">
                    <div className="prose prose-sm dark:prose-invert">
                      <MarkdownRenderer content={post.content} />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
                  </div>
                  
                  <Link to={`/blog/${post.id}`} className="text-primary font-medium hover:underline">
                    {t('blog.readMore')} →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
