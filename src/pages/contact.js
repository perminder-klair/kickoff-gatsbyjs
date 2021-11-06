import 'twin.macro';
import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';

const ContactPage = () => (
  <Layout>
    <Seo title="Contact Us" />
    <section tw="text-gray-600 relative">
      <div tw="container px-5 py-24 mx-auto">
        <div tw="flex flex-col text-center w-full mb-6">
          <h1 tw="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Contact Us
          </h1>
          <p tw="lg:w-2/3 mx-auto leading-relaxed text-base">
            We’re as accessible as your good neighbor. Feel free to give us a
            shout.
          </p>
        </div>
        <div tw="lg:w-1/2 md:w-2/3 mx-auto">
          <div tw="flex flex-wrap -m-2">
            <div tw="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a tw="text-indigo-500" href={`mailto:${config.email}`}>
                📧 {config.email}
              </a>{' '}
              |{' '}
              <a tw="text-indigo-500" href={`tel:${config.telephone}`}>
                ☎️ {config.telephone}
              </a>
              <p tw="leading-normal my-5">📍{config.location}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ContactPage;
