
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
          h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-6 mb-4" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-xl font-bold mt-5 mb-2" {...props} />,
          p: ({ node, ...props }) => <p className="my-4" {...props} />,
          ul: ({ node, ...props }) => <ul className="list-disc pl-6 my-4" {...props} />,
          ol: ({ node, ...props }) => <ol className="list-decimal pl-6 my-4" {...props} />,
          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
          a: ({ node, ...props }) => <a className="text-primary hover:underline" {...props} />,
          code: ({ node, inline, className, children, ...props }) => {
            const match = /language-(\w+)/.exec(className || '');
            return !inline ? (
              <div className="my-6">
                {match && (
                  <div className="bg-[#1A1F2C] text-white px-4 py-2 text-sm rounded-t-lg border-b border-white/10">
                    {match[1]}
                  </div>
                )}
                <pre className={`bg-[#1A1F2C] overflow-x-auto ${match ? 'rounded-b-lg' : 'rounded-lg'} p-4`}>
                  <code className="font-mono text-sm text-white" {...props}>
                    {children}
                  </code>
                </pre>
              </div>
            ) : (
              <code className="bg-muted text-foreground p-1 rounded text-sm font-mono" {...props}>
                {children}
              </code>
            );
          }
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
