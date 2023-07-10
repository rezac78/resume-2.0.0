'use client'
import { useForm } from "react-hook-form";
import { SchemaLogin } from "../../../../Schemas/FormSchema";
import React, { useRef, useState } from 'react'
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from 'next/navigation';
import Alerts from "../../Parts/Alerts/Alerts"
export default function Login() {
  const router = useRouter();
  const [getTitel, setTitel] = useState("");
  const [getcode, setcode] = useState("");
  const [alert, setAlert] = useState(false);                           

  const form: any = useRef();

  const { register, handleSubmit, formState: { errors: clientFormError } } = useForm({
    resolver: yupResolver(SchemaLogin),
  });
  const onSubmit = (data: any) => {
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/login`, data).then((result) => {
      if (result.data.status === 401) {
        setAlert(true);
        setTitel(result.data.message)
        setcode(result.data.status)
      }else{
        setAlert(true);
        setTitel(result.data.message)
        setcode(result.data.status)
        router.push("/Admin/dashboard");
      }
    })
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {alert ? <Alerts getTitel={getTitel} getcode={getcode} CodeSucss={undefined} /> : null}
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your Dashboard
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form ref={form} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="text"
                  {...register("email")}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  {...register("password")}
                  type="password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
