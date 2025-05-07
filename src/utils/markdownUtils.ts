
import { useState, useEffect } from 'react';

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
}

// Direct import of the markdown content
// This tells Vite to include these files in the build
import post1Content from '../content/blog/post1.md?raw';

// Helper function to parse markdown frontmatter and content
const parseMarkdown = (markdownText: string): BlogPost | null => {
  try {
    // Simple parser for frontmatter
    const frontMatterRegex = /---\n([\s\S]*?)\n---\n([\s\S]*)/;
    const matches = markdownText.match(frontMatterRegex);
    
    if (!matches) {
      console.error('Invalid markdown format');
      return null;
    }
    
    const [, frontMatter, content] = matches;
    
    // Parse frontmatter
    const meta: Record<string, string> = {};
    frontMatter.split('\n').forEach(line => {
      const [key, ...valueParts] = line.split(':');
      if (key && valueParts.length) {
        // Join back with ':' in case there were colons in the value
        const value = valueParts.join(':').trim();
        // Remove quotes if they exist
        meta[key.trim()] = value.replace(/^"(.*)"$/, '$1');
      }
    });
    
    return {
      id: Number(meta.id) || 0,
      title: meta.title || '',
      description: meta.description || '',
      date: meta.date || '',
      readTime: meta.readTime || '',
      image: meta.image || '',
      content: content.trim()
    };
  } catch (error) {
    console.error('Error parsing markdown:', error);
    return null;
  }
};

// Hard-coded blog posts for now
// In a real app, you'd have a more sophisticated approach to load these
const blogPosts: BlogPost[] = [
  parseMarkdown(post1Content) as BlogPost,
  // Add more posts if you have them
].filter(Boolean) as BlogPost[];

export const useBlogPosts = () => {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return { posts: blogPosts, loading };
};

export const useBlogPost = (id: string | undefined) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    
    const foundPost = blogPosts.find(p => p.id === Number(id)) || null;
    setPost(foundPost);
    setLoading(false);
  }, [id]);
  
  return { post, loading };
};
