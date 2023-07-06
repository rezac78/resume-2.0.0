'use client'
import PartsHeader from "@/app/Parts/PartsHeader/PartsHeader";
import { useEffect, useState } from "react";
import ResumeBar from '@/app/Parts/ResumeBar/ResumeBar';
import Education from "@/app/Parts/Education/Education";
import WorkHistory from "@/app/Parts/WorkHistory/WorkHistory";
import ProgrammingSkills from "@/app/Parts/ProgrammingSkills/ProgrammingSkills";
import Project from "@/app/Parts/Project/Project";
import { useTranslations } from 'next-intl';

const programmingSkillsresume = [
        { id: 1, programmingSkillsNumber: "80", programmingSkillsTitle: "JavaScript" },
        { id: 2, programmingSkillsNumber: "80", programmingSkillsTitle: "JavaScript" },
        { id: 3, programmingSkillsNumber: "50", programmingSkillsTitle: "node" },
        { id: 4, programmingSkillsNumber: "50", programmingSkillsTitle: "node" },
        { id: 5, programmingSkillsNumber: "80", programmingSkillsTitle: "JavaScript" },
        { id: 6, programmingSkillsNumber: "50", programmingSkillsTitle: "node" },
        { id: 7, programmingSkillsNumber: "50", programmingSkillsTitle: "node" },
];
export default function Resume() {
        const [toggleState, setToggleState] = useState(1);
        const toggleTab = (index: number) => {
                setToggleState(index);
        }
        const t = useTranslations('Resume');

        const resumeEducation = [
                { id: 1, educationTitle: t("educationTitle"), educationData: t("educationData"), educationStady: t("educationStady"), educationLocation: t("educationLocation") },
                { id: 2, educationTitle: t("educationTitle"), educationData: t("educationData"), educationStady: t("educationStady"), educationLocation: t("educationLocation") },
        ];

        const resumeWorkHistorie = [
                { id: 1, workHistoryTitle: t("workHistoryTitle"), workHistoryData: t("workHistoryData"), workHistoryLocation: t("workHistoryLocation"), workHistoryPosition: t("workHistoryPosition"), workHistoryLink: t("workHistoryLink") },
                { id: 2, workHistoryTitle: t("workHistoryTitle"), workHistoryData: t("workHistoryData"), workHistoryLocation: t("workHistoryLocation"), workHistoryPosition: t("workHistoryPosition"), workHistoryLink: t("workHistoryLink") },
                { id: 3, workHistoryTitle: t("workHistoryTitle"), workHistoryData: t("workHistoryData"), workHistoryLocation: t("workHistoryLocation"), workHistoryPosition: t("workHistoryPosition"), workHistoryLink: t("workHistoryLink") },
        ];

        const resumeProject = [
                { id: 1, projectTitle: t("projectTitle"), projectsData: t("projectsData"), projectsTochnologies: t("projectsTochnologies"), projectsSummery: t("projectsSummery"), projectsLink: t("projectsLink") },
                { id: 2, projectTitle: t("projectTitle"), projectsData: t("projectsData"), projectsTochnologies: t("projectsTochnologies"), projectsSummery: t("projectsSummery"), projectsLink: t("projectsLink") },
                { id: 3, projectTitle: t("projectTitle"), projectsData: t("projectsData"), projectsTochnologies: t("projectsTochnologies"), projectsSummery: t("projectsSummery"), projectsLink: t("projectsLink") },
        ];

        return (
                <div data-aos="fade-up" className="flex p-5 tablet:p-0 w-11/12 tablet:w-8/12 m-auto flex-col justify-center my-28 text-black" id="Resume">
                        <div className="">
                                <PartsHeader Title={t("Resume")} Question={t("QuestionResume")} />
                                <div className="tablet:flex w-auto h-[360px]">
                                        <div className="h-full w-auto tablet:w-80 shadow-[15px_0px_9px_-15px] shadow-[#1f2235] dark:shadow-[#4CD5AE]">
                                                <div className="flex items-center h-full w-full relative">
                                                        <div className="w-8 h-full z-0 bg-gray-900 absolute"></div>
                                                        <div className="w-4/5 relative z-10">
                                                                <ResumeBar toggleTab={toggleTab} toggleState={toggleState} />
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="flex-grow overflow-hidden w-auto tablet:w-[34rem] pt-0 tablet:pl-20">
                                                <div className={toggleState === 1 ? "animate-scroll-top" : "hidden"}>
                                                        <div className="overflow-y-auto h-[320px]">
                                                                {resumeEducation?.map((e) => {
                                                                        return <Education educationTitle={e.educationTitle} educationData={e.educationData} key={e.id} educationStady={e.educationStady} educationLocation={e.educationLocation} />
                                                                })}
                                                        </div>
                                                </div>
                                                <div className={toggleState === 2 ? "animate-scroll-top" : "hidden"}>
                                                        <div className="overflow-y-auto h-[320px]">
                                                                <div className="flex flex-col h-auto w-full justify-evenly">
                                                                        {resumeWorkHistorie?.map((e) => {
                                                                                return <WorkHistory key={e.id} workHistoryLink={e.workHistoryLink} workHistoryPosition={e.workHistoryPosition} workHistoryTitle={e.workHistoryTitle} workHistoryData={e.workHistoryData} workHistoryLocation={e.workHistoryLocation} />
                                                                        })}
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className={toggleState === 3 ? "animate-scroll-top" : "hidden"}>
                                                        <div className="overflow-y-auto h-[320px]">
                                                                <div className="flex flex-row h-auto w-full justify-evenly items-center justify-between flex-wrap">
                                                                        {programmingSkillsresume?.map((e) => {
                                                                                return <ProgrammingSkills id={e.id} programmingSkillsTitle={e.programmingSkillsTitle} size={e.programmingSkillsNumber} />
                                                                        })}
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className={toggleState === 4 ? "animate-scroll-top" : "hidden"}>
                                                        <div className="overflow-y-auto h-[320px]">
                                                                <div className="flex flex-col h-auto w-full justify-evenly">
                                                                        {resumeProject?.map((e) => {
                                                                                return <Project id={e.id} projectsLink={e.projectsLink} projectsSummery={e.projectsSummery} projectTitle={e.projectTitle} projectsTochnologies={e.projectsTochnologies} projectsData={e.projectsData} />
                                                                        })}
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}
