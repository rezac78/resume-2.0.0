'use client'
import Alerts from '@/app/Parts/Alerts/Alerts';
import NavBarDashs from '@/app/Parts/Dashboard/NavBarDash/NavBarDash'
import { SchemaEditProject } from "@/../Schemas/FormSchema";
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useRef, useState } from 'react';
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
        const [image, setImage] = useState<any>("");
        const [getProfile, setProfile] = useState<any>([]);
        function getData() {
                const id = window.location.pathname.slice(-24)
                axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/Project/${id}`).then((result) => {
                        setProfile(result.data.Project)
                });
        }
        useEffect(() => {
                getData();
        }, []);
        const { register, handleSubmit, formState: { errors: clientFormError } } = useForm({
                resolver: yupResolver(SchemaEditProject),
        });

        const onInputChange = (e: any) => {
                setProfile({ ...getProfile, [e.target.name]: e.target.value });
        };
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
                        img: image === "" ? getProfile?.image : JSON.stringify({ base64: image }),
                        ProjectTitleEn: getProfile.ProjectTitleEn,
                        ProjectTitleDe: getProfile.ProjectTitleDe,
                        ProjectTitleFa: getProfile.ProjectTitleFa,
                        ProjectsTochnologiesEn: getProfile.ProjectsTochnologiesEn,
                        ProjectsTochnologiesDe: getProfile.ProjectsTochnologiesDe,
                        ProjectsTochnologiesFa: getProfile.ProjectsTochnologiesFa,
                        ProjectsSummeryEn: getProfile.ProjectsSummeryEn,
                        ProjectsSummeryDe: getProfile.ProjectsSummeryDe,
                        ProjectsSummeryFa: getProfile.ProjectsSummeryFa,
                        ProjectsDataEn: getProfile.ProjectsDataEn,
                        ProjectsDataDe: getProfile.ProjectsDataDe,
                        ProjectsDataFa: getProfile.ProjectsDataFa,
                        ProjectsLink: getProfile.ProjectsLink,
                }
                const options = {
                        headers: { 'Content-Type': 'application/json', Accept: 'application/json', "Access-Control-Allow-Origin": "*" },
                };
                axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/Project/${getProfile._id}`, Data, options).then((result) => {
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
                                                                                <FormInput Lable={e.name} Type='text' value={getProfile} onInputChange={onInputChange} Placeholder={''} TiTel={e.Title} Register={register} errors={clientFormError} getCode={e.Code} />
                                                                        </>
                                                                ))}
                                                                 <div className="mt-2 flex items-center gap-x-3">
                                                                        <input type="file" accept='image/*' name="file" onChange={handleUploadimag} />
                                                                        {image === "" || image == null ? <img className='h-12 w-12' src={getProfile.image?.slice(11, -2)} /> : <img className='h-12 w-12' src={image} />}
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
