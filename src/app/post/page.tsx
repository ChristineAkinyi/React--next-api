// "use client";
// import React from 'react';
// import usePosts from '../hooks/usePosts';

// const Posts: React.FC = () => {
//   const { posts, loading, error, handleLike, handleDislike, handleViews } = usePosts();

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center w-full h-screen p-5 bg-gradient-to-r from-gray-100 to-gray-300">
//         <p className="text-lg text-gray-700 font-semibold">Loading...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center w-full h-screen p-5 bg-gradient-to-r from-red-100 to-red-300">
//         <p className="text-lg text-red-700 font-semibold">Error: {error}</p>
//       </div>
//     );
//   }

//   const truncateText = (text: string, length: number) => {
//     return text.length > length ? text.substring(0, length) + "..." : text;
//   };

//   return (
//     <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
//       <div className="w-full max-w-5xl bg-gray-200 p-6 rounded-lg shadow-lg">
//         {posts.length > 0 ? (
//           posts.map(post => (
//             <div
//               key={post.id}
//               className="bg-white border border-gray-300 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out mb-8"
//             >
//               <h1 className="text-2xl font-bold mb-4 text-gray-800">{post.title}</h1>
//               <p className="text-left text-gray-700 mb-5">{truncateText(post.body, 150)}</p>
//               <div className="flex justify-between items-center text-sm">
//                 <button
//                   onClick={() => handleLike(post.id)}
//                   className="bg-blue-300 text-blue-800 py-2 px-4 rounded-md flex items-center hover:bg-blue-400 transition-colors duration-300 ease-in-out"
//                 >
//                   👍 <span className="ml-1">{post.reactions?.likes || 0}</span>
//                 </button>
//                 <button
//                   onClick={() => handleDislike(post.id)}
//                   className="bg-red-300 text-red-800 py-2 px-4 rounded-md flex items-center hover:bg-red-400 transition-colors duration-300 ease-in-out"
//                 >
//                   👎 <span className="ml-1">{post.reactions?.dislikes || 0}</span>
//                 </button>
//                 <button
//                   onClick={() => handleViews(post.id)}
//                   className="bg-green-300 text-green-800 py-2 px-4 rounded-md flex items-center hover:bg-green-400 transition-colors duration-300 ease-in-out"
//                 >
//                   👁️ <span className="ml-1">{post.views || 0}</span>
//                 </button>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-600">No posts available</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Posts;
"use client";
import React from 'react';
import usePosts from '../hooks/usePosts';

const Posts: React.FC = () => {
  const { posts, loading, error, handleLike, handleDislike, handleViews } = usePosts();

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen p-5 bg-gradient-to-r from-gray-100 to-gray-300">
        <p className="text-lg text-gray-700 font-semibold">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-screen p-5 bg-gradient-to-r from-red-100 to-red-300">
        <p className="text-lg text-red-700 font-semibold">Error: {error}</p>
      </div>
    );
  }

  const truncateText = (text: string, length: number) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <div className="w-full max-w-5xl bg-gray-200 p-6 rounded-lg shadow-lg">
        {posts.length > 0 ? (
          posts.map(post => (
            <div
              key={post.id}
              className="bg-white border border-gray-300 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out mb-8"
            >
              <h1 className="text-2xl font-bold mb-4 text-gray-800">{post.title}</h1>
              <p className="text-left text-gray-700 mb-5">
                {truncateText(post.body, 300)} {/* Increased length to 300 */}
              </p>
              <div className="flex justify-between items-center text-sm">
                <button
                  onClick={() => handleLike(post.id)}
                  className="bg-blue-300 text-blue-800 py-2 px-4 rounded-md flex items-center hover:bg-blue-400 transition-colors duration-300 ease-in-out"
                >
                  👍 <span className="ml-1">{post.reactions?.likes || 0}</span>
                </button>
                <button
                  onClick={() => handleDislike(post.id)}
                  className="bg-red-300 text-red-800 py-2 px-4 rounded-md flex items-center hover:bg-red-400 transition-colors duration-300 ease-in-out"
                >
                  👎 <span className="ml-1">{post.reactions?.dislikes || 0}</span>
                </button>
                <button
                  onClick={() => handleViews(post.id)}
                  className="bg-green-300 text-green-800 py-2 px-4 rounded-md flex items-center hover:bg-green-400 transition-colors duration-300 ease-in-out"
                >
                  👁️ <span className="ml-1">{post.views || 0}</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No posts available</p>
        )}
      </div>
    </div>
  );
};

export default Posts;
