"use client"
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { Typewriter } from 'react-simple-typewriter';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react';
export default function Alerts({ CodeSucss }: any) {
        const t = useTranslations('AlertsMSG');
        return (
                <div className="rounded-md bg-green-50 p-4">
                        {CodeSucss === 200 ? <div className="flex">
                                <div className="flex-shrink-0">
                                        <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3">
                                        <p className="text-sm font-medium text-green-800">{t("Successfully")}</p>
                                </div>
                        </div> : <div className="flex">
                                <div className="flex-shrink-0">
                                        <XMarkIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
                                </div>
                                <div className="ml-3">
                                        <p className="text-sm font-medium text-red-800">{t("error")}</p>
                                </div>
                        </div>}

                </div>
        )
}
