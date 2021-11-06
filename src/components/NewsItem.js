import 'twin.macro';
import React from 'react';
import { Link } from 'gatsby';
import dayjs from 'dayjs';
import { StaticImage } from 'gatsby-plugin-image';

const NewsItem = ({ post }) => (
  <>
    <div tw="p-4 md:w-1/3">
      <div tw="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <StaticImage
          tw="lg:h-48 md:h-36 w-full object-cover object-center"
          src="https://dummyimage.com/722x402"
          alt="blog"
          width={722}
          height={402}
        />
        <div tw="p-6">
          <h2 tw="tracking-widest text-xs font-medium text-gray-400 mb-1">
            {dayjs(post.frontmatter.date).format('MMMM YYYY')}
          </h2>
          <h2 tw="tracking-widest text-xs font-medium text-gray-400 mb-1">
            {post.frontmatter.category}
          </h2>
          <Link to={post.fields.slug}>
            <h1 tw="text-lg font-medium text-gray-900 mb-3">
              {post.frontmatter.title}
            </h1>
          </Link>
          <p tw="leading-relaxed mb-3">{post.excerpt}</p>
        </div>
      </div>
    </div>
  </>
);

export default NewsItem;
