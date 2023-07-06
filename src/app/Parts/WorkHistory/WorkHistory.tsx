import { useTranslations } from 'next-intl';
interface workHistoryProps {
        workHistoryTitle: string;
        workHistoryData: string;
        workHistoryLocation: string;
        workHistoryPosition: string;
        workHistoryLink: string;
        key: number;
}

export default function WorkHistory(props: workHistoryProps) {
        const t = useTranslations('resumeEducation-In');
        return (
                <>
                        <div className="experience-container " key={props.key}>
                                <div className="flex flex-col mt-2">
                                        <div className="relative flex justify-between text-ligth-color-text dark:text-dark-color-text">
                                                <span className='font-bold'>{props.workHistoryTitle}</span>
                                                <div className="bg-ligth-color-text dark:bg-dark-color-text text-sm text-white dark:text-black py-1 px-3 rounded-xl">{props.workHistoryData}</div>
                                        </div>
                                        <div className="text-sm font-bold text-black dark:text-white">
                                                <span>{t("Location")} : {props.workHistoryLocation}</span>
                                        </div>
                                        <div className="text-xs text-justify">
                                                <span></span>
                                        </div>
                                </div>
                                <div className="text-sm text-black my-2.5">
                                        <span className="text-ligth-color-text dark:text-dark-color-text font-bold">
                                                {props.workHistoryPosition}
                                        </span>
                                </div>
                                <div className="max-w-full text-justify my-2.5 dark:text-white">
                                        <a href={props.workHistoryLink}>{t("Address")} : {props.workHistoryTitle}</a>
                                </div>
                                <hr
                                        className='h-0.5 bg-ligth-color-text dark:bg-dark-color-text'
                                />
                        </div>
                </>
        )
}
