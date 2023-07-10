'use client'
import Alerts from '@/app/Parts/Alerts/Alerts'
import NavBarDashs from '@/app/Parts/Dashboard/NavBarDash/NavBarDash'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaAboutMe } from "@/../Schemas/FormSchema";
import { useForm } from 'react-hook-form'
import TextArea from "../../../../Parts/TextArea/TextArea"
import { FormInputAboutMe} from "../../../../../Events/Events"
import InputsHighlight from '@/app/Parts/InputsHighlight/InputsHighlight'


export default function AboutMe() {
        const [getProfile, setProfile] = useState<any>([]);
        const [ArrayHighlightFa, setArrayHighlightFa] = useState<any>([]);
        const [ArrayHighlightEn, setArrayHighlightEn] = useState<any>([]);
        const [ArrayHighlightDe, setArrayHighlightDe] = useState<any>([]);
        function getData() {
                axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/AboutMe`).then((result) => {
                        setProfile(result.data.AboutMe[0])
                        setArrayHighlightFa(result.data.AboutMe[0].HighlightsFA)
                        setArrayHighlightEn(result.data.AboutMe[0].HighlightsEn)
                        setArrayHighlightDe(result.data.AboutMe[0].HighlightsDE)
                });
        }
        useEffect(() => {
                getData();
        }, []);
        const form: any = useRef();
        const [getTitel, setTitel] = useState("");
        const [getcode, setcode] = useState("");
        const [alert, setAlert] = useState(false);
        const [image, setImage] = useState<any>("");
        const [HighlightEn, setHighlightEn] = useState("");
        const [HighlightDe, setHighlightDe] = useState("");
        const [HighlightFa, setHighlightFa] = useState("");

        const { register, handleSubmit, formState: { errors: clientFormError } } = useForm({
                resolver: yupResolver(SchemaAboutMe),
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
        const HandleOnPushEn = (e: any) => {
                setHighlightEn(e.target.value)

        }
        const HandleOnPushArrayEn = (e: { target: { value: string } }) => {
                setArrayHighlightEn((oldArray: any) => [...oldArray, HighlightEn])
                e.target.value === ""
        }
        const removeSecondEn = (e: { target: { id: any } }) => {
                setArrayHighlightEn((current: any[]) =>
                        current.filter((fruit) => fruit !== e.target.id)
                );
        }
        const HandleOnPushDe = (e: any) => {
                setHighlightDe(e.target.value)

        }
        const HandleOnPushArrayDe = (e: { target: { value: string } }) => {
                setArrayHighlightDe((oldArray: any) => [...oldArray, HighlightDe])
                e.target.value === ""
        }
        const removeSecondDe = (e: { target: { id: any } }) => {
                setArrayHighlightDe((current: any[]) =>
                        current.filter((fruit) => fruit !== e.target.id)
                );
        }
        const HandleOnPushFa = (e: any) => {
                setHighlightFa(e.target.value)

        }
        const HandleOnPushArrayFa = (e: { target: { value: string } }) => {
                setArrayHighlightFa((oldArray: any) => [...oldArray, HighlightFa])
                e.target.value === ""
        }
        const removeSecondFa = (e: { target: { id: any } }) => {
                setArrayHighlightFa((current: any[]) =>
                        current.filter((fruit) => fruit !== e.target.id)
                );
        }
        const onSubmit = (item: any) => {
                const Data = {
                        img: image === "" ? getProfile?.image : JSON.stringify({ base64: image }),
                        HighlightsEn: ArrayHighlightEn,
                        HighlightsDE: ArrayHighlightDe,
                        HighlightsFA: ArrayHighlightFa,
                        summaryEn: getProfile.summaryEn,
                        summaryFA: getProfile.summaryFA,
                        summaryDE: getProfile.summaryDE,
                }
                const NewData = { ...item, ...Data };
                const options = {
                        headers: { 'Content-Type': 'application/json', Accept: 'application/json', "Access-Control-Allow-Origin": "*" },
                };
                axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/AboutMe/${getProfile._id}`, NewData, options).then((result) => {
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
                                                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                        {FormInputAboutMe.map((e) => (
                                                                                <TextArea onInputChange={onInputChange} getProfile={getProfile} key={e.id} code={e.Code} Lable={e.name} TiTel="Summary" Register={register} errors={undefined} />
                                                                        ))}
                                                                </div>
                                                                <InputsHighlight code="EN" Title="Highlights" Lable="HighlightsEn" ArrayHighlight={ArrayHighlightEn} removeSecond={removeSecondEn} HandleOnPushArray={HandleOnPushArrayEn} HandleOnPush={HandleOnPushEn} />
                                                                <InputsHighlight code="DE" Title="Highlights" Lable="HighlightsDE" ArrayHighlight={ArrayHighlightDe} removeSecond={removeSecondDe} HandleOnPushArray={HandleOnPushArrayDe} HandleOnPush={HandleOnPushDe} />
                                                                <InputsHighlight code="FA" Title="Highlights" Lable="HighlightsFA" ArrayHighlight={ArrayHighlightFa} removeSecond={removeSecondFa} HandleOnPushArray={HandleOnPushArrayFa} HandleOnPush={HandleOnPushFa} />
                                                                <div className="mt-2 flex items-center gap-x-3">
                                                                        <input type="file" accept='image/*' name="file" onChange={handleUploadimag} />
                                                                        {image === "" || image == null ? <img className='h-12 w-12' src={getProfile.image} /> : <img className='h-12 w-12' src={image} />}
                                                                </div>
                                                                <button
                                                                        type="submit"
                                                                        className="rounded-md bg-white mt-10 px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                                                >
                                                                        upload
                                                                </button>
                                                        </div>
                                                </form>
                                        </div>
                                </main>
                        </div>
                </>
        )
}
