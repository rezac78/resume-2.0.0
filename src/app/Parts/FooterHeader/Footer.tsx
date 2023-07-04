import Image from 'next/image'
import shape from "../../../../public/Home/shape-bg.png"
import shapeDark from "../../../../public/Home/shape-bg-Dark.png"

interface FooterProps {
        getTeam: string;
}

export default function Footer(props: FooterProps) {
        return (
                <>
                        <div className="w-full dark:bg-black overflow-hidden flex justify-center h-[18%]">
                                <div className="w-full h-full max-w-[1920px]">
                                        {props.getTeam === "dark" ? <Image className="w-full h-full" src={shapeDark} alt='no internet connection' />  : <Image className="w-full h-full" src={shape} alt='no internet connection' />}
                                        
                                </div>
                        </div>
                </>
        )
}
