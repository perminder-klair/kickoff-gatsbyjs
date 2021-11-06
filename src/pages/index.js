import 'twin.macro';
import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" description="Welcome to GatsbyJs v4" />
    <div tw="relative bg-white overflow-hidden">
      <div tw="max-w-7xl mx-auto">
        <div tw="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            tw="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main tw="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div tw="sm:text-center lg:text-left">
              <h1 tw="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span tw="block xl:inline">Welcome to Kickoff</span>{' '}
                <span tw="block text-indigo-600 xl:inline">built using</span>
              </h1>
              <p tw="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                GatsbyJs + TailwindCSS
              </p>
              <div tw="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div tw="rounded-md shadow">
                  <a
                    href="#"
                    tw="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div tw="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    tw="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    Live demo
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
