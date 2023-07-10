import { useTranslations } from 'next-intl';
interface ProjectProps {
        getProject: any;
        getCode: string;
}

export default function Project(props: ProjectProps) {
        const t = useTranslations('resumeEducation-In');
        return (
                <>
                        <div className="flex flex-col mt-2">
                                <div className="relative flex justify-between text-ligth-color-text dark:text-dark-color-text">
                                        <span className="text-base text-ligth-color-text dark:text-dark-color-text font-bold">{props.getCode === "de" ? props.getProject.ProjectTitleDe : props.getCode === "fa" ? props.getProject.ProjectTitleFa : props.getProject.ProjectTitleEn}</span>
                                        <div className="bg-ligth-color-text dark:bg-dark-color-text dark:text-black text-sm text-white rounded-xl py-1 px-3">{props.getCode === "de" ? props.getProject.ProjectsDataDe : props.getCode === "fa" ? props.getProject.ProjectsDataFa : props.getProject.ProjectsDataEn}</div>
                                </div>
                                <div className="text-sm text-black dark:text-white font-bold my-2.5">
                                        <span>{t("Technology")} : {props.getCode === "de" ? props.getProject.ProjectsTochnologiesDe : props.getCode === "fa" ? props.getProject.ProjectsTochnologiesFa : props.getProject.ProjectsTochnologiesEn}</span>
                                </div>
                                <div className="text-sm dark:text-white text-justify">
                                        <span>{t("Summary")} : {props.getCode === "de" ? props.getProject.ProjectsSummeryDe : props.getCode === "fa" ? props.getProject.ProjectsSummeryFa : props.getProject.ProjectsSummeryEn}</span>
                                </div>
                                <div className="text-justify my-2.5 text-ligth-color-text dark:text-dark-color-text">
                                        <a target="_blank" href={props.getProject.ProjectsLink}>{t("Address")} : {props.getCode === "de" ? props.getProject.ProjectTitleDe : props.getCode === "fa" ? props.getProject.ProjectTitleFa : props.getProject.ProjectTitleEn}</a>
                                </div>
                                <hr
                                        className='h-0.5 bg-ligth-color-text dark:bg-dark-color-text'
                                />
                        </div>
                </>
        )
}
