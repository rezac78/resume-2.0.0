import { useEffect, useState } from 'react';
import Dividers from "../../Dividers/Dividers";
import axios from 'axios';

interface TableFormWorkHistory {
        Title: string;
        TiTleHeader: any;
        getWorkHistory: any;
}

export default function TableFormWorkHistory(props: TableFormWorkHistory) {
        const [getData, setData] = useState<any>([]);
        useEffect(() => {
                setData(props.getWorkHistory)
        }, [props.getWorkHistory]);

        const HandleDeleted = (e: any) => {
                axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/WorkHistory/${e._id}`).then((result) => {
                        console.log(result)
                });
        }
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
                                                                        {getData.map((e: any, i: number) => {
                                                                                return <tr>
                                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{i + 1}</td>
                                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.WorkHistoryTitleEn}</td>
                                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.WorkHistoryTitleDe}</td>
                                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.WorkHistoryTitleFa}</td>
                                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.WorkHistoryLocationEn}</td>
                                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.WorkHistoryLocationDe}</td>
                                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.WorkHistoryLocationFa}</td>
                                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.WorkHistoryPositionEn}</td>
                                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.WorkHistoryPositionDe}</td>
                                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.WorkHistoryPositionFa}</td>
                                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.WorkHistoryDataEn}</td>
                                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.WorkHistoryDataDe}</td>
                                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.WorkHistoryDataFa}</td>
                                                                                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{e.WorkHistoryLink}</td>
                                                                                        <td className="relative flex whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                                                                <a href={`/update/WorkHistory/${e._id}`} className="text-indigo-600 hover:text-indigo-900">
                                                                                                        Edit<span className="sr-only"></span>
                                                                                                </a>
                                                                                                <div onClick={() => HandleDeleted(e)} className="text-indigo-600 cursor-pointer hover:text-indigo-900 ml-5">
                                                                                                        Deleted<span className="sr-only"></span>
                                                                                                </div>
                                                                                        </td>
                                                                                </tr>
                                                                        })}
                                                                </tbody>
                                                        </table>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}
