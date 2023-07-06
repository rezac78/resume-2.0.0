import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { GlobeAltIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';

import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Iran from "../../../../public/Home/Iran.svg"
import English from "../../../../public/Home/uk.svg"
import Germany from "../../../../public/Home/Germany.svg"
import { ChangeEvent, useTransition } from 'react';
import { usePathname } from 'next-intl/client';
import { useLocale, useTranslations } from 'next-intl';

function classNames(...classes: string[]) {
        return classes.filter(Boolean).join(' ')
}

export default function DropDown() {
        const t = useTranslations('LocaleSwitcher');
        const [isPending, startTransition] = useTransition();
        const router = useRouter();
        const locale = useLocale();
        const pathname = usePathname();
        const onSelectChange = (code: any) => {
                startTransition(() => {
                        router.replace(`/${code}${pathname}`);
                });
        }

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
                                                                <div
                                                                        defaultValue={locale}
                                                                        className={classNames(
                                                                                active ? 'bg-gray-100 text-gray-900 cursor-pointer' : 'text-gray-700',
                                                                                'group flex ltr:items-center rtl:justify-between px-4 py-2 text-sm'
                                                                        )} onClick={() => onSelectChange("fa")}>
                                                                        <Image src={Iran} className="w-3/12 mr-4 ltr:mt-0 rtl:-mt-2" alt="flag" />
                                                                        {t('locale', { locale: 'fa' })}
                                                                </div>
                                                        )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                        {({ active }) => (
                                                                <div
                                                                        defaultValue={locale}
                                                                        className={classNames(
                                                                                active ? 'bg-gray-100 text-gray-900 cursor-pointer' : 'text-gray-700',
                                                                                'group flex ltr:items-center rtl:justify-between px-4 py-2 text-sm'
                                                                        )} onClick={() => onSelectChange("en")}>
                                                                        <Image src={English} className="w-3/12 mr-4 ltr:mt-0 rtl:-mt-2" alt="flag" />
                                                                        {t('locale', { locale: 'en' })}
                                                                </div>
                                                        )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                        {({ active }) => (
                                                                <div
                                                                        defaultValue={locale}
                                                                        className={classNames(
                                                                                active ? 'bg-gray-100 text-gray-900 cursor-pointer' : 'text-gray-700',
                                                                                'group flex ltr:items-center rtl:justify-between px-4 py-2 text-sm'
                                                                        )} onClick={() => onSelectChange("de")}>
                                                                        <Image src={Germany} className="w-3/12 mr-4 ltr:mt-0 rtl:-mt-2" alt="flag" />
                                                                        {t('locale', { locale: 'de' })}
                                                                </div>
                                                        )}
                                                </Menu.Item>
                                        </div>
                                </Menu.Items>
                        </Transition>
                </Menu>
        )
}
