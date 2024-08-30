// app/posts/[id]/page.tsx
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type Post = {
  id: number;
  title: string;
  body: string;
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
};

const PostDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      fetch(`${process.env.BASE_URL}/posts/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setPost(data);
          setLoading(false);
        })
        .catch((err) => {
          setError('Failed to load post.');
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!post) return <p>Post not found</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg mb-6">{post.body}</p>
      <div className="flex justify-between">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
          👍 {post.reactions.likes}
        </button>
        <button className="bg-red-500 text-white py-2 px-4 rounded-lg">
          👎 {post.reactions.dislikes}
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded-lg">
          👁️ {post.views}
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
