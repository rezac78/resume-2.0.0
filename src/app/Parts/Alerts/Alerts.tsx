"use client"
import { useTranslations } from 'next-intl';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid'
export default function Alerts({ CodeSucss, getcode, getTitel }: any) {
        const t = useTranslations('AlertsMSG');
        return (
                <div className="rounded-md bg-green-50 p-4">
                        <div className="flex">
                                <div className="flex-shrink-0">
                                        {+getcode === 401 ? <XMarkIcon className={`h-5 w-5 text-red-400`} aria-hidden="true" /> : <CheckCircleIcon className={`h-5 w-5 text-green-400`} aria-hidden="true" /> }
                                </div>
                                <div className="ml-3">
                                        <p className={`text-sm font-medium ${+getcode === 401 ?"text-red-800": "text-green-800"}`}>{getTitel}</p>
                                </div>
                        </div>
                </div>
        )
}
