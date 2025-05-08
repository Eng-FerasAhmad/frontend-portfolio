
import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-5 mb-2" {...props} />,
          p: ({ node, ...props }) => <p className="my-4" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc pl-6 my-4" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal pl-6 my-4" {...props} />,
          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
          a: ({ node, ...props }) => <a className="text-primary hover:underline" {...props} />,
          img: ({ node, src, alt, ...props }) => (
            <div className="my-6">
              <img
                src={src}
                alt={alt || ''}
                className="rounded-lg shadow-md max-w-full mx-auto"
                {...props}
              />
              {alt && <p className="text-center text-sm text-muted-foreground mt-2">{alt}</p>}
            </div>
          ),
          code: ({ className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            return !props.node?.position ? (
              <div className="my-6">
                {match && (
                  <div className="bg-[#1A1F2C] text-white px-4 py-2 text-sm rounded-t-lg border-b border-white/10 flex items-center">
                    <span className="text-primary mr-2">•</span>
                    <span>{match[1]}</span>
                  </div>
                )}
                <pre className={`bg-[#1A1F2C] overflow-x-auto ${match ? 'rounded-b-lg' : 'rounded-lg'} p-4`}>
                  <code className="font-mono text-sm text-white" {...props}>
                    {children}
                  </code>
                </pre>
              </div>
            ) : (
              <code className="bg-muted text-foreground px-1.5 py-0.5 rounded text-sm font-mono" {...props}>
                {children}
              </code>
            );
          },
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-foreground/80" {...props} />
          ),
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-6">
              <table className="w-full border-collapse" {...props} />
            </div>
          ),
          thead: ({ node, ...props }) => <thead className="bg-muted" {...props} />,
          th: ({ node, ...props }) => <th className="border px-4 py-2 text-left font-bold" {...props} />,
          td: ({ node, ...props }) => <td className="border px-4 py-2" {...props} />,
          hr: ({ node, ...props }) => <hr className="my-8 border-t border-border" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
