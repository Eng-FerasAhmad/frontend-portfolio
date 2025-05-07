
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import MarkdownRenderer from '../components/MarkdownRenderer';
import { useBlogPosts } from '../utils/markdownUtils';

const Blog = () => {
  const { t } = useTranslation();
  const { posts, loading } = useBlogPosts();

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
          <p>No blog posts found. Check console for any loading errors.</p>
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
                      <MarkdownRenderer content={post.content.slice(0, 500) + '...'} />
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
