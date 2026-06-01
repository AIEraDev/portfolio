"use client";

import { useEffect, useState } from "react";

interface Post {
  title: string;
  publishedAt: string;
  brief: string;
  url?: string;
  slug: string;
}

const HASHNODE_GQL_URL = "https://gql.hashnode.com";

async function fetchHashnodePosts(host = "blog.abdulkabirmusa.com"): Promise<Post[]> {
  const query = `
    query Publication {
      publication(host: "${host}") {
        posts(first: 6) {
          edges {
            node {
              title
              publishedAt
              brief
              url
              slug
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch(HASHNODE_GQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: { host },
      }),
    });

    const { data } = await response.json();
    if (data?.publication?.posts?.edges) {
      return data.publication.posts.edges.map((edge: any) => edge.node);
    }
    return [];
  } catch (error) {
    console.error("Error fetching Hashnode posts:", error);
    return [];
  }
}

export function Thinking() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetchHashnodePosts().then((res) => {
      if (res && res.length > 0) {
        setPosts(res);
      }
    });
  }, []);

  const fallbackPosts: Post[] = [
    {
      title: "You Need Your Code to Be More Reliable Than People Using It",
      publishedAt: "2024-12-10",
      brief: "Reliability isn't just about uptime; it's about handling the unpredictability of human behavior. Systems must be resilient to misuse, not just error.",
      url: "https://dev.to/aieradev/you-need-your-code-to-be-more-reliable-than-people-using-it-271o",
      slug: "reliability",
    },
    {
      title: "Context-First Architecture",
      publishedAt: "2024-11-15",
      brief: "In the age of LLMs, context is the new database. Designing systems that efficiently manage, retrieve, and inject context is the primary challenge of modern AI engineering.",
      url: "#",
      slug: "context-first",
    },
    {
      title: "The Death of Boilerplate",
      publishedAt: "2024-10-01",
      brief: "If you're writing CRUD handlers by hand in 2024, you're optimizing for the wrong metric. AI should generate the mechanism; engineers should design the policy.",
      url: "#",
      slug: "boilerplate",
    },
  ];

  const displayPosts = posts.length > 0 ? posts : fallbackPosts;

  const formatDate = (dateStr: string) => {
    try {
      return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  return (
    <section className="py-24 max-w-6xl mx-auto px-6">
      <div className="flex items-center gap-4 mb-16">
        <div className="h-px bg-border flex-1" />
        <h2 className="text-sm font-mono text-muted-foreground uppercase tracking-widest">
          03. Thinking & Engineering Depth
        </h2>
        <div className="h-px bg-border flex-1" />
      </div>

      <div className="space-y-12">
        {displayPosts.map((post) => (
          <article
            key={post.slug}
            className="group relative pl-6 border-l border-border hover:border-accent transition-colors py-2"
          >
            <div className="absolute -left-[5px] top-3 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-accent transition-colors" />
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
              <h3 className="text-lg font-medium group-hover:text-accent transition-colors">
                {post.url && post.url !== "#" ? (
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus:outline-none"
                  >
                    <span className="absolute inset-0" aria-hidden="true" />
                    {post.title}
                  </a>
                ) : (
                  post.title
                )}
              </h3>
              <time className="text-xs text-muted-foreground font-mono">
                {formatDate(post.publishedAt)}
              </time>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
              {post.brief}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
