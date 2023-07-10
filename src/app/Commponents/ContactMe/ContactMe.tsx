'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl';
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from 'next/image'
import { SchemaForm } from "../../../../Schemas/FormSchema";
import Mailz from '@/../public/Home/mailz.svg'
import PaperPlane from "@/../public/Home/email-send.png"
import PartsHeader from '../../Parts/PartsHeader/PartsHeader';
import IconSocialMedia from '../../Parts/IconSocialMedia/IconSocialMedia';
import FormInput from '../../Parts/FormInput/FormInput';
import BouttonScroll from '../../Parts/BouttonScroll/BouttonScroll';
import Alerts from "../../Parts/Alerts/Alerts"
export default function ContactMe() {
        const form: any = useRef();
        const [inputVal, setInputVal] = useState(false)
        const [getCode, setCode] = useState("")
        const t = useTranslations('ContactMe');
        const Inputs = [
                { id: 1, Lable: 'user_name', Type: 'text', Placeholder: t("NameTitle"), TiTel: t("NameTitle") },
                { id: 2, Lable: 'user_email', Type: 'email', Placeholder: t("EmailTitle"), TiTel: t("EmailTitle") },
                { id: 3, Lable: 'message', Type: 'text', Placeholder: t("MessageTitle"), TiTel: t("MessageTitle") },
        ]
        const [windowWidth, setWindowWidth] = useState(0);
        const [CodeSucss, setcodeSucss] = useState<any>();
        const [alert, setAlert] = useState(false);
        useEffect(() => {
                function handleResize() {
                        setWindowWidth(window.scrollY);
                }
                window.addEventListener("scroll", handleResize);
                handleResize();
                const getCockie = window.location.pathname
                if (getCockie !== null) setCode(getCockie.slice(1, 3));
        }, []);
        const { register, handleSubmit, formState: { errors: clientFormError } } = useForm({
                resolver: yupResolver(SchemaForm),
        });
        const onSubmit = (data: any) => {
                setInputVal(true);
                emailjs.sendForm('service_pke74m6', 'template_hk0t1os', form.current, '-AohTxKTUcg7RfNbr')
                        .then((result) => {
                                setcodeSucss(result.status);
                        }, (error) => {
                                console.log(error.status)

                        });
                setInputVal(false);
                setAlert(true);
                setTimeout(() => {
                        setAlert(false);
                }, 4000);
        };
        return (
                <div className={`${windowWidth > 900 ? "animate-scroll-top-parts" : ""} translate-y-px`} id="ContactMe">
                        <PartsHeader Title={t("ContactMe")} Question={t("QuestionContactMe")} />
                        <div className="flex flex-col justify-center max-w-[1100px] rounded-full mx-auto mb-5">
                                {alert ? <Alerts CodeSucss={CodeSucss} /> : null}
                        </div>
                        <div className="p-8 flex flex-col justify-center bg-[#1f2235] max-w-[1100px] rounded-xl mx-auto shadow-[0px_0px_20px_-2px] shadow-[#1f2235] dark:border-2 dark:border-[#383838]">
                                <div className="">
                                        <h2 className="text-white mb-5 text-2xl mobile:text-4xl font-bold tracking-wider">
                                                <p className="after:content-['|'] after:animate-blinkerType">{`${t("Touch")} 📧`}</p>
                                        </h2>
                                        <IconSocialMedia />
                                </div>
                                <div className="tablet:flex mx-auto">
                                        <div className="w-full h-auto ltr:mr-5 rtl:ml-5 mb-5 tablet:mt-12">
                                                <h3 className='font-normal text-white text-lg opacity-60 tracking-wider'>{t("SendEmail")}</h3>
                                                <Image className='w-full h-2/4 opacity-60' src={Mailz} alt="not found" />
                                        </div>
                                        <form ref={form} onSubmit={handleSubmit(onSubmit)} className='w-full tablet:w-3/4 flex p-4 justify-center flex-col -mt-12 bg-white rounded-xl opacity-90 text-white shadow-[0px_0px_20px_-2px] shadow-[#1f2235]'>
                                                <div>
                                                        {Inputs.map((e) => {
                                                                return <FormInput getCode={getCode} errors={clientFormError} Register={register} key={e.id} Lable={e.Lable} Type={e.Type} Placeholder={e.Placeholder} TiTel={e.TiTel} />
                                                        })}
                                                </div>
                                                <button
                                                        type="submit"
                                                        className="flex mt-4 p-1 w-40 text-gray-300 text-lg bg-gray-900 items-center justify-center rounded-full border-2 border-ligth-color-text hover:bg-gray-900 hover:border-2 hover:border-[#1f2235] hover:ease-in hover:delay-500 dark:border-dark-color-text dark:hover:border-[#1f2235]"
                                                >
                                                        {t("Send")}<Image className='ltr:ml-1 rtl:mr-1' src={PaperPlane} alt="PaperPlane" />
                                                </button>
                                        </form>
                                </div>
                        </div>
                        <BouttonScroll />
                </div>
        )
}
