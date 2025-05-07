
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
                content: markdownContent || '' // Include content property
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
