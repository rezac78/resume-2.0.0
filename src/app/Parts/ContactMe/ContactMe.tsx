'use client'
import React, { useEffect, useRef, useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify';
import { useTranslation } from "react-i18next";
// import { useFormik } from "formik";
import i18next from 'i18next';
// import api from "../../api/api";
// import emailjs from '@emailjs/browser';
import Image from 'next/image'
import Link from 'next/link'
// import { FormSchema } from "../../../schemas";
import Mailz from '../../../../public/Home/mailz.svg'
// import Aos from "aos";
// import "aos/dist/aos.css";
import PaperPlane from "../../../../public/Home/email-send.png"
import PartsHeader from '../PartsHeader/PartsHeader';
import IconSocialMedia from '../IconSocialMedia/IconSocialMedia';
import FormInput from '../FormInput/FormInput';
import BouttonScroll from '../BouttonScroll/BouttonScroll';
const Inputs =[
        { id:1, Lable: 'name', Type: 'text', Placeholder:'name', TiTel:"Name"},
        { id:2, Lable: 'email', Type: 'email', Placeholder:'email', TiTel:"Email"},
        { id:3, Lable: 'message', Type: 'text', Placeholder:'message', TiTel:"Message"},
]

export default function ContactMe() {
        const { t } = useTranslation();
        const [inputVal, setInputVal] = useState(false)
        const form = useRef();
        // const LocaleCookie = i18next.language;
        const onSubmit = (e, actions) => {
                // setInputVal(true);
                // api.post("api/", e);
                // emailjs.sendForm('service_pke74m6', 'template_hk0t1os', form.current, '-AohTxKTUcg7RfNbr')
                //         .then((result) => {
                //                 LocaleCookie === "en" ?
                //                         toast.success("Successful send 👍", {
                //                                 position: "top-right",
                //                                 closeButton: true,
                //                                 closeOnClick: true,
                //                         })
                //                         :
                //                         toast.success("ارسال شد 👍", {
                //                                 position: "top-right",
                //                                 closeButton: true,
                //                                 closeOnClick: true,
                //                         });
                //                 setInputVal(false);
                //                 actions.resetForm();
                //         }, (error) => {
                //                 toast.error(` Eror❗️❗️❗️`, {
                //                         position: "top-right",
                //                         closeOnClick: true,
                //                 });
                //         });
        }
        // const { values, errors, handleChange, handleSubmit } = useFormik({
        //         initialValues: {
        //                 user_email: "",
        //                 user_name: "",
        //                 message: "",
        //         },
        //         validationSchema: FormSchema,
        //         onSubmit,
        // });
        return (
                <div data-aos="fade-up" className="translate-y-px" id="ContactMe">
                        <PartsHeader Title="ContactMe" Question="whyContactMe?" />
                        <div className="p-8 flex flex-col justify-center bg-[#1f2235] max-w-[1100px] rounded-xl mx-auto shadow-[0px_0px_20px_-2px] shadow-[#1f2235] dark:border-2 dark:border-[#383838]">
                                <div className="">
                                        <h2 className="text-white mb-5 text-2xl mobile:text-4xl font-bold tracking-wider">
                                                <p className="after:content-['|'] after:animate-blinkerType">Get In Touch 📧</p>
                                        </h2>
                                        <IconSocialMedia />
                                </div>
                                <div className="tablet:flex mx-auto">
                                        <div className="w-full h-auto mr-5 mb-5 tablet:mt-12">
                                                <h3 className='font-normal text-white text-lg opacity-60 tracking-wider'>Send Your Email Here!</h3>
                                                <Image className='w-full h-2/4 opacity-60' src={Mailz} alt="not found" />
                                        </div>
                                        <form className='w-full tablet:w-3/4 flex p-4 justify-center flex-col -mt-12 bg-white rounded-xl opacity-90 text-white shadow-[0px_0px_20px_-2px] shadow-[#1f2235]' ref={form}>
                                                <div>
                                                        {Inputs.map((e)=>{
                                                                return <FormInput Lable={e.Lable} Type={e.Type} Placeholder={e.Placeholder} TiTel={e.TiTel} />
                                                        })}
                                                </div>
                                                <button
                                                        type="button"
                                                        className="flex mt-4 p-1 w-40 text-gray-300 text-lg bg-gray-900 items-center justify-center rounded-full border-2 border-ligth-color-text hover:bg-gray-900 hover:border-2 hover:border-[#1f2235] hover:ease-in hover:delay-500 dark:border-dark-color-text dark:hover:border-[#1f2235]"
                                                >
                                                       send<Image className='ml-1' src={PaperPlane} alt="PaperPlane" />
                                                </button>
                                        </form>
                                </div>
                        </div>
                        <BouttonScroll/>
                        {/* <ToastContainer /> */}
                </div>
        )
}
