'use client'
import Alerts from '@/app/Parts/Alerts/Alerts'
import NavBarDashs from '@/app/Parts/Dashboard/NavBarDash/NavBarDash'
import axios from 'axios'
import { useEffect, useRef, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SchemaAboutMe } from "@/../Schemas/FormSchema";
import { useForm } from 'react-hook-form'
import TextArea from "../../../../Parts/TextArea/TextArea"
import { FormInputAboutMe } from "../../../../../Events/Events"
import InputsHighlight from '@/app/Parts/InputsHighlight/InputsHighlight'
import PartsHeader from '@/app/Parts/PartsHeader/PartsHeader';
import Bouttons from '@/app/Parts/Bouttons/Boutton';


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
        const [getcode, setcode] = useState<any>();
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
                        <div id="AboutMe">
                                <main className="lg:pl-72">
                                        <div className="text-black">
                                                <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                                                        {alert ? <Alerts getTitel={getTitel} getcode={getcode} CodeSucss={undefined} /> : null}
                                                        <div className={`flex flex-col justify-center items-center mt-12 translate-y-px text-black animate-scroll-top-parts`} id="AboutMe">
                                                                <div className="w-3/4 max-w-screen-lg">
                                                                        <PartsHeader Title="AboutMe" Question="Why choose me?" />
                                                                        <div className="flex w-full dark:border-2 dark:border-inherit shadow-xl tablet:shadow-[0px_0px_20px_-2px] shadow-[#1f2235]">
                                                                                <div className="hidden tablet:flex  w-6/12 bg-cover bg-no-repeat bg-center opacity-90 dark:border-2 dark:border-inherit">
                                                                                        {image === "" || image == null ? <img className='w-full h-[700px]' src={getProfile.image?.slice(11,-2)} alt="aboutImage" /> : <img className='w-full h-full' src={image} alt="aboutImage" />}
                                                                                        <div className="absolute mt-5">
                                                                                                <input className='' type="file" accept='image/*' name="file" id="Image-btn2" onChange={handleUploadimag} hidden />
                                                                                                <label className="text-white p-2 rounded-full cursor-pointer bg-ligth-color-text" htmlFor="Image-btn2">Choose Image</label>
                                                                                        </div>
                                                                                </div>
                                                                                <div className="w-full tablet:w-6/12 text-justify p-4 tablet:p-9">
                                                                                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                                                                                {FormInputAboutMe.map((e) => (
                                                                                                        <TextArea onInputChange={onInputChange} getProfile={getProfile} key={e.id} code={e.Code} Lable={e.name} TiTel="Summary" Register={register} errors={undefined} />
                                                                                                ))}
                                                                                        </div>
                                                                                        <div className="my-20">
                                                                                                <div className="highlight-heading">
                                                                                                        <span className="text-sm dark:text-white">"Here are a Few Highlights"</span>
                                                                                                </div>
                                                                                                <InputsHighlight code="EN" Title="Highlights" Lable="HighlightsEn" ArrayHighlight={ArrayHighlightEn} removeSecond={removeSecondEn} HandleOnPushArray={HandleOnPushArrayEn} HandleOnPush={HandleOnPushEn} />
                                                                                                <InputsHighlight code="DE" Title="Highlights" Lable="HighlightsDE" ArrayHighlight={ArrayHighlightDe} removeSecond={removeSecondDe} HandleOnPushArray={HandleOnPushArrayDe} HandleOnPush={HandleOnPushDe} />
                                                                                                <InputsHighlight code="FA" Title="Highlights" Lable="HighlightsFA" ArrayHighlight={ArrayHighlightFa} removeSecond={removeSecondFa} HandleOnPushArray={HandleOnPushArrayFa} HandleOnPush={HandleOnPushFa} />
                                                                                        </div>
                                                                                        <div className="mobile:flex justify-evenly mt-5">
                                                                                                <Bouttons LinkHref="#ContactMe" download="#" Title="ContactMe" Label="ContactMe" classButtons="w-40 border-inherit bg-black border-dark-color-text border-2 hover:border-ligth-color-text hover:dark:border-white pointer-events-none" />
                                                                                                <Bouttons LinkHref={"#"} download={"#"} Label="GetResume" Title="GetResume" classButtons="w-40 bg-ligth-color-text dark:bg-dark-color-text dark:text-black hover:bg-white hover:dark:bg-white hover:text-black pointer-events-none" />
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div className="my-5">
                                                                        <button
                                                                                type="submit"
                                                                                className="w-40 border-inherit bg-black border-dark-color-text border-2 hover:border-ligth-color-text hover:dark:border-white rounded-full py-3.5 text-sm font-semibold text-white shadow-sm"
                                                                        >
                                                                                upload
                                                                        </button>
                                                                </div>
                                                        </div>

                                                        {/* <div className="col-span-full">
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
                                                        </div> */}
                                                </form>
                                        </div>
                                </main>
                        </div>
                </>
        )
}
