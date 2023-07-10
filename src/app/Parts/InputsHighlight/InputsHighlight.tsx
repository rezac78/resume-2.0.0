'use client'
import React from 'react';
import Dividers from '../Dividers/Dividers';
interface InputsHighlightProps {
        HandleOnPush: any;
        HandleOnPushArray: any;
        removeSecond: any;
        ArrayHighlight: any;
        Title: string;
        Lable: string;
        code: string;
}

export default function InputsHighlight(props: InputsHighlightProps) {
        return (
                <div>
                        <Dividers Title={props.code} />

                        <label htmlFor={props.Lable} className="block text-sm font-medium leading-6 text-gray-900">
                                {props.Title}
                        </label>
                        <div className="mt-2 flex rounded-md shadow-sm">
                                <div className="relative flex flex-grow items-stretch focus-within:z-10">
                                        <input
                                                type="text"
                                                name={props.Lable}
                                                id={props.Lable}
                                                className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onChange={props.HandleOnPush}
                                        />
                                </div>
                                <button
                                        type="button"
                                        onClick={props.HandleOnPushArray}
                                        className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                >
                                        Push
                                </button>
                        </div>
                        {props.ArrayHighlight.map((e: any) => (
                                <span className="inline-flex items-center gap-x-0.5 rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                        {e}
                                        <button onClick={props.removeSecond} type="button" className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-green-600/20">
                                                <svg key={e} viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-green-700/50 group-hover:stroke-green-700/75">
                                                        <path d="M4 4l6 6m0-6l-6 6" />
                                                </svg>
                                                <span id={e} className="absolute -inset-1" />
                                        </button>
                                </span>
                        ))}
                </div>

        )
}
