interface Dividers {
        Title: string;
}

export default function Dividers(props: Dividers) {
        return (
                <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                <div className="w-full border-t border-ligth-color-text" />
                        </div>
                        <div className="relative flex justify-center">
                                <span className="bg-white px-3 text-base font-semibold leading-6 text-gray-900">{props.Title}</span>
                        </div>
                </div>
        )
}
