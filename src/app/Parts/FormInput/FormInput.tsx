interface FormInputProps {
        Lable: string;
        Type: string;
        Placeholder: string;
        TiTel: string;
}

export default function FormInput(props: FormInputProps) {
        return (
                <>
                        <label htmlFor={props.Lable} className="block text-sm leading-6 text-gray-900">
                                {props.TiTel}
                        </label>
                        <div className="mt-2">
                                {props.Lable !== "message" ?
                                        <input
                                                type={props.Type}
                                                name={props.Lable}
                                                id={props.Lable}
                                                className="w-full text-lg mb-5 border-2 border-transparent outline-none bg-slate-200 px-2 py-2 rounded-xl delay-100 text-black focus:bg-white focus:border-2 focus:border-ligth-color-text dark:focus:border-dark-color-text"
                                                placeholder={props.Placeholder}
                                        />
                                        :
                                        <textarea
                                                rows={4}
                                                name={props.Lable}
                                                id={props.Lable}
                                                className="w-full text-lg mb-5 border-2 border-transparent outline-none bg-slate-200 px-2 py-2 rounded-xl delay-100 text-black focus:bg-white focus:border-2 focus:border-ligth-color-text dark:focus:border-dark-color-text"
                                                defaultValue={props.Placeholder}
                                        />
                                }
                        </div>
                </>
        )
}
