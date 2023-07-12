'use client'
import PartsHeader from "@/app/Parts/PartsHeader/PartsHeader";
import { useEffect, useState } from "react";
import ResumeBar from '@/app/Parts/ResumeBar/ResumeBar';
import Education from "@/app/Parts/Education/Education";
import WorkHistory from "@/app/Parts/WorkHistory/WorkHistory";
import ProgrammingSkills from "@/app/Parts/ProgrammingSkills/ProgrammingSkills";
import Project from "@/app/Parts/Project/Project";
import { useTranslations } from 'next-intl';

export default function Resume() {
        const [toggleState, setToggleState] = useState(1);
        const toggleTab = (index: number) => {
                setToggleState(index);
        }
        const [getEducation, setEducation] = useState<any>([]);
        const [getWorkHistory, setWorkHistory] = useState<any>([]);
        const [getProgrammingSkills, setProgrammingSkills] = useState<any>([]);
        const [getProject, setProject] = useState<any>([]);
        const [getCode, setCode] = useState("");
        async function getData() {
                const response = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/Education`,
                        {
                                method: "GET",
                        }
                );
                const resWorkHistory = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/WorkHistory`,
                        {
                                method: "GET",
                        }
                );
                const resProgrammingSkills = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/ProgrammingSkills`,
                        {
                                method: "GET",
                        }
                );
                const resProject = await fetch(
                        `${process.env.NEXT_PUBLIC_BACKEND_URL}api/Dashboard/Project`,
                        {
                                method: "GET",
                        }
                );

                const ProfileData = await response.json();
                const WorkHistoryData = await resWorkHistory.json();
                const ProgrammingSkillsData = await resProgrammingSkills.json();
                const ProjectData = await resProject.json();
                setEducation(ProfileData.Education)
                setWorkHistory(WorkHistoryData.WorkHistory)
                setProgrammingSkills(ProgrammingSkillsData.ProgrammingSkills)
                setProject(ProjectData.Project)
        }
        useEffect(() => {
                getData();
                const getCockie = window.location.pathname
                if (getCockie !== null) setCode(getCockie.slice(1, 3));
        }, []);

        const t = useTranslations('Resume');
        const [windowWidth, setWindowWidth] = useState(0);
        useEffect(() => {
                function handleResize() {
                        setWindowWidth(window.scrollY);
                }
                window.addEventListener("scroll", handleResize);
                handleResize();
        }, []);

        return (
                <div className={`${windowWidth > 500 ? "animate-scroll-top-parts" : ""} flex p-5 tablet:p-0 w-11/12 tablet:w-8/12 m-auto flex-col justify-center my-28 text-black animate-scroll-top`} id="Resume">
                        <div className="">
                                <PartsHeader Title={t("Resume")} Question={t("QuestionResume")} />
                                <div className="tablet:flex w-auto h-auto tablet:h-[390px]">
                                        <div className="h-full w-auto tablet:w-80 shadow-[15px_0px_9px_-15px] shadow-[#1f2235] dark:shadow-[#4CD5AE]">
                                                <div className="flex items-center h-full w-full relative">
                                                        <div className="w-8 h-full z-0 bg-gray-900 absolute"></div>
                                                        <div className="w-4/5 relative z-10">
                                                                <ResumeBar toggleTab={toggleTab} toggleState={toggleState} />
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="flex-grow overflow-hidden w-auto h-auto mt-10 tablet:mt-0 tablet:w-[34rem] pt-0 tablet:pl-0">
                                                <div className={toggleState === 1 ? "animate-scroll-top" : "hidden"}>
                                                        <div className="flex flex-wrap overflow-y-auto h-[360px] mobile:px-8">
                                                                {getEducation?.map((e: any, index: number) => {
                                                                        return <Education getEducation={e} getCode={getCode} key={index} />
                                                                })}
                                                        </div>
                                                </div>
                                                <div className={toggleState === 2 ? "animate-scroll-top" : "hidden"}>
                                                        <div className="flex flex-wrap overflow-y-auto h-[360px] mobile:px-8">
                                                                {getWorkHistory?.map((e: any, index: number) => {
                                                                        return <WorkHistory key={index} getWorkHistory={e} getCode={getCode} />
                                                                })}
                                                        </div>
                                                </div>
                                                <div className={toggleState === 3 ? "animate-scroll-top" : "hidden"}>
                                                        <div className="overflow-y-auto h-[360px]">
                                                                <div className="flex flex-row h-auto w-full justify-evenly items-center justify-between flex-wrap">
                                                                        {getProgrammingSkills?.map((e: any) => (
                                                                                e.ProgrammingSkillsTitle.map((value: any, index: number) => {
                                                                                        return <ProgrammingSkills key={index} ProgrammingSkillsTitle={value} size={e.ProgrammingSkillsNumber[index]} />
                                                                                })
                                                                        ))}
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className={toggleState === 4 ? "animate-scroll-top" : "hidden"}>
                                                        <div className="flex flex-wrap overflow-y-auto h-[360px] mobile:px-8">
                                                                {getProject?.map((e: any, index: number) => {
                                                                        return <Project key={index} getProject={e} getCode={getCode} />
                                                                })}
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}
