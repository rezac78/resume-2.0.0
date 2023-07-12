import { useTranslations } from 'next-intl';

interface EducationProps {
        getEducation: any;
        getCode: string;
}

export default function Education(props: EducationProps) {
        const t = useTranslations('resumeEducation-In');
        const CoverImage = props.getEducation.image?.slice(11, -2);

        return (
                <>
                        <div className="border border-black dark:border-2 dark:border-[#4CD5AE] bg-[#363636] rounded-lg shadow-xl shadow-[0px_0px_15px_-2px] shadow-[#1f2235] dark:shadow-[#fff] w-full tablet:w-[350px] mobile:h-48 mt-10 mobile:ml-5 px-3 my-10">
                                <div className="bg-[#363636] border-2 border-black dark:border-[#4CD5AE] rounded-full w-24 h-24 items-center m-auto -mt-10">
                                        <img className="w-8 h-12 mt-5 m-auto hover:animate-spin" src={CoverImage} width={200} height={200} alt='cover' />
                                </div>
                                <div className="flex flex-col mt-2">
                                        <div className="relative m-auto mobile:m-0 mobile:flex justify-between  text-ligth-color-text dark:text-dark-color-text">
                                                <div className="text-center">{props.getCode === "de" ? props.getEducation.EducationTitleDe : props.getCode === "fa" ? props.getEducation.EducationTitleFa : props.getEducation.EducationTitleEn }</div>
                                                <div className="bg-ligth-color-text dark:bg-dark-color-text w-36 dark:text-black text-sm py-1 px-3 text-center rounded-2xl text-white">{props.getCode === "de" ? props.getEducation.EducationDataDe : props.getCode === "fa" ? props.getEducation.EducationDataFa : props.getEducation.EducationDataEn }</div>
                                        </div>
                                        <div className="text-sm my-5 mx-auto mobile:mx-0 rtl:text-rigth ltr:text-rigth font-bold text-white dark:text-white">
                                                <span className="">{props.getCode === "de" ? props.getEducation.EducationStadyDe : props.getCode === "fa" ? props.getEducation.EducationStadyFa : props.getEducation.EducationStadyEn }</span>
                                                <div className="heading-Location">{t("Location")} : {props.getCode === "de" ? props.getEducation.EducationLocationDe : props.getCode === "fa" ? props.getEducation.EducationLocationFa : props.getEducation.EducationLocationEn }</div>
                                        </div>
                                        <div className="text-xs text-justify">
                                                <span></span>
                                        </div>
                                </div>
                        </div>
                </>
        )
}
