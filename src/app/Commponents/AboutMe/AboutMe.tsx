import Bouttons from "@/app/Parts/Bouttons/Boutton";
import aboutImage from "../../../../public/Home/cover.svg"
import Image from 'next/image'
import PartsHeader from "@/app/Parts/PartsHeader/PartsHeader";

const highlights = [
        { id: 1, highlight: "Full Stack web development" },
        { id: 2, highlight: "Interactive Front End as per the design" },
        { id: 3, highlight: "React & Next & Node & Nest" },
        { id: 4, highlight: "Managing database" },
        { id: 5, highlight: "Bootstrap & Tailwind & material-ui design framework" },
];
export default function AboutMe() {
        return (
                <div data-aos="fade-up" className="flex flex-col justify-center items-center mt-12  translate-y-px text-black" id="AboutMe">
                        <div className="w-3/4 max-w-screen-lg">
                                <PartsHeader Title="AboutMe" Question="why Choose Me?" />
                                <div className="flex w-full dark:border-2 dark:border-inherit shadow-xl tablet:shadow-2xl shadow-[#1f2235]">
                                        <div className="hidden tablet:flex  w-6/12 bg-cover bg-no-repeat bg-center opacity-90 dark:border-2 dark:border-inherit">
                                                <Image className="w-full h-[630px]" src={aboutImage} alt="aboutImage" />
                                        </div>
                                        <div className="w-full tablet:w-6/12 text-justify p-4 tablet:p-9">
                                                <span className="text-xs tablet:text-sm dark:text-white">Full stack web developer with background knowledge of MERN stacks along with a knack of building applications with utmost efficiency.</span>
                                                <div className="my-20">
                                                        <div className="highlight-heading">
                                                                <span className="text-sm dark:text-white">"Here are a Few Highlights"</span>
                                                        </div>
                                                        {highlights?.map((e, key) => {
                                                                return <div className="flex items-center text-xs tablet:text-sm my-2 mx-0.5 dark:text-white" key={key}>
                                                                        <div className="h-3 w-3 dark:bg-dark-color-text bg-red-700 mr-2 rounded-full"></div>
                                                                        <span>{e.highlight}</span>
                                                                </div>
                                                        })}
                                                </div>
                                                <div className="mobile:flex justify-evenly mt-5">
                                                        <Bouttons LinkHref="#ContactMe" target="_blank" download="#" Title="ContactMe" classButtons="w-full mobile:w-40 border-inherit dark:border-dark-color-text bg-black border-2 hover:border-ligth-color-text hover:dark:border-white" />
                                                        <Bouttons LinkHref="#ContactMe" target="_blank" download="#" Title="Get Resume" classButtons="w-full mobile:w-40 bg-ligth-color-text dark:bg-dark-color-text dark:text-black hover:bg-white hover:dark:bg-white hover:text-black" />
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}
