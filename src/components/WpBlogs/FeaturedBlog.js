import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_STICKY_POST } from '@/data/posts'; // Adjust the import path as needed

const FeaturedBlog = () => {
  const { loading, error, data } = useQuery(QUERY_STICKY_POST, {
    variables: { /* any necessary variables */ },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Assuming the data returned has a structure { post: { ... } }
  const post = data?.post;

  if (!post) return <p>No featured post available.</p>;

  return (
    <div className="featured-blog">
      <h2>{post.title}</h2>
      {/* Render other post details as needed */}
      <p>{post.excerpt}</p>
      {/* Add more details as needed, like author, date, image, etc. */}
    </div>
  );
};

export default FeaturedBlog;
