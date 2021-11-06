import 'twin.macro';
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Seo from '../components/Seo';
import NewsItem from '../components/NewsItem';

const NewsUpdates = ({ data }) => {
  const { edges: posts } = data.allMdx;

  return (
    <Layout>
      <Seo title="News & Updates" />
      <section tw="text-gray-600">
        <div tw="container px-5 py-24 mx-auto">
          <div tw="flex flex-col text-center w-full mb-12">
            <h1 tw="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              News & Updates
            </h1>
          </div>
          <div tw="flex flex-wrap -m-4">
            {posts.map(({ node: post }) => (
              <NewsItem key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsUpdates;

export const pageQuery = graphql`
  query newsIndex {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
            category
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
