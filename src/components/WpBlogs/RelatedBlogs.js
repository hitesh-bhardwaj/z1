import React from 'react';
import Link from 'next/link';
import gsap from "gsap";

const RelatedBlogs = ({ allPosts, currentCategory, currentPostSlug }) => {

  console.log("currentCategory in Related Blogs:", currentCategory);

  // Filter for related posts based on category
  const relatedPosts = allPosts ? allPosts.filter(post => 
        post.category === currentCategory && post.slug !== currentPostSlug
    ).slice(0, 3) : [];

  return (
    <div className="related-articles">
        <div className="related-article-heading">
          <h3>RELATED ARTICLES</h3>
          <Link href="/blog" data-cursor-size="80px" data-cursor-exclusion>
            <p>All articles</p>
          </Link>
        </div>

        <div className="related-box-img">
            {/* {relatedPosts.map((post) => (
                <div key={post.slug} className='box-img-content'>
                    <div className="img-box-related">
                        <Link href={`/posts/${post.slug}`}>
                            <img
                              src={post.featuredImage?.sourceUrl}
                              alt={post.title}
                              data-cursor-text="Read Now"
                              data-cursor-color="#000"
                              data-cursor-size="100px"
                              onMouseEnter={(e) => handleHover(e)}
                              onMouseLeave={(e) => handleHoverExit(e)}
                              loading='lazy'
                            />
                              <p className='blog-list-tag'>{post.category}</p>
                        </Link>
                    </div>
                    <h4>{post.title}</h4>
                </div>
            ))} */}
        </div>
    </div>
  );
};

export default RelatedBlogs;
