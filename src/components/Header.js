import 'twin.macro';
import React, { Fragment } from 'react';
import { Link } from 'gatsby';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import config from '../utils/config';

const Header = () => (
  <Popover tw="relative bg-white">
    {({ open }) => (
      <>
        <div tw="max-w-7xl mx-auto px-4 sm:px-6">
          <div tw="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div tw="flex justify-start lg:w-0 lg:flex-1">
              <Link to="/">
                <span tw="sr-only">{config.siteName}</span>
                <img
                  tw="h-8 w-auto sm:h-10"
                  src="/images/logo-1024.png"
                  alt=""
                />
              </Link>
            </div>
            <div tw="-mr-2 -my-2 md:hidden">
              <Popover.Button tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span tw="sr-only">Open menu</span>
                <MenuIcon tw="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <Popover.Group as="nav" tw="hidden md:flex space-x-10">
              <Link to="/about">About</Link>
              <Link to="/news">News</Link>
              <Link to="/contact">Contact</Link>
            </Popover.Group>
          </div>
        </div>

        <Transition
          show={open}
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            static
            tw="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div tw="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div tw="pt-5 pb-6 px-5">
                <div tw="flex items-center justify-between">
                  <div>
                    <img
                      tw="h-8 w-auto"
                      src="/images/logo-1024.png"
                      alt={config.siteName}
                    />
                  </div>
                  <div tw="-mr-2">
                    <Popover.Button tw="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span tw="sr-only">Close menu</span>
                      <XIcon tw="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div tw="py-6 px-5 space-y-6">
                <div tw="grid grid-cols-2 gap-y-4 gap-x-8">
                  <Link to="/about">About</Link>
                  <Link to="/news">News</Link>
                  <Link to="/contact">Contact</Link>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
);

export default Header;
