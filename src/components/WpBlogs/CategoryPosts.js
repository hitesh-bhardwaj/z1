// components/WpBlogs/CategoryPosts.js
import React from 'react';
import PostCard from './PostCard';

const CategoryPosts = ({ posts }) => {
  return (
    <div className='category-posts'>
      <ul className='ul-items'>
        {posts.map((post) => (
          <li key={post.slug}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPosts;
