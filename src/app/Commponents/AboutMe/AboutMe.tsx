'use client'
import { useTranslations } from 'next-intl';
import Bouttons from "@/app/Parts/Bouttons/Boutton";
import PartsHeader from "@/app/Parts/PartsHeader/PartsHeader";
import { useEffect, useState } from 'react';


export default function AboutMe() {
        const t = useTranslations('AboutMe');
        const [getCode, setCode] = useState("");
        const [getAbout, setAbout] = useState<any>([]);
        const [getFileCV, setFileCV] = useState<any>([]);
        async function getData() {
                const response = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/Profile`,
                        {
                                method: "GET",
                        }
                );
                const resAbout = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/AboutMe`,
                        {
                                method: "GET",
                        }
                );
                const ProfileData = await response.json();
                const AboutData = await resAbout.json();
                setFileCV(ProfileData.User[0])
                setAbout(AboutData.AboutMe[0])
        }
        useEffect(() => {
                getData();
                const getCockie = window.location.pathname
                if (getCockie !== null) setCode(getCockie.slice(1, 3));
        }, []);
        const highlights = getCode === "fa" ? getAbout.HighlightsFA : getCode === "en" ? getAbout.HighlightsEn : getAbout.HighlightsDE

        return (
                <div className={`flex flex-col justify-center items-center mt-12 translate-y-px text-black animate-scroll-top-parts`} id="AboutMe">
                        <div className="w-3/4 max-w-screen-lg">
                                <PartsHeader Title={t("AboutMe")} Question={t("QuestionAboutMe")} />
                                <div className="flex w-full dark:border-2 dark:border-inherit shadow-xl tablet:shadow-[0px_0px_20px_-2px] shadow-[#1f2235]">
                                        <div className="hidden tablet:flex  w-6/12 bg-cover bg-no-repeat bg-center opacity-90 dark:border-2 dark:border-inherit">
                                                <img className="w-full h-[670px]" src={getAbout.image?.slice(11,-2)} width={100} height={100} alt="aboutImage" />
                                        </div>
                                        <div className="w-full tablet:w-6/12 text-justify p-4 tablet:p-9">
                                                <span className="text-xs tablet:text-sm dark:text-white">{t("HeaderSummery")}</span>
                                                <div className="my-20">
                                                        <div className="highlight-heading">
                                                                <span className="text-sm dark:text-white">"{t("highlightHead")}"</span>
                                                        </div>
                                                        {highlights?.map((e:any, key:number) => {
                                                                return <div className="flex items-center text-xs tablet:text-sm my-2 mx-0.5 dark:text-white" key={key}>
                                                                        <div className="h-3 w-3 dark:bg-dark-color-text bg-red-700 ltr:mr-2 rtl:ml-2 rounded-full"></div>
                                                                        <span>{e}</span>
                                                                </div>
                                                        })}
                                                </div>
                                                <div className="mobile:flex justify-evenly mt-5">
                                                        <Bouttons LinkHref="#ContactMe" download="#" Title={t("ContactMe")} Label='ContactMe' classButtons="w-full mobile:w-40 border-inherit dark:border-dark-color-text bg-black border-2 hover:border-ligth-color-text hover:dark:border-white" />
                                                        <Bouttons LinkHref={getCode === "fa" ? getFileCV.FileFa?.slice(11, -2) ?? "#" : getFileCV.FileEn?.slice(11, -2) ?? "#"} download={getCode === "fa" ? getFileCV.FileFa?.slice(11, -2) ?? "#" : getFileCV.FileEn?.slice(11, -2) ?? "#"} Title={t("GetResume")} Label='GetResume' classButtons="w-full mobile:w-40 bg-ligth-color-text dark:bg-dark-color-text dark:text-black hover:bg-white hover:dark:bg-white hover:text-black" />
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}
