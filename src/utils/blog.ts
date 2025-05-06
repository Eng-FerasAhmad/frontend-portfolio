
import { promises as fs } from 'fs';
import matter from 'gray-matter';
import path from 'path';

export interface BlogPost {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
  content: string;
  slug?: string;
}

export interface BlogPostFrontMatter {
  id: number;
  title: string;
  description: string;
  date: string;
  readTime: string;
  image: string;
}

// Function to load blog posts from the content directory
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // In a browser environment, return the static blog posts
    return staticBlogPosts;
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

// Function to get a specific blog post by ID
export function getBlogPostById(id: number): BlogPost | undefined {
  return staticBlogPosts.find(post => post.id === id);
}

// Static blog posts for client-side rendering
// In a real application with server components or API routes, 
// we would dynamically load these files from the filesystem
const staticBlogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Evolution of React: From Class Components to Hooks",
    description: "Explore the journey of React's component architecture and how hooks have revolutionized state management.",
    date: "2025-04-20",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    content: `React has come a long way since its initial release in 2013. One of the most significant changes in React's history was the introduction of Hooks in React 16.8. This feature revolutionized how we write React components and manage state in our applications.

## The Era of Class Components

Before Hooks, class components were the primary way to handle state and lifecycle methods in React. A typical class component looked something like this:

\`\`\`jsx
class MyComponent extends React.Component {
  state = { count: 0 };
  
  componentDidMount() {
    // Lifecycle method
  }

  render() {
    return <div>{this.state.count}</div>;
  }
}
\`\`\`

## Enter Hooks

Hooks introduced a more intuitive way to handle state and side effects in functional components:

\`\`\`jsx
function MyComponent() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // Side effects here
  }, []);

  return <div>{count}</div>;
}
\`\`\`

This new approach brought several benefits:
- Simpler component logic
- Reusable stateful logic
- Better composition
- Reduced bundle size

## The Future of React

As React continues to evolve, we're seeing new patterns and best practices emerge. The introduction of features like Suspense, Server Components, and the upcoming React forget show that the library is constantly improving and adapting to modern web development needs.`
  },
  {
    id: 2,
    title: "Understanding TypeScript: Why Static Typing Matters",
    description: "Deep dive into TypeScript's type system and how it improves development experience and code quality.",
    date: "2025-04-18",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    content: `TypeScript has become an essential tool in modern web development, particularly in large-scale applications. Let's explore why static typing matters and how TypeScript improves code quality.

## Why Static Typing?

Static typing provides several benefits:
- Early error detection
- Better IDE support
- Improved code documentation
- Safer refactoring

## Key TypeScript Features

TypeScript introduces many powerful features:

\`\`\`typescript
// Interface definition
interface User {
  id: number;
  name: string;
  email?: string;
}

// Type inference
const users: User[] = [];

// Generics
function getFirst<T>(array: T[]): T | undefined {
  return array[0];
}
\`\`\`

## Best Practices

1. Use strict mode
2. Leverage type inference
3. Avoid using 'any'
4. Use interfaces for object shapes`
  },
  {
    id: 3,
    title: "Modern CSS: The Power of Tailwind CSS",
    description: "Learn how utility-first CSS frameworks are changing the way we style web applications.",
    date: "2025-04-15",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    content: `Tailwind CSS has revolutionized how we approach styling in modern web applications. This utility-first framework provides a different paradigm for writing CSS that many developers have come to love.

## The Utility-First Approach

Instead of writing custom CSS classes, Tailwind provides small, single-purpose utility classes:

\`\`\`html
<div class="flex items-center justify-between p-4 bg-white shadow-lg rounded-lg">
  <h2 class="text-xl font-bold text-gray-800">Hello Tailwind</h2>
  <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
    Click me
  </button>
</div>
\`\`\`

## Benefits of Tailwind

1. Rapid prototyping
2. Consistent styling
3. Lower CSS bundle size
4. Better maintainability

## Advanced Features

- Custom configurations
- Plugin system
- JIT compilation
- Dark mode support`
  }
];
