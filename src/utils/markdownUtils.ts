
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

export const useBlogPosts = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        // List of markdown files to load
        const postPaths = [
          '/src/content/blog/post1.md',
          '/src/content/blog/post2.md',
          '/src/content/blog/post3.md'
        ];

        const loadedPosts = await Promise.all(
          postPaths.map(async (path) => {
            try {
              const response = await fetch(path);
              if (!response.ok) {
                throw new Error(`Failed to load ${path}`);
              }
              
              const text = await response.text();
              
              // Simple parser for frontmatter
              const frontMatterRegex = /---\n([\s\S]*?)\n---\n([\s\S]*)/;
              const matches = text.match(frontMatterRegex);
              
              if (!matches) {
                throw new Error(`Invalid markdown format in ${path}`);
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
              console.error(`Error loading post from ${path}:`, error);
              return null;
            }
          })
        );
        
        // Filter out any null values from failed loads
        setPosts(loadedPosts.filter(Boolean) as BlogPost[]);
        setLoading(false);
      } catch (error) {
        console.error("Error loading blog posts:", error);
        setLoading(false);
      }
    };
    
    loadPosts();
  }, []);
  
  return { posts, loading };
};

export const useBlogPost = (id: string | undefined) => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadPost = async () => {
      if (!id) {
        setLoading(false);
        return;
      }
      
      try {
        const postPath = `/src/content/blog/post${id}.md`;
        const response = await fetch(postPath);
        
        if (!response.ok) {
          throw new Error(`Failed to load post ${id}`);
        }
        
        const text = await response.text();
        
        // Simple parser for frontmatter
        const frontMatterRegex = /---\n([\s\S]*?)\n---\n([\s\S]*)/;
        const matches = text.match(frontMatterRegex);
        
        if (!matches) {
          throw new Error(`Invalid markdown format in post ${id}`);
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
        
        setPost({
          id: Number(meta.id) || 0,
          title: meta.title || '',
          description: meta.description || '',
          date: meta.date || '',
          readTime: meta.readTime || '',
          image: meta.image || '',
          content: content.trim()
        });
      } catch (error) {
        console.error(`Error loading post ${id}:`, error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    
    loadPost();
  }, [id]);
  
  return { post, loading };
};
