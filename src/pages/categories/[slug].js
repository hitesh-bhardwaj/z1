// pages/categories/[slug].js
import { useState } from 'react';
import { getAllCategories, getCategoryBySlug } from '@/lib/categories';
import { getPostsByCategoryId } from '@/lib/posts';

import CategoryList from '@/components/WpBlogs/CategoryList';
import CategoryPosts from '@/components/WpBlogs/CategoryPosts';
import { Cursor } from '../../../cursor/index';
import SmoothScroll from '@/components/utils/SmoothScroll';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import FooterMobile from '@/components/Mobile/FooterMobile';
// import PageLoader from '@/components/pageLoader';
import Modal from '@/components/PopupForm/formModal';

const DEFAULT_POST_OPTIONS = {};

export default function Category({ category, posts, categories }) {
  const [activeCategory, setActiveCategory] = useState(`${category.name}`);

  return (
    <>
      <SmoothScroll />
      <Cursor />

      {/* <PageLoader text={`${category.name} Blogs`} /> */}
      <Modal />

      <main>
        <Header />

        <section className='blogs-sub-section'>
          <div className='blogs-heading' data-cursor-size='10px' data-cursor-text=''>
            <h1 id='blog'>
              <span>{` ${category.name} Blogs`}</span>
            </h1>
          </div>

          <div>
            <CategoryList categories={categories} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
          </div>

          <CategoryPosts posts={posts} />
        </section>

        {/* ======================== Footer ====================== */}
        <section className='desktop-footer mt-150'>
          <Footer />
        </section>

        <section className='mobile-footer'>
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

  const paths = categories.map((category) => ({
    params: {
      slug: category.slug,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
}
