
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
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
        
        // In a real app, you'd fetch this from an API endpoint
        // For this client-side app, we'll make a fetch request to the markdown file
        const response = await fetch(postFiles[postId]);
        const markdownContent = await response.text();
        
        // Extract frontmatter and content
        // In a real app, we'd use gray-matter library
        const frontmatterRegex = /^---\s*([\s\S]*?)\s*---/;
        const match = markdownContent.match(frontmatterRegex);
        
        if (match) {
          const frontMatter = match[1];
          const content = markdownContent.slice(match[0].length).trim();
          
          // Basic frontmatter parsing (this is simplified)
          const title = frontMatter.match(/title:\s*"([^"]+)"/)?.[1] || '';
          const description = frontMatter.match(/description:\s*"([^"]+)"/)?.[1] || '';
          const date = frontMatter.match(/date:\s*"([^"]+)"/)?.[1] || '';
          const readTime = frontMatter.match(/readTime:\s*"([^"]+)"/)?.[1] || '';
          const image = frontMatter.match(/image:\s*"([^"]+)"/)?.[1] || '';
          
          setPost({
            id: postId,
            title,
            description,
            date,
            readTime,
            image,
            content
          });
        }
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
