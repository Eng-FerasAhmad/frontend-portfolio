
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import MarkdownRenderer from '../components/MarkdownRenderer';
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

// Mapping of post IDs to their markdown files
const postFiles: Record<number, string> = {
  1: '/src/content/blog/post1.md',
  2: '/src/content/blog/post2.md',
  3: '/src/content/blog/post3.md'
};

const BlogPost = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postId = Number(id);
        if (!postId || !postFiles[postId]) {
          setLoading(false);
          return;
        }
        
        // Fetch the markdown file
        const response = await fetch(postFiles[postId]);
        const markdownContent = await response.text();
        
        // Parse front matter using gray-matter
        const { data, content } = matter(markdownContent);
        
        setPost({
          id: postId,
          title: data.title || '',
          description: data.description || '',
          date: data.date || '',
          readTime: data.readTime || '',
          image: data.image || '',
          content: content || ''
        });
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-6">
          <p>Loading post...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1>Post not found</h1>
          <Link to="/blog">
            <Button variant="ghost" className="mt-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('blog.backToBlog')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/blog">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('blog.backToBlog')}
          </Button>
        </Link>

        <div className="space-y-8">
          <div className="aspect-video relative overflow-hidden rounded-lg">
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-foreground/60">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="text-4xl font-bold">{post.title}</h1>
            <p className="text-xl text-foreground/80">{post.description}</p>
          </div>

          <MarkdownRenderer content={post.content} />
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
