import Dividers from "../Dividers/Dividers";

interface TextAreaProps {
        Lable: string;
        TiTel: string;
        Register: any;
        errors: any;
        code: string;
        getProfile: any;
        onInputChange: any;
}

export default function FormInput(props: TextAreaProps) {
        return (
                <div className="col-span-full">
                        <Dividers Title={props.code} />
                        <label htmlFor={props.Lable} className="block text-sm font-medium leading-6 text-gray-900">
                                {props.TiTel}
                        </label>
                        <div className="mt-2">
                                <textarea
                                        id={props.Lable}
                                        {...props.Register(props.Lable)}
                                        rows={3}
                                        value={props.getProfile[props.Lable]}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        defaultValue={''}
                                        onChange={props.onInputChange}
                                />
                        </div>
                </div>
        )
}
