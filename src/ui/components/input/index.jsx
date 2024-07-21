import { useForm } from "react-hook-form"

export default function Input({ field, className, errors , placeholder }) {


   

    return (
        <>
         <label for={field.name}>{field.name}</label>
            <input
                {...field}
                className={className }
                placeholder={placeholder}

            />

            {errors &&
                <p className="text-red-500">
                    {errors}
                </p>
            }
        </>
    )
}