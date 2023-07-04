import Link from 'next/link'

interface BouttonsProps {
        LinkHref: string;
        Title: string;
        classButtons: string;
        target: string;
        download: string;
}

export default function Bouttons(props: BouttonsProps) {
        return (
                <>
                        <Link href={props.LinkHref}>
                                <button
                                        type="button"
                                        className={`rounded-full py-3.5 text-sm font-semibold text-white shadow-sm ${props.classButtons}`}
                                >
                                        {props.Title}
                                </button>
                        </Link>
                </>
        )
}
