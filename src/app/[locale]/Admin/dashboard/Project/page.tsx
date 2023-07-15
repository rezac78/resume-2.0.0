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
        const [getcode, setcode] = useState<any>("");
        const [alert, setAlert] = useState(false);
        const [image, setImage] = useState<any>("");

        const { register, handleSubmit, reset, formState: { errors: clientFormError } } = useForm({
                resolver: yupResolver(SchemaAddProject),
        });
        const handleUploadimag = (e: any) => {
                const reader = new FileReader();
                reader.readAsDataURL(e.target.files[0]);
                reader.onload = () => {
                        setImage(reader.result);
                };
                reader.onerror = error => {
                        console.log("Error: ", error);
                };
        };
        const onSubmit = (item: any) => {
                const Data = {
                        img: JSON.stringify({ base64: image }),
                }
                const NewData = { ...item, ...Data };
                const options = {
                        headers: { 'Content-Type': 'application/json', Accept: 'application/json', "Access-Control-Allow-Origin": "*" },
                };
                axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/Project`, NewData, options).then((result) => {
                        setTitel(result.data.Message)
                        setcode(result.status)
                });
                reset();
                setAlert(true);
                setTimeout(() => {
                        setAlert(false);
                }, 5000);
        }
        return (
                <>
                        <NavBarDashs />
                        <div>
                                <main className="lg:pl-72">
                                        <div className="text-black">
                                                {alert ? <Alerts getTitel={getTitel} getcode={getcode} CodeSucss={undefined} /> : null}
                                                <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                                                        <div className="px-6 mobile:px-24 py-6">
                                                                {FormInputProject.map((e) => (
                                                                        <>
                                                                                <Dividers Title={e.Code} />
                                                                                <FormInput Lable={e.name} Type='text' Placeholder={''} TiTel={e.Title} Register={register} errors={clientFormError} getCode={e.Code} />
                                                                        </>
                                                                ))}
                                                                <div className="mt-2 flex items-center gap-x-3">
                                                                        <input type="file" accept='image/*' name="file" id="Image-btn5" hidden onChange={handleUploadimag} />
                                                                        <label className="text-white p-2 rounded-full cursor-pointer bg-ligth-color-text" htmlFor="Image-btn5">Choose Image</label>
                                                                        {image === "" || image == null ? null : <img className='rounded-full h-[20%] w-[20%]' alt="UploadIMAGE" src={image} />}
                                                                </div>
                                                                <div className="mt-5">
                                                                        <button
                                                                                type="submit"
                                                                                className="w-32 border-inherit dark:border-dark-color-text border-2 hover:border-ligth-color-text hover:dark:border-white rounded-full py-3.5 text-sm font-semibold text-black shadow-sm"
                                                                        >
                                                                                create
                                                                        </button>
                                                                </div>
                                                        </div>
                                                </form>
                                        </div>
                                </main>
                        </div>
                </>
        )
}
