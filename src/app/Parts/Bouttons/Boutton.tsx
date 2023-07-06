import Link from 'next/link'

interface BouttonsProps {
        LinkHref: string;
        Title: string;
        classButtons: string;
        download: string;
        Label: string;
}

export default function Bouttons(props: BouttonsProps) {
        return (
                <>
                        {props.Label === "ContactMe" ? <Link href={props.LinkHref}>
                                <button
                                        type="button"
                                        className={`rounded-full py-3.5 text-sm font-semibold text-white shadow-sm ${props.classButtons}`}
                                >
                                        {props.Title}
                                </button>
                        </Link> :
                                <div className={`rounded-full py-3.5 text-sm font-semibold text-white text-center shadow-sm ${props.classButtons}`}>
                                        <Link
                                                href={props.LinkHref}
                                                target="_blank"
                                        >
                                                {props.Title}
                                        </Link>
                                </div>
                        }
                </>
        )
}
