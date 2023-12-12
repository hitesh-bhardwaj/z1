import { getPaginatedPosts } from '@/lib/posts';
import { getAllPosts, getPagesCount } from '@/lib/posts';
import Pagination from '@/components/WpBlogs/Pagination';
import PostCard from '@/components/WpBlogs/PostCard';
import { getCategories } from '@/lib/categories';

import { Cursor } from "../../../../cursor/index";
import SmoothScroll from "@/components/utils/SmoothScroll";

import Header from "@/components/Header/Header";  
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import PageLoader from "@/components/pageLoader";
import Modal from "@/components/PopupForm/formModal";
import CategoryList from '@/components/WpBlogs/CategoryList';

export default function Blog({ posts, pagination, categories }) {

  return (
    <>
    <SmoothScroll />
    <Cursor />

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

        <div>
          <CategoryList categories={categories} />
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
        basePath: '/blog/page',
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
