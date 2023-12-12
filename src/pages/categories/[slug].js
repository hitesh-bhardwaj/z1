import { useState } from 'react';
import { getAllCategories, getCategoryBySlug } from '@/lib/categories';
import { getPostsByCategoryId } from '@/lib/posts';

import PostCard from '@/components/WpBlogs/PostCard';
import Pagination from '@/components/WpBlogs/Pagination';
import { Cursor } from "../../../cursor/index";
import SmoothScroll from "@/components/utils/SmoothScroll";

import Header from "@/components/Header/Header";  
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import PageLoader from "@/components/pageLoader";
import Modal from "@/components/PopupForm/formModal";
import CategoryList from '@/components/WpBlogs/CategoryList';

const DEFAULT_POST_OPTIONS = {};

export default function Category({ 
  category, 
  posts, 
  postOptions = DEFAULT_POST_OPTIONS,
  pagination, 
  categories
}) {

  const [activeCategory, setActiveCategory] = useState('');

  return (
    <>
      <SmoothScroll />
      <Cursor />

      <PageLoader text={`${category.name} Blogs`} />
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
              <span>{` ${category.name} Blogs`}</span>
            </h1>
          </div>

          <div>
          <CategoryList
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
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

export async function getStaticProps({ params = {} } = {}) {
  const { category } = await getCategoryBySlug(params?.slug);

  if (!category) {
    return {
      props: {},
      notFound: true,
    };
  }

  const { posts } = await getPostsByCategoryId({
    categoryId: category.databaseId,
    queryIncludes: 'archive',
  });

  const categories = await getAllCategories();

  return {
    props: {
      category,
      posts,
      categories,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  
  const { categories } = await getAllCategories();

  const paths = categories.map((category) => {
    const { slug } = category;
    return {
      params: {
        slug,
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
}