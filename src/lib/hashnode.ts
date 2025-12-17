const HASHNODE_API_URL = "https://gql.hashnode.com";

export interface BlogPost {
    title: string;
    brief: string;
    slug: string;
    publishedAt: string;
    url: string;
}

export async function getLatestPosts(host: string = "blog.abdulkabirmusa.com"): Promise<BlogPost[]> {
    const query = `
    query GetPosts($host: String!) {
      publication(host: $host) {
        posts(first: 3) {
          edges {
            node {
              title
              brief
              slug
              publishedAt
              url
            }
          }
        }
      }
    }
  `;

    try {
        const response = await fetch(HASHNODE_API_URL, {
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

        if (!data?.publication?.posts?.edges) {
            return [];
        }

        return data.publication.posts.edges.map((edge: any) => edge.node);
    } catch (error) {
        console.error("Error fetching Hashnode posts:", error);
        return [];
    }
}
