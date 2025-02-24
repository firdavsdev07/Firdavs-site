import { Post } from './types';

const HYGRAPH_ENDPOINT = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT!;
const HYGRAPH_TOKEN = process.env.HYGRAPH_TOKEN;

async function fetchAPI(query: string, variables = {}) {
  const res = await fetch(HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(HYGRAPH_TOKEN && {
        Authorization: `Bearer ${HYGRAPH_TOKEN}`,
      }),
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();

  if (json.errors) {
    throw new Error(json.errors[0].message);
  }

  return json.data;
}

export async function getAllPosts(): Promise<Post[]> {
  const query = `
    query GetAllPosts {
      posts(orderBy: createdAt_DESC) {
        id
        title
        slug
        description
        image {
          url
        }
        technologies {
          text
        }
        demoLink
        githubLink
        content {
          html
        }
        createdAt
      }
    }
  `;

  try {
    const data = await fetchAPI(query);
    return data.posts;
  } catch (error) {
    console.error('Error fetching all posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const data = await fetchAPI(`
    query PostBySlug($slug: String!) {
      post(where: { slug: $slug }) {
        id
        title
        slug
        description
        content {
          html
        }
        image {
          url
        }
        technologies {
          text
        }
        demoLink
        githubLink
        createdAt
      }
    }
  `, {
    slug,
  });

  return data.post;
}
