import Image from 'next/image'
import Up from "@/../public/Home/up.png"

export default function BouttonScroll() {
        return (
                <>
                        <div className="absolute text-center ltr:right-0 rtl:left-0 mr-2 overflow-hidden flex-col -mt-12 cursor-pointer z-20">
                                <button onClick={() => {
                                        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                                }} className="w-12 h-12 text-2xl bg-ligth-color-text dark:bg-dark-color-text rounded-full border-0"><Image className="w-8 h-8 animate-bounce m-auto" src={Up} alt="Up" /></button>
                        </div>
                </>
        )
}
