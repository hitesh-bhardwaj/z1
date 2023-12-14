import { useEffect, useState } from 'react';
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

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Blog({ posts, featuredPost, pagination, categories }) {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo("#fadeUp", {
      opacity: 0,
      y: 100,
    },{
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 1,
      delay: 3.5,
    });
    return () => tl.kill();
  }, []);

    useEffect(() => {
      const elements = document.querySelectorAll('.blog-anim');
  
      elements.forEach((element) => {
        gsap.fromTo(
          element,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: element,
              start: 'top 85%',
              ease: 'power2.easeOut',
            },
          }
        );
      });
  
      return () => {
        gsap.timeline().clear();
      };
    }, []);

  return (
    <>
      <SmoothScroll />
      <Cursor isGelly={true}/>

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

            className="blogs-heading blog-anim"
            data-cursor-size="10px"
            data-cursor-text=""
          >
            <h1 id="blog">
              <span>All Articles</span>
            </h1>
          </div>

          <div className='blog-anim'>
            <CategoryList categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          </div>

          <ul className='ul-items'>
            {posts.map((post) => {
              return (
                <li key={post.slug} className='blog-anim'>
                  <PostCard post={post} />
                </li>
              );
            })}
          </ul>

          <div className='blog-anim'>
            {pagination && (
              <Pagination
                addCanonical={false}
                currentPage={pagination?.currentPage}
                pagesCount={pagination?.pagesCount}
                basePath={pagination?.basePath}
              />
            )}
          </div>
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
