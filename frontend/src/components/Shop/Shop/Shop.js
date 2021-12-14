import React from 'react';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ShoppingCartIcon } from '@heroicons/react/outline'
import Cart from '../Cart/Cart/Cart';
import Robots from '../Robots/Robots';

const Shop = () => {
    return (
        <div>
            <div className="bg-blue-300 relative py-12">
                <h1 className="xl:text-4xl font-bold text-white absolute xl:block left-4 top-4 xl:px-10">Robot Market</h1>

                {/* Displays cart for smaller screens, hidden on larger screens */}
                <Menu as="div" className="xl:hidden absolute right-4 top-4 inline-block text-left">
                    <div>
                        <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-2 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                            View Cart
                            <ShoppingCartIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    <Cart></Cart>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>

            {/* Shop section for displaying robots and cart (only on larger sceens)*/}
            <div className="mx-auto grid grid-cols-1 xl:grid-cols-7 gap-8 xl:gap-16">
                <div className="hidden xl:block py-12 xl:py-24">
                </div>
                <div className="col-span-4 bg-white py-6 xl:py-12">
                    <Robots></Robots>
                </div>
                <div className="col-span-2 hidden xl:block py-12 px-5">
                    <Cart></Cart>
                </div>
            </div>
        </div >
    );
};

export default Shop;