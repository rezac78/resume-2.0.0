'use client'
import Alerts from '@/app/Parts/Alerts/Alerts';
import NavBarDashs from '@/app/Parts/Dashboard/NavBarDash/NavBarDash'
import { SchemaAddProject } from "@/../Schemas/FormSchema";
import { yupResolver } from '@hookform/resolvers/yup';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormInputProject } from "../../../../../Events/Events"
import axios from 'axios';
import Dividers from '@/app/Parts/Dividers/Dividers';
import FormInput from '@/app/Parts/FormInput/FormInput';


export default function Project() {
        const form: any = useRef();
        const [getTitel, setTitel] = useState("");
        const [getcode, setcode] = useState("");
        const [alert, setAlert] = useState(false);

        const { register, handleSubmit, formState: { errors: clientFormError } } = useForm({
                resolver: yupResolver(SchemaAddProject),
        });
        const onSubmit = (item: any) => {
                    const options = {
                      headers: { 'Content-Type': 'application/json', Accept: 'application/json', "Access-Control-Allow-Origin": "*" },
                    };
                    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/Project`, item, options).then((result) => {
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
                                                                {FormInputProject.map((e) => (
                                                                        <>
                                                                                <Dividers Title={e.Code} />
                                                                                <FormInput Lable={e.name} Type='text' Placeholder={''} TiTel={e.Title} Register={register} errors={clientFormError} getCode={e.Code} />
                                                                        </>
                                                                ))}
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
