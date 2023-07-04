interface PartsHeaderProps {
        Title: string;
        Question: string;
}

export default function PartsHeader(props: PartsHeaderProps) {
        return (
                <>
                        <div className="flex flex-col items-center w-full my-10">
                                <div>
                                        <span className="text-3xl tablet:text-4xl dark:text-white text-gray-900 font-bold">{props.Title}</span>
                                </div>
                                <div className="screen-sub-heading mt-2">
                                        <span className="text-sm dark:text-white text-black tracking-wide">"{props.Question}"</span>
                                </div>
                                <div className="flex items-center relative w-48 my-4 mb-10">
                                        <div className="w-full h-0.5 dark:bg-white bg-gray-900"></div>
                                        <div className="h-2 w-full absolute flex justify-center">
                                                <div className="w-8 rounded-xl dark:bg-dark-color-text bg-ligth-color-text"></div>
                                        </div>
                                </div>
                        </div>
                </>
        )
}
