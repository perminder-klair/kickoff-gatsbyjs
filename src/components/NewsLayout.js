import 'twin.macro';
import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';

import Seo from './Seo';
import PageLayout from './PageLayout';

export default function PageTemplate({ data: { mdx } }) {
  return (
    <PageLayout>
      <Seo title={mdx.frontmatter.title} />
      <section tw="text-gray-600 relative">
        <div tw="container px-5 py-12 mx-auto">
          <h1 tw="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            {mdx.frontmatter.title}
          </h1>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </div>
      </section>
    </PageLayout>
  );
}

export const pageQuery = graphql`
  query NewsPageQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`;
