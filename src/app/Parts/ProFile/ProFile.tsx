"use client"
import { useTranslations } from 'next-intl';
import { Typewriter } from 'react-simple-typewriter';
import Bouttons from '../Bouttons/Boutton';
import IconSocialMedia from '../IconSocialMedia/IconSocialMedia';
import { useEffect, useState } from 'react';
export default function Profile({getProfile}: any) {
        const t = useTranslations('ProFile');
        const [getCode, setCode] = useState("");
        useEffect(() => {
                const getCockie = window.location.pathname
                if (getCockie !== null) setCode(getCockie.slice(1, 3));
        }, []);
        const ProfileImage = getProfile.image?.slice(11, -2);
        return (
                <div className="flex items-center text-center dark:bg-black justify-center h-1/6 min-h-fit">
                        <div className="flex flex-col-reverse items-center tablet:flex tablet:flex-row">
                                <div className="text-xl tablet:text-2xl mt-10 tablet:m-0 tablet:mr-20 ">
                                        <div className="flex justify-center">
                                                <IconSocialMedia classes={""} />
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
                                                                {getCode === "fa" ? getProfile.summaryFA : getCode === "de" ? getProfile.summaryDE : getProfile.summaryEn   }
                                                        </span>
                                                </span>
                                        </div>
                                        <div className="flex justify-evenly mt-5">
                                                <Bouttons LinkHref="#ContactMe" download="#" Title={t("ContactMe")} Label="ContactMe" classButtons="w-40 border-inherit dark:border-dark-color-text border-2 hover:border-ligth-color-text hover:dark:border-white" />
                                                <Bouttons LinkHref={getCode === "fa" ? getProfile.FileFa?.slice(11, -2) ?? "#" : getProfile.FileEn?.slice(11, -2) ?? "#"} download={getCode === "fa" ? getProfile.FileFa?.slice(11, -2) ?? "#" : getProfile.FileEn?.slice(11, -2) ?? "#"} Label="GetResume" Title={t("GetResume")} classButtons="w-40 bg-ligth-color-text dark:bg-dark-color-text dark:text-black hover:bg-white hover:dark:bg-white hover:text-black" />
                                        </div>
                                </div>
                                <div className="flex items-center justify-center shadow-lg shadow-white rounded-full w-72 h-72 tablet:h-[33.5%] tablet:w-[33.5%]">
                                        <div className="bg-cover bg-no-repeat bg-center rounded-full h-[98%] w-[98%] hover:scale-105 ease-out duration-300 delay-200">
                                                <img className='rounded-full h-full w-full' width={100} height={100} src={ProfileImage} alt="ProfileImg" />
                                        </div>
                                </div>
                        </div>
                </div>
        )
}
