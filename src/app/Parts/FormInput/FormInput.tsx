interface FormInputProps {
        Lable: string;
        Type: string;
        Placeholder: string;
        TiTel: string;
        Register: any;
        errors: any;
        getCode: string;
        value?: any | '';
        onInputChange?: (e: any) => void ;
}

export default function FormInput(props: FormInputProps) {
        const msgFA = props.errors[props.Lable]?.message;
        const msgEn = props.errors[props.Lable]?.message;
        const msgDe = props.errors[props.Lable]?.message;
        return (
                <>
                        <label htmlFor={props.Lable} className="block text-sm leading-6 text-gray-900">
                                {props.TiTel}
                        </label>
                        <div className="mt-2">
                                {props.Lable !== "message" ?
                                        <>
                                                <input
                                                        type={props.Type}
                                                        name={props.Lable}
                                                        {...props.Register(props.Lable)}
                                                        value={props.value === undefined ? undefined : props.value[props.Lable]}
                                                        className="w-full text-lg mb-2 border-2 border-transparent outline-none bg-slate-200 px-2 py-2 rounded-xl delay-100 text-black focus:bg-white focus:border-2 focus:border-ligth-color-text dark:focus:border-dark-color-text"
                                                        placeholder={props.Placeholder}
                                                        onChange={props.onInputChange}
                                                />
                                                <p className="text-sm text-ligth-color-text dark:text-dark-color-text mb-2" id="name">
                                                        {props.getCode === "fa" ? msgFA : props.getCode === "de" ? msgDe : msgEn}
                                                </p>
                                        </>
                                        :
                                        <>
                                                <textarea
                                                        rows={4}
                                                        name={props.Lable}
                                                        className="w-full text-lg mb-2 border-2 border-transparent outline-none bg-slate-200 px-2 py-2 rounded-xl delay-100 text-black focus:bg-white focus:border-2 focus:border-ligth-color-text dark:focus:border-dark-color-text"
                                                        placeholder={props.Placeholder}
                                                        {...props.Register(props.Lable)}
                                                />
                                                <p className="text-sm text-ligth-color-text dark:text-dark-color-text mb-2" id="name">
                                                        {props.getCode === "fa" ? msgFA : props.getCode === "de" ? msgDe : msgEn}
                                                </p>
                                        </>
                                }
                        </div >
                </>
        )
}
