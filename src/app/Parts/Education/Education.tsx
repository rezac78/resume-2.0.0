import { useTranslations } from 'next-intl';

interface EducationProps {
        getEducation: any;
        getCode : string;
}

export default function Education(props: EducationProps) {
        const t = useTranslations('resumeEducation-In');

        return (
                <>
                        <div className="flex flex-col h-40 w-full justify-evenly">
                                <div className="flex flex-col mt-2">
                                        <div className="relative flex justify-between  text-ligth-color-text dark:text-dark-color-text">
                                                <span>{props.getCode === "de" ? props.getEducation.EducationTitleDe : props.getCode === "fa" ? props.getEducation.EducationTitleFa : props.getEducation.EducationTitleEn }</span>
                                                <div className="bg-ligth-color-text dark:bg-dark-color-text dark:text-black text-sm py-1 px-3 rounded-2xl text-white">{props.getCode === "de" ? props.getEducation.EducationDataDe : props.getCode === "fa" ? props.getEducation.EducationDataFa : props.getEducation.EducationDataEn }</div>
                                        </div>
                                        <div className="text-sm font-bold text-black my-2.5 dark:text-white">
                                                <span>{props.getCode === "de" ? props.getEducation.EducationStadyDe : props.getCode === "fa" ? props.getEducation.EducationStadyFa : props.getEducation.EducationStadyEn }</span>
                                                <div className="heading-Location">{t("Location")} : {props.getCode === "de" ? props.getEducation.EducationLocationDe : props.getCode === "fa" ? props.getEducation.EducationLocationFa : props.getEducation.EducationLocationEn }</div>
                                        </div>
                                        <div className="text-xs text-justify">
                                                <span></span>
                                        </div>
                                </div>
                                <hr
                                        className='h-0.5 bg-ligth-color-text dark:bg-dark-color-text'
                                />
                        </div>
                </>
        )
}
