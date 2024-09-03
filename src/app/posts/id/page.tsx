// posts/[id]/page.tsx
import { notFound } from 'next/navigation';

interface Post {
  id: string;
  title: string;
  content: string;
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://api.example.com/posts/${id}`);
  const post: Post = await res.json();

  if (!post) notFound();
  return post;
}

export default async function PostDetailsPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}