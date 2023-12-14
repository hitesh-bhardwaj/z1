import { getPaginatedPosts } from '@/lib/posts';
import { getAllPosts, getPagesCount } from '@/lib/posts';
import Pagination from '@/components/WpBlogs/Pagination';
import PostCard from '@/components/WpBlogs/PostCard';
import { getCategories } from '@/lib/categories';

import { Cursor } from "../../../cursor/index";
import SmoothScroll from "@/components/utils/SmoothScroll";

import Header from "@/components/Header/Header";  
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import PageLoader from "@/components/pageLoader";
import Modal from "@/components/PopupForm/formModal";
import CategoryList from '@/components/WpBlogs/CategoryList';
import { useEffect, useState } from 'react';

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Blog({ posts, pagination, categories }) {
  const [activeCategory, setActiveCategory] = useState('all');
  
  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#blog",
      {
        rotationX: -80,
        opacity: 0,
        translateY: 300,
        transformPerspective: "1000",
        transformOrigin: "top center",
      },
      {
        delay: 3.5,
        duration: 1.3,
        rotationX: 0,
        opacity: 1,
        translateY: 0,
        stagger: 0.2,
      }
    );
    return () => tl.kill();
  }, []);

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
      delay: 4,
      ease: 'power2.out'
    });
    return () => tl.kill();
  }, []);

  return (
    <>
    <SmoothScroll />
    <Cursor isGelly={true}/>

    <PageLoader text={"Our Thoughts & Resources"} />
    <Modal />

    <main>
      <Header />

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

        <div id='fadeUp'>
          <CategoryList categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        </div>
        
        <ul className='ul-items'>
          {posts.map((post) => {
            return (
              <li key={post.slug} id='fadeUp'>
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

export async function getStaticProps({ params = {} } = {}) {
  const { posts, pagination } = await getPaginatedPosts({
    currentPage: params?.page,
    queryIncludes: 'archive',
  });

  const categories = await getCategories();

  if (!pagination.currentPage) {
    return {
      props: {},
      notFound: true,
    };
  }

  return {
    props: {
      posts,
      categories,
      pagination: {
        ...pagination,
        basePath: '/blog',
      },
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const { posts } = await getAllPosts({
    queryIncludes: 'index',
  });
  const pagesCount = await getPagesCount(posts);

  const paths = [...new Array(pagesCount)].map((_, i) => {
    return { params: { page: String(i + 1) } };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}
