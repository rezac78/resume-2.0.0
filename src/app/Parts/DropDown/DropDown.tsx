import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { GlobeAltIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Iran from "../../../../public/Home/Iran.svg"
import English from "../../../../public/Home/uk.svg"

function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
}

export default function DropDown() {
        const router = useRouter();
        return (
                <Menu as="div" className="relative inline-block text-left">
                        <div>
                                <Menu.Button className="flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                                        <span className="sr-only">Open options</span>
                                        <GlobeAltIcon className="h-7 w-7" aria-hidden="true" />
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
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                                <Menu.Item>
                                                        {({ active }) => (
                                                                <Link
                                                                        href="#"
                                                                        className={classNames(
                                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                'group flex items-center px-4 py-2 text-sm'
                                                                        )}
                                                                >
                                                                        <Image src={Iran} className="w-3/12 mr-4" alt="flag" />
                                                                        {"LanguageEn"}
                                                                </Link>
                                                        )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                        {({ active }) => (
                                                                <Link
                                                                        href="#"
                                                                        className={classNames(
                                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                                'group flex items-center px-4 py-2 text-sm'
                                                                        )}
                                                                >
                                                                        <Image src={English} className="w-3/12 mr-4" alt="flag" />
                                                                        {"LanguageEn"}
                                                                </Link>
                                                        )}
                                                </Menu.Item>
                                        </div>
                                </Menu.Items>
                        </Transition>
                </Menu>
        )
}
