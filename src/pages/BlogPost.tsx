
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { getBlogPostById } from '../utils/blog';
import MarkdownRenderer from '../components/MarkdownRenderer';

const BlogPost = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  
  const post = getBlogPostById(Number(id));

  if (!post) {
    return (
      <div className="min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1>Post not found</h1>
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
