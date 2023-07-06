import Image from 'next/image'
import Link from 'next/link'
import Github from "@/../public/Home/github.svg"
import Linkedin from "@/../public/Home/linkedin.svg"
import Instagram from "@/../public/Home/instagram.svg"
import Phone from "@/../public/Home/phone.png"
export default function IconSocialMedia() {
        return (
                <>
                        <div className="flex text-xl tablet:text-2xl">
                                <Link href="https://github.com/rezac78" target="_blank">
                                        <Image className='text-white p-2 pl-0 h-12 w-10 hover:scale-150' src={Github} alt="Github" />
                                </Link>
                                <Link href="https://www.linkedin.com/in/reza-dalvand-ab7a32206/" target="_blank">
                                        <Image className='text-white p-2 pl-0 h-12 w-10 hover:scale-150' src={Linkedin} alt="Linkedin" />
                                </Link>
                                <Link href="https://www.instagram.com/reza.dalvand78" target="_blank">
                                        <Image className='text-white p-2 pl-0 h-12 w-10 hover:scale-150' src={Instagram} alt="Instagram" />
                                </Link>
                                <a href="tel:09032802041">
                                        <Image className='text-white p-2 pl-0 h-12 w-10 hover:scale-150' src={Phone} alt="Phone" />
                                </a>
                        </div>
                </>
        )
}
