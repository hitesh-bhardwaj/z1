import { useState } from 'react';

import { getPaginatedPosts, sortStickyPosts } from '@/lib/posts';
import { getCategories } from '@/lib/categories';

import PostCard from '../components/WpBlogs/PostCard';
import Pagination from '../components/WpBlogs/Pagination';
import { Cursor } from "../../cursor/index";
import SmoothScroll from "@/components/utils/SmoothScroll";

import Header from "@/components/Header/Header";  
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import PageLoader from "@/components/pageLoader";
import Modal from "@/components/PopupForm/formModal";
import CategoryList from '@/components/WpBlogs/CategoryList';
import FeaturedPost from '@/components/WpBlogs/FeaturedPost';

export default function Blog({ posts, featuredPost, pagination, categories }) {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <>
      <SmoothScroll />
      <Cursor />

      <PageLoader text={"Our Thoughts & Resources"} />
      <Modal />

      <main>
        <Header />

          {/* Featured Post Component */}
          {featuredPost && (
            <FeaturedPost post={featuredPost} />
          )}

        <section className='blogs-sub-section'> 
          <div
            className="blogs-heading"
            data-cursor-size="10px"
            data-cursor-text=""
          >
            <h1 id="blog">
              <span>All Articles</span>
            </h1>
          </div>

          <div>
            <CategoryList categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          </div>

          <ul className='ul-items'>
            {posts.map((post) => {
              return (
                <li key={post.slug}>
                  <PostCard post={post} />
                </li>
              );
            })}
          </ul>
          {pagination && (
            <Pagination
              addCanonical={false}
              currentPage={pagination?.currentPage}
              pagesCount={pagination?.pagesCount}
              basePath={pagination?.basePath}
            />
          )}
        </section>

        {/* ======================== Footer ====================== */}
        <section className="desktop-footer mt-150">
          <Footer />
        </section>

        <section className="mobile-footer">
          <FooterMobile />
        </section>
        {/* ======================== Footer END ====================== */}
      </main>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params || {};

  // Fetch paginated posts
  let { posts, pagination } = await getPaginatedPosts({
    queryIncludes: 'archive',
  });

  // Fetch categories
  const categories = await getCategories();

  // If a category slug is provided, filter posts by category
  if (slug) {
    const { posts: filteredPosts, pagination: filteredPagination } = await getPaginatedPosts({
      queryIncludes: 'archive',
      categoryId: slug, // Pass the category ID or slug to filter posts
    });

    posts = filteredPosts;
    pagination = {
      ...filteredPagination,
      basePath: `/categories/${slug}/page`,
    };
  }

  // Sort posts with sticky posts first
  posts = sortStickyPosts(posts);

  // Separate the featured post
  const featuredPost = posts.find((post) => post.isSticky) || null;

  // Remove the featured post from regular posts
  posts = posts.filter((post) => !post.isSticky);

  return {
    props: {
      posts,
      featuredPost,
      categories,
      pagination: {
        ...pagination,
        basePath: slug ? `/categories/${slug}/page` : '/blog',
      },
    },
    revalidate: 10,
  };
}
