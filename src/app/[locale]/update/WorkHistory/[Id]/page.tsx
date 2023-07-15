'use client'
import Alerts from '@/app/Parts/Alerts/Alerts';
import NavBarDashs from '@/app/Parts/Dashboard/NavBarDash/NavBarDash'
import { SchemaEditWorkHistory } from "@/../Schemas/FormSchema";
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormInputWorkHistory } from "../../../../../Events/Events"
import axios from 'axios';
import Dividers from '@/app/Parts/Dividers/Dividers';
import FormInput from '@/app/Parts/FormInput/FormInput';


export default function WorkHistory() {
        const form: any = useRef();
        const [getTitel, setTitel] = useState("");
        const [getcode, setcode] = useState<any>("");
        const [alert, setAlert] = useState(false);
        const [image, setImage] = useState<any>("");
        const [getProfile, setProfile] = useState<any>([]);
        function getData() {
                const id = window.location.pathname.slice(-24)
                axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/WorkHistory/${id}`).then((result) => {
                        setProfile(result.data.WorkHistory)
                });
        }
        useEffect(() => {
                getData();
        }, []);
        const { register, handleSubmit, formState: { errors: clientFormError } } = useForm({
                resolver: yupResolver(SchemaEditWorkHistory),
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
                        WorkHistoryTitleEn: getProfile.WorkHistoryTitleEn,
                        WorkHistoryTitleDe: getProfile.WorkHistoryTitleDe,
                        WorkHistoryTitleFa: getProfile.WorkHistoryTitleFa,
                        WorkHistoryLocationEn: getProfile.WorkHistoryLocationEn,
                        WorkHistoryLocationDe: getProfile.WorkHistoryLocationDe,
                        WorkHistoryLocationFa: getProfile.WorkHistoryLocationFa,
                        WorkHistoryPositionEn: getProfile.WorkHistoryPositionEn,
                        WorkHistoryPositionDe: getProfile.WorkHistoryPositionDe,
                        WorkHistoryPositionFa: getProfile.WorkHistoryPositionFa,
                        WorkHistoryDataEn: getProfile.WorkHistoryDataEn,
                        WorkHistoryDataDe: getProfile.WorkHistoryDataDe,
                        WorkHistoryDataFa: getProfile.WorkHistoryDataFa,
                        WorkHistoryLink: getProfile.WorkHistoryLink,
                }
                const options = {
                        headers: { 'Content-Type': 'application/json', Accept: 'application/json', "Access-Control-Allow-Origin": "*" },
                };
                axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/WorkHistory/${getProfile._id}`, Data, options).then((result) => {
                        setTitel(result.data.Message)
                        setcode(result.status)
                });
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
                                                                {FormInputWorkHistory.map((e) => (
                                                                        <>
                                                                                <Dividers Title={e.Code} />
                                                                                <FormInput Lable={e.name} Type='text' value={getProfile} onInputChange={onInputChange} Placeholder={''} TiTel={e.Title} Register={register} errors={clientFormError} getCode={e.Code} />
                                                                        </>
                                                                ))}
                                                                <div className="m-2 flex items-center">
                                                                        <div className="-mt-3">
                                                                                <input className='' type="file" accept='image/*' name="file" id="Image-btn" onChange={handleUploadimag} hidden />
                                                                                <label className="text-white p-2 rounded-full cursor-pointer bg-ligth-color-text" htmlFor="Image-btn">Choose Image</label>
                                                                        </div>
                                                                        {image === "" || image == null ? <img className='rounded-full h-[20%] w-[20%]' width={100} height={100} src={getProfile.image?.slice(11, -2)} alt="ProfileImg" /> : <img className='rounded-full h-[20%] w-[20%]' src={image} />}
                                                                </div>
                                                                <button
                                                                        type="submit"
                                                                        className="w-40 border-inherit dark:border-dark-color-text border-2 hover:border-ligth-color-text hover:dark:border-white rounded-full py-3.5 text-sm font-semibold text-black shadow-sm"
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
