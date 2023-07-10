import { useEffect, useState } from 'react';
import Dividers from "../../Dividers/Dividers";
import Link from 'next/link';

interface TableFormAbout {
  Title: string;
  TiTleHeader: any;
  getAboutMe: any;
}

export default function TableFormAbout(props: TableFormAbout) {
  const [getData, setData] = useState<any>([]);
  useEffect(() => {
    setData(props.getAboutMe)
  }, [props.getAboutMe]);
  return (
    <div className="p-4 sm:px-6 lg:px-8">
      <Dividers Title={props.Title} />
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    {props.TiTleHeader.map((e: any) => (
                      <th key={e.id} scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        {e.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white overflow-x-auto">
                  <tr>
                    {getData.map((e: any) => {
                      return <>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          <img className='h-12 w-12' src={e.image} />
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.summaryEn}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.summaryDE}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.summaryFA}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.HighlightsEn}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.HighlightsDE}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.HighlightsFA}</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                          <a href="/Admin/dashboard/AboutMe" className="text-indigo-600 hover:text-indigo-900">
                            Edit<span className="sr-only">, reza</span>
                          </a>
                        </td>
                      </>
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
