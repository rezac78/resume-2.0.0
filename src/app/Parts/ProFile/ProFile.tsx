"use client"
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { Typewriter } from 'react-simple-typewriter';
import ProfileImg from "@/../public/Home/profilephoto.jpeg"
import Bouttons from '../Bouttons/Boutton';
import IconSocialMedia from '../IconSocialMedia/IconSocialMedia';
export default function Profile() {
        const t = useTranslations('ProFile');
        return (
                <div className="flex items-center text-center dark:bg-black justify-center h-1/6 min-h-fit">
                        <div className="flex flex-col-reverse items-center tablet:flex tablet:flex-row">
                                <div className="text-xl tablet:text-2xl mt-10 tablet:m-0 tablet:mr-20 ">
                                        <div className="flex justify-center">
                                                <IconSocialMedia />
                                        </div>
                                        <div className="text-2xl tablet:text-3xl">
                                                <span className="text-white">
                                                        {" "}
                                                        {t("greeting")} <span className="text-ligth-color-text dark:text-dark-color-text">{t("name")}</span>
                                                </span>
                                        </div>
                                        <div className="flex flex-col mt-3.5 ml-0 tablet:ml-6">
                                                <span className="text-white text-3xl tablet:text-4xl">
                                                        {" "}
                                                        <h1 className="w-auto">
                                                                <div className="w-auto dark:text-dark-color-text">
                                                                        {" "}
                                                                        <Typewriter
                                                                                loop={Infinity}
                                                                                words={[
                                                                                        t("title_summary1"),
                                                                                        t("title_summary2"),
                                                                                        t("title_summary3"),
                                                                                        t("title_summary4"),
                                                                                ]}
                                                                                cursor
                                                                                cursorStyle='_'
                                                                                typeSpeed={70}
                                                                                deleteSpeed={50}
                                                                                delaySpeed={1000}
                                                                        />
                                                                </div>
                                                        </h1>
                                                        <span className="text-xl tablet:text-2xl mt-4">
                                                                {t("summery")}
                                                        </span>
                                                </span>
                                        </div>
                                        <div className="flex justify-evenly mt-5">
                                                <Bouttons LinkHref="#ContactMe" target="_blank" download="#" Title={t("ContactMe")} classButtons="w-40 border-inherit dark:border-dark-color-text border-2 hover:border-ligth-color-text hover:dark:border-white" />
                                                <Bouttons LinkHref="#ContactMe" target="_blank" download="#" Title={t("GetResume")} classButtons="w-40 bg-ligth-color-text dark:bg-dark-color-text dark:text-black hover:bg-white hover:dark:bg-white hover:text-black" />
                                        </div>
                                </div>
                                <div className="flex items-center justify-center shadow-lg shadow-white rounded-full w-72 h-72 tablet:h-96 tablet:w-96">
                                        <div className="bg-cover bg-no-repeat bg-center rounded-full h-[92%] w-[92%] hover:scale-105 ease-out duration-300 delay-200">
                                                <Image className='rounded-full h-full w-full' src={ProfileImg} alt="ProfileImg" />
                                        </div>
                                </div>
                        </div>
                </div>
        )
}
