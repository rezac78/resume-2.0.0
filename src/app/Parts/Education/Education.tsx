import { useTranslations } from 'next-intl';

interface EducationProps {
        educationTitle: string;
        educationData: string;
        educationStady: string;
        educationLocation: string;
}

export default function Education(props: EducationProps) {
        const t = useTranslations('resumeEducation-In');

        return (
                <>
                        <div className="flex flex-col h-40 w-full justify-evenly">
                                <div className="flex flex-col mt-2">
                                        <div className="relative flex justify-between  text-ligth-color-text dark:text-dark-color-text">
                                                <span>{props.educationTitle}</span>
                                                <div className="bg-ligth-color-text dark:bg-dark-color-text dark:text-black text-sm py-1 px-3 rounded-2xl text-white">{props.educationData}</div>
                                        </div>
                                        <div className="text-sm font-bold text-black my-2.5 dark:text-white">
                                                <span>{props.educationStady}</span>
                                                <div className="heading-Location">{t("Location")} : {props.educationLocation}</div>
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
