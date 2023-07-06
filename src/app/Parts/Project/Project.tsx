import { useTranslations } from 'next-intl';
interface ProjectProps {
        projectTitle: string;
        projectsData: string;
        projectsTochnologies: string;
        projectsSummery: string;
        id: number;
        projectsLink: string;
}

export default function Project(props: ProjectProps) {
        const t = useTranslations('resumeEducation-In');
        return (
                <>
                        <div className="flex flex-col mt-2">
                                <div className="relative flex justify-between text-ligth-color-text dark:text-dark-color-text">
                                        <span className="text-base text-ligth-color-text dark:text-dark-color-text font-bold">{props.projectTitle}</span>
                                        <div className="bg-ligth-color-text dark:bg-dark-color-text dark:text-black text-sm text-white rounded-xl py-1 px-3">{props.projectsData}</div>
                                </div>
                                <div className="text-sm text-black dark:text-white font-bold my-2.5">
                                        <span>{t("Technology")} : {props.projectsTochnologies}</span>
                                </div>
                                <div className="text-sm dark:text-white text-justify">
                                        <span>{t("Summary")} : {props.projectsSummery}</span>
                                </div>
                                <div className="text-justify my-2.5 text-ligth-color-text dark:text-dark-color-text">
                                        <a href={props.projectsLink}>{t("Address")} : {props.projectTitle}</a>
                                </div>
                                <hr
                                        className='h-0.5 bg-ligth-color-text dark:bg-dark-color-text'
                                />
                        </div>
                </>
        )
}
