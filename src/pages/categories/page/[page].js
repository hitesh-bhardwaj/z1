import { getAllCategories, getCategoryBySlug } from '@/lib/categories';
import { getPaginatedPostsByCategoryId } from '@/lib/posts';
import PostCard from '@/components/WpBlogs/PostCard';
import Pagination from '@/components/WpBlogs/Pagination';
import { Cursor } from "../../../../cursor/index";
import SmoothScroll from "@/components/utils/SmoothScroll";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import PageLoader from "@/components/pageLoader";
import Modal from "@/components/PopupForm/formModal";
import CategoryList from '@/components/WpBlogs/CategoryList';

const DEFAULT_POST_OPTIONS = {};

export default function CategoryPage({ 
  category, 
  posts, 
  postOptions = DEFAULT_POST_OPTIONS,
  pagination, 
  categories
}) {
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
              // Add activeCategory handling if needed
            />
          </div>

          <ul className='ul-items'>
            {posts.map((post) => (
              <li key={post.slug}>
                <PostCard post={post} />
              </li>
            ))}
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

export async function getStaticProps({ params = {}, query = {} } = {}) {
  const { category } = await getCategoryBySlug(params?.slug);

  if (!category) {
    return {
      props: {},
      notFound: true,
    };
  }

  const page = params.page || 1;
  const { posts, pagination } = await getPaginatedPostsByCategoryId({
    categoryId: category.databaseId,
    currentPage: page,
    queryIncludes: 'archive',
  });

  const categories = await getAllCategories();

  return {
    props: {
      category,
      posts,
      categories,
      pagination,
    },
  };
}

export async function getStaticPaths() {
  const { categories } = await getAllCategories();

  const paths = categories.flatMap((category) => {
    const { slug } = category;
    const { pagesCount } = getPaginatedPostsByCategoryId({
      categoryId: category.databaseId,
    });

    return Array.from({ length: pagesCount }, (_, index) => ({
      params: {
        slug,
        page: (index + 1).toString(),
      },
    }));
  });

  return {
    paths,
    fallback: 'blocking',
  };
}
