import Image from 'next/image'
import Education from "../../../../public/Home/Education.svg"
import History from "../../../../public/Home/history.svg"
import Programming from "../../../../public/Home/Programming.svg"
import Projects from "../../../../public/Home/Projects.svg"

interface ResumeBarProps {
        toggleState: number;
        toggleTab: (index: number) => void;
}

export default function ResumeBar(props: ResumeBarProps) {
        return (
                <>
                        <div className={props.toggleState === 1 ? "flex animate-Left&rigth items-center cursor-pointer bg-gray-900 h-10 w-8 my-3.5 px-2 rounded-3xl animate-[width .6s ease] text-ligth-color-text dark:text-dark-color-text animate-[phone 1s ease-in-out  infinite] ease-in" : "flex items-center cursor-pointer bg-gray-900 h-10 w-8 my-3.5 px-2 rounded-3xl animate-[width .6s ease]"} onClick={() => props.toggleTab(1)}>
                                <Image className="h-4" alt="B" src={Education} />
                                <span className="text-sm dark:text-white font-bold whitespace-no-wrap ml-6">{"Education"}</span>
                        </div>
                        <div className={props.toggleState === 2 ? "flex animate-Left&rigth items-center cursor-pointer bg-gray-900 h-10 w-8 my-3.5 px-2 rounded-3xl animate-[width .6s ease] text-ligth-color-text dark:text-dark-color-text animate-[phone 1s ease-in-out  infinite] ease-in" : "flex items-center cursor-pointer bg-gray-900 h-10 w-8 my-3.5 px-2 rounded-3xl animate-[width .6s ease]"} onClick={() => props.toggleTab(2)}>
                                <Image className="h-4" alt="B" src={History} />
                                <span className="text-sm dark:text-white font-bold whitespace-no-wrap ml-6">{"WorkHistory"}</span>
                        </div>
                        <div className={props.toggleState === 3 ? "flex animate-Left&rigth items-center cursor-pointer bg-gray-900 h-10 w-8 my-3.5 px-2 rounded-3xl animate-[width .6s ease] text-ligth-color-text dark:text-dark-color-text animate-[phone 1s ease-in-out  infinite] ease-in" : "flex items-center cursor-pointer bg-gray-900 h-10 w-8 my-3.5 px-2 rounded-3xl animate-[width .6s ease]"} onClick={() => props.toggleTab(3)}>
                                <Image className="h-4" alt="B" src={Programming} />
                                <span className="text-sm dark:text-white font-bold whitespace-no-wrap ml-6">{"ProgrammingSkills"}</span>
                        </div>
                        <div className={props.toggleState === 4 ? "flex animate-Left&rigth items-center cursor-pointer bg-gray-900 h-10 w-8 my-3.5 px-2 rounded-3xl animate-[width .6s ease] text-ligth-color-text dark:text-dark-color-text animate-[phone 1s ease-in-out  infinite] ease-in" : "flex items-center cursor-pointer bg-gray-900 h-10 w-8 my-3.5 px-2 rounded-3xl animate-[width .6s ease]"} onClick={() => props.toggleTab(4)}>
                                <Image className="h-4" alt="B" src={Projects} />
                                <span className="text-sm dark:text-white font-bold whitespace-no-wrap ml-6">{"Projects"}</span>
                        </div>
                </>
        )
}
