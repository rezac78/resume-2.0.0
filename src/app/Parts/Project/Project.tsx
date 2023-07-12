import { useTranslations } from 'next-intl';
interface ProjectProps {
        getProject: any;
        getCode: string;
}

export default function Project(props: ProjectProps) {
        const t = useTranslations('resumeEducation-In');
        const CoverImage = props.getProject.image?.slice(11, -2);
        return (
                <>
                        <div className="border border-black dark:border-2 dark:border-[#4CD5AE] bg-[#363636] rounded-lg shadow-xl shadow-[0px_0px_15px_-2px] shadow-[#1f2235] dark:shadow-[#fff] w-full tablet:w-[350px] mobile:h-56 mt-10 mobile:ml-5 px-3 my-10">
                                <div className="bg-[#363636] border-2 border-black dark:border-[#4CD5AE] rounded-full w-24 h-24 items-center m-auto -mt-10">
                                        <img className="w-12 h-12 mt-5 m-auto hover:animate-spin" src={CoverImage} alt='cover' />
                                </div>
                                <div className="flex flex-col mt-2">
                                        <div className="relative m-auto mobile:m-0 mobile:flex justify-between  text-ligth-color-text dark:text-dark-color-text">
                                                <div className="text-center">{props.getCode === "de" ? props.getProject.ProjectTitleDe : props.getCode === "fa" ? props.getProject.ProjectTitleFa : props.getProject.ProjectTitleEn}</div>
                                                <div className="bg-ligth-color-text dark:bg-dark-color-text w-36 dark:text-black text-sm py-1 px-3 text-center rounded-2xl text-white">{props.getCode === "de" ? props.getProject.ProjectsDataDe : props.getCode === "fa" ? props.getProject.ProjectsDataFa : props.getProject.ProjectsDataEn}</div>
                                        </div>
                                        <div className="text-sm mt-2 mx-auto mobile:mx-0 rtl:text-rigth ltr:text-rigth font-bold">
                                                <span className="text-sm my-2 mx-auto mobile:mx-0 rtl:text-rigth ltr:text-rigth font-bold text-white dark:text-white">{t("Technology")} : {props.getCode === "de" ? props.getProject.ProjectsTochnologiesDe : props.getCode === "fa" ? props.getProject.ProjectsTochnologiesFa : props.getProject.ProjectsTochnologiesEn}</span>
                                        </div>
                                        <div className="text-sm mt-2 mx-auto mobile:mx-0 rtl:text-rigth ltr:text-rigth font-bold">
                                                <span className="text-sm my-2 mx-auto mobile:mx-0 rtl:text-rigth ltr:text-rigth font-bold text-white dark:text-white">{t("Summary")} : {props.getCode === "de" ? props.getProject.ProjectsSummeryDe : props.getCode === "fa" ? props.getProject.ProjectsSummeryFa : props.getProject.ProjectsSummeryEn}</span>
                                        </div>
                                        <div className="text-sm mx-auto mt-2 mobile:mx-0 rtl:text-rigth ltr:text-rigth font-bold text-white dark:text-white">
                                                <a target="_blank" href={props.getProject.ProjectsLink}>{t("Address")} : {props.getCode === "de" ? props.getProject.ProjectTitleDe : props.getCode === "fa" ? props.getProject.ProjectTitleFa : props.getProject.ProjectTitleEn}</a>
                                        </div>
                                        <div className="text-xs text-justify">
                                                <span></span>
                                        </div>
                                </div>
                        </div>
                </>
        )
}
