"use client";
import React from 'react';
import usePosts from '../hooks/usePosts';
import Image from 'next/image';

const Posts: React.FC = () => {
  const { posts, loading, error, handleLike, handleDislike, handleViews } = usePosts();

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-gray-100 to-gray-300">
        <p className="text-lg text-gray-700 font-semibold animate-pulse">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-red-100 to-red-300">
        <p className="text-lg text-red-700 font-semibold">Error: {error}</p>
      </div>
    );
  }

  const truncateText = (text: string, length: number) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <div className="w-full max-w-6xl">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {posts.map(post => (
              <div
                key={post.id}
                className="bg-white border border-gray-300 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                <h1 className="text-xl font-bold mb-3 text-gray-800">{post.title}</h1>
                <p className="text-left text-gray-700 mb-4">
                  {truncateText(post.body, 150)} 
                </p>

                <Image
                  src="/kitty.jpg" 
                  alt="Cat image"         
                  width={300}             
                  height={200}            
                  className="object-cover mb-4 rounded-lg shadow-md"
                />

                <div className="flex justify-between items-center text-sm mt-4">
                  <button
                    onClick={() => handleLike(post.id)}
                    className="bg-blue-400 text-white py-2 px-4 rounded-lg flex items-center hover:bg-blue-500 transition-colors duration-300 ease-in-out"
                  >
                    👍 <span className="ml-1">{post.reactions?.likes || 0}</span>
                  </button>
                  <button
                    onClick={() => handleDislike(post.id)}
                    className="bg-red-400 text-white py-2 px-4 rounded-lg flex items-center hover:bg-red-500 transition-colors duration-300 ease-in-out"
                  >
                    👎 <span className="ml-1">{post.reactions?.dislikes || 0}</span>
                  </button>
                  <button
                    onClick={() => handleViews(post.id)}
                    className="bg-green-400 text-white py-2 px-4 rounded-lg flex items-center hover:bg-green-500 transition-colors duration-300 ease-in-out"
                  >
                    👁️ <span className="ml-1">{post.views || 0}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No posts available</p>
        )}
      </div>
    </div>
  );
};

export default Posts;