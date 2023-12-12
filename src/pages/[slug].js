import React, { useEffect } from "react";
import { Cursor } from "../../cursor/index";
import SmoothScroll from "@/components/utils/SmoothScroll";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";
import FooterMobile from "@/components/Mobile/FooterMobile";
import PageLoader from "@/components/pageLoader";
// import RelatedBlogs from "@/components/Blogs/RelatedBlogs";
import BlogInfo from "@/components/WpBlogs/BlogInfo";
import { getApolloClient } from '@/lib/apollo-client';
import { QUERY_POST_DETAILS, QUERY_ALL_POST_SLUGS, QUERY_ALL_POSTS } from '@/data/posts';
import { format } from 'date-fns';

gsap.registerPlugin(ScrollTrigger);

const PostDetail = ({ post, allPosts }) => {
  console.log("PostDetail Component Rendered"); // Check if component is rendering
  console.log("Post Data:", post); // Check post data
  console.log("All Posts Data:", allPosts);

  const formattedDate = format(new Date(post.date), 'dd/MM/yyyy');

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

  // Hero Section Animation
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      "#right-section",
      {
        opacity: 0,
        translateY: 200,
      },
      {
        delay: 4,
        duration: 1.3,
        opacity: 1,
        stagger: 0.1,
        translateY: 0,
      }
    );
    return () => tl.kill();
  }, []);


if (globalThis.innerWidth>1024) {
  // Section Pinnnig
  useEffect(() => {
    let ctx = gsap.context(() => {
      let brandImagePin = document.getElementById("left-section");
      let brandImageNotPin = document.getElementById("right-section");
      ScrollTrigger.create({
        trigger: brandImagePin,
        start: "top 10%",
        endTrigger: brandImageNotPin,
        end: "bottom 80%",
        invalidateOnRefresh: true,
        pin: brandImagePin,
        markers: false,
      });
    });
    return () => ctx.revert();
  });
}

// const getRelatedPosts = () => {
//   console.log("getRelatedPosts called"); // Check if function is called
//   const currentCategory = post?.categories?.edges[0]?.node?.name;
//   console.log("Current Category:", currentCategory); // Debugging

//   if (!currentCategory) {
//     console.log("No current category found");
//     return [];
//   }

//   const relatedPosts = allPosts
//     .filter(({ categories }) => 
//       categories.edges.some(categoryEdge => 
//         categoryEdge.node.name === currentCategory
//       )
//     )
//     .filter(p => p.slug !== post.slug) // Exclude the current post
//     .slice(0, 3); // Get only 3 posts

//   console.log("Related Posts:", relatedPosts); // Debugging
//   return relatedPosts;
// };

  return (
    <>
      <SmoothScroll />
      <Cursor />
      <PageLoader text={post.title} />
      
      <main>
        <Header />
          
          <div className="b__dt-main">
            
            <div
              className="b__dt-head-contain"
              data-cursor-size="10px"
              data-cursor-text="">
              <h1 data-jelly id='blog'>{post.title}</h1>
            </div>
            
            <div className="b__dt-main-blog" id="main-blog-container">
                
              <div className="b__dt-auth" id="left-section">
                <BlogInfo avatar={post.author.node.avatar.url} author={post.author.node.name} date={formattedDate} shareLink={post.slug} />
              </div>

              <div 
                className="b__dt-content" 
                id="right-section"
              >
                <div 
                dangerouslySetInnerHTML={{
                  __html: post.content,
                }}/> 

                {/* Displaying the category name */}
                {/* <div>
                  <h2>{post.categories.edges[0].node.name}</h2>
                  <a href={post.slug}>{post.slug}</a>
                </div> */}

                <div className="blog__dt-tags">
                  {post.tags && post.tags.edges.map(({ node }) => (
                    <h4 key={node.name} className="blog__dt-tag">
                      {node.name}
                    </h4>
                  ))} 
                </div>
              </div>
            </div>
          </div>

          {/* <div className="related-blogs">
            <h2>Related Blogs</h2>
            <div className="related-blogs-container">
              {getRelatedPosts().map((relatedPost) => (
                <div key={relatedPost.slug} className="related-blog">
                  <h3>{relatedPost.title}</h3>
                </div>
              ))}
            </div>
          </div> */}
    
            {/* =================== Related Articles =========================== */}
            {/* <RelatedBlogs currentBlogLink={post.slug} category={post.categories.edges[0].node.name} /> */}
            {/* =================== Related Articles END =========================== */}
    
            {/* ======================== Footer ====================== */}
            <div className="desktop-footer">
              <Footer />
            </div>
    
            <div className="mobile-footer">
              <FooterMobile />
            </div>
            {/* ======================== Footer END ====================== */}
          </main>
          
        </>
      );
    }

export default PostDetail;

export async function getStaticProps({ params }) {
  const apolloClient = getApolloClient();
  const { slug } = params;

  // Fetch the details of the current post
  const { data: postData } = await apolloClient.query({
    query: QUERY_POST_DETAILS,
    variables: { slug },
  });

  // Fetch all posts
  const { data: allPostsData } = await apolloClient.query({
    query: QUERY_ALL_POSTS, // Adjust this query to fetch all posts
});

return {
    props: {
        post: postData.post,
        allPosts: allPostsData.posts.edges.map(edge => edge.node),
    },
    revalidate: 10,
};
}

export async function getStaticPaths() {
  const apolloClient = getApolloClient();

  const { data } = await apolloClient.query({
    query: QUERY_ALL_POST_SLUGS
  });

  const allSlugs = data.posts.edges.map(edge => edge.node.slug);

  const paths = allSlugs.map(slug => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: 'blocking', // or 'false' or 'true'
  };
}
