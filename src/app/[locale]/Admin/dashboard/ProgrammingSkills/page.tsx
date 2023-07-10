'use client'
import Alerts from '@/app/Parts/Alerts/Alerts';
import NavBarDashs from '@/app/Parts/Dashboard/NavBarDash/NavBarDash'
import { SchemaAddProgrammingSkills } from "@/../Schemas/FormSchema";
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';


export default function ProgrammingSkills() {
        const form: any = useRef();
        const [getTitel, setTitel] = useState("");
        const [getcode, setcode] = useState("");
        const [alert, setAlert] = useState(false);
        const [getProfile, setProfile] = useState<any>([]);
        const [ArrayProgramming, setArrayProgramming] = useState<any>([]);
        const [ArrayProgrammingNumber, setArrayProgrammingNumber] = useState<any>([]);
        function getData() {
                axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/ProgrammingSkills`).then((result) => {
                        setProfile(result.data.ProgrammingSkills[0]._id)
                        setArrayProgrammingNumber(result.data.ProgrammingSkills[0].ProgrammingSkillsNumber)
                        setArrayProgramming(result.data.ProgrammingSkills[0].ProgrammingSkillsTitle)
                });
        }
        useEffect(() => {
                getData();
        }, []);
        const [Programming, setProgramming] = useState("");
        const [ProgrammingNumber, setProgrammingNumber] = useState("");


        const { register, handleSubmit, formState: { errors: clientFormError } } = useForm({
                resolver: yupResolver(SchemaAddProgrammingSkills),
        });


        const HandleOnPush = (e: any) => {
                setProgramming(e.target.value)
        }
        const HandleOnPushNumber = (e: any) => {
                setProgrammingNumber(e.target.value)
        }
        const HandleOnPushArray = (e: any) => {
                setArrayProgramming((oldArray: any) => [...oldArray, Programming])
        }
        const HandleOnPushArrayNumber = (e: any) => {
                setArrayProgrammingNumber((oldArray: any) => [...oldArray, ProgrammingNumber])
        }
        const removeSecond = (e: any) => {
                setArrayProgramming((current: any[]) =>
                        current.filter((fruit) => fruit !== e.target.id)
                );
        }
        const removeSecondNumber = (e: any) => {
                setArrayProgrammingNumber((current: any[]) =>
                        current.filter((fruit) => fruit !== e.target.id)
                );
        }

        const onSubmit = (item: any) => {
                const Data = {
                        ProgrammingSkillsTitle: ArrayProgramming,
                        ProgrammingSkillsNumber: ArrayProgrammingNumber,
                }
                const options = {
                        headers: { 'Content-Type': 'application/json', Accept: 'application/json', "Access-Control-Allow-Origin": "*" },
                };
                axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/ProgrammingSkills/${getProfile}`, Data, options).then((result) => {
                        console.log(result)
                });
        }
        return (
                <>
                        <NavBarDashs />
                        <div>
                                {alert ? <Alerts getTitel={getTitel} getcode={getcode} CodeSucss={undefined} /> : null}
                                <main className="lg:pl-72">
                                        <div className="text-black">
                                                <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                                                        <div className="col-span-full">
                                                                <div>
                                                                        <label htmlFor="ProgrammingSkillsTitle" className="block text-sm font-medium leading-6 text-gray-900">
                                                                                ProgrammingSkillsTitle
                                                                        </label>
                                                                        <div className="mt-2 flex rounded-md shadow-sm">
                                                                                <div className="relative flex flex-grow items-stretch focus-within:z-10">
                                                                                        <input
                                                                                                type="text"
                                                                                                name="ProgrammingSkillsTitle"
                                                                                                id="ProgrammingSkillsTitle"
                                                                                                className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                                                onChange={HandleOnPush}
                                                                                        />
                                                                                </div>
                                                                                <button
                                                                                        type="button"
                                                                                        onClick={HandleOnPushArray}
                                                                                        className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                                                >
                                                                                        Push
                                                                                </button>
                                                                        </div>
                                                                        <label htmlFor="ProgrammingSkillsNumber" className="block text-sm font-medium leading-6 text-gray-900">
                                                                                ProgrammingSkillsNumber
                                                                        </label>
                                                                        <div className="mt-2 flex rounded-md shadow-sm">
                                                                                <div className="relative flex flex-grow items-stretch focus-within:z-10">
                                                                                        <input
                                                                                                type="text"
                                                                                                name="ProgrammingSkillsNumber"
                                                                                                id="ProgrammingSkillsNumber"
                                                                                                className="block w-full rounded-none rounded-l-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                                                                onChange={HandleOnPushNumber}
                                                                                        />
                                                                                </div>
                                                                                <button
                                                                                        type="button"
                                                                                        onClick={HandleOnPushArrayNumber}
                                                                                        className="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                                                >
                                                                                        Push
                                                                                </button>
                                                                        </div>
                                                                        {ArrayProgramming.map((e: any) => (
                                                                                <span className="inline-flex items-center gap-x-0.5 rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                                                                                        {e}
                                                                                        <button onClick={removeSecond} type="button" className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-green-600/20">
                                                                                                <svg key={e} viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-green-700/50 group-hover:stroke-green-700/75">
                                                                                                        <path d="M4 4l6 6m0-6l-6 6" />
                                                                                                </svg>
                                                                                                <span id={e} className="absolute -inset-1" />
                                                                                        </button>
                                                                                </span>
                                                                        ))}
                                                                        <div className="mt-2">
                                                                                {ArrayProgrammingNumber.map((e: any) => (
                                                                                        <span className="inline-flex items-center gap-x-0.5 rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
                                                                                                {e}
                                                                                                <button onClick={removeSecondNumber} type="button" className="group relative -mr-1 h-3.5 w-3.5 rounded-sm hover:bg-red-600/20">
                                                                                                        <svg key={e} viewBox="0 0 14 14" className="h-3.5 w-3.5 stroke-red-700/50 group-hover:stroke-red-700/75">
                                                                                                                <path d="M4 4l6 6m0-6l-6 6" />
                                                                                                        </svg>
                                                                                                        <span id={e} className="absolute -inset-1" />
                                                                                                </button>
                                                                                        </span>
                                                                                ))}
                                                                        </div>
                                                                </div>
                                                                <button
                                                                        type="submit"
                                                                        className="rounded-md bg-white mt-10 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                                >
                                                                        create
                                                                </button>
                                                        </div>
                                                </form>
                                        </div>
                                </main>
                        </div>
                </>
        )
}
