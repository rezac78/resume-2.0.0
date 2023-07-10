import { useTranslations } from 'next-intl';
interface workHistoryProps {
        getWorkHistory: any;
        getCode: any;
}

export default function WorkHistory(props: workHistoryProps) {
        const t = useTranslations('resumeEducation-In');
        return (
                <>
                        <div className="experience-container ">
                                <div className="flex flex-col mt-2">
                                        <div className="relative flex justify-between text-ligth-color-text dark:text-dark-color-text">
                                                <span className='font-bold'>{props.getCode === "de" ? props.getWorkHistory.WorkHistoryTitleDe : props.getCode === "fa" ? props.getWorkHistory.WorkHistoryTitleFa : props.getWorkHistory.WorkHistoryTitleEn }</span>
                                                <div className="bg-ligth-color-text dark:bg-dark-color-text text-sm text-white dark:text-black py-1 px-3 rounded-xl">{props.getCode === "de" ? props.getWorkHistory.WorkHistoryDataDe : props.getCode === "fa" ? props.getWorkHistory.WorkHistoryDataFa : props.getWorkHistory.WorkHistoryDataEn }</div>
                                        </div>
                                        <div className="text-sm font-bold text-black dark:text-white">
                                                <span>{t("Location")} : {props.getCode === "de" ? props.getWorkHistory.WorkHistoryLocationDe : props.getCode === "fa" ? props.getWorkHistory.WorkHistoryLocationFa : props.getWorkHistory.WorkHistoryLocationEn }</span>
                                        </div>
                                        <div className="text-xs text-justify">
                                                <span></span>
                                        </div>
                                </div>
                                <div className="text-sm text-black my-2.5">
                                        <span className="text-ligth-color-text dark:text-dark-color-text font-bold">
                                                {props.getCode === "de" ? props.getWorkHistory.WorkHistoryPositionDe : props.getCode === "fa" ? props.getWorkHistory.WorkHistoryPositionFa : props.getWorkHistory.WorkHistoryPositionEn }
                                        </span>
                                </div>
                                <div className="max-w-full text-justify my-2.5 dark:text-white">
                                        <a target="_blank" href={props.getWorkHistory.WorkHistoryLink}>{t("Address")} : {props.getCode === "de" ? props.getWorkHistory.WorkHistoryTitleDe : props.getCode === "fa" ? props.getWorkHistory.WorkHistoryTitleFa : props.getWorkHistory.WorkHistoryTitleEn }</a>
                                </div>
                                <hr
                                        className='h-0.5 bg-ligth-color-text dark:bg-dark-color-text'
                                />
                        </div>
                </>
        )
}
