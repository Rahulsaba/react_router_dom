import { Button } from "@/path";
import logo from '@/assets/logo.svg';
import Input from "@/ui/components/input";
import { useForm, Controller } from 'react-hook-form';

export default function Login() {
    const { control, handleSubmit, formState: { errors }, } = useForm();
    console.log(errors, 'errors');

    const registerOptions = {

        email: { required: "Email is required" },
        password: {
            required: "Password is required",
            minLength: {
                value: 8,
                message: "Password must have at least 8 characters"
            }
        }
    };
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <>
            <div className="min-h-screen mx-auto w-100 flex_main login_bg" >
                <form className="flex flex-col gap-4 p-10 bg-white rounded-lg w-96" onSubmit={handleSubmit(onSubmit)} >
                    <div className="flex justify-center">
                        <img
                            src={logo}
                            alt="logo"
                            width={200}
                        />
                    </div>
                    <div>
                        <Controller
                            name="Email"
                            control={control}
                            rules={registerOptions?.email}
                            defaultValue=""
                            render={({ field }) =>
                                <Input field={field}
                                    className={'border border-[#dbdfe9] bg-[#fcfcfc] w-full rounded p-2 px-3 '}
                                    errors={errors?.Email?.message}
                                    placeholder="email@email.com"
                                />}
                        />
                    </div>
                    <div>
                        <Controller
                            name="Password"
                            control={control}
                            rules={registerOptions?.password}
                            defaultValue=""
                            render={({ field }) =>
                                <Input field={field}
                                    className={'border border-[#dbdfe9] bg-[#fcfcfc] w-full rounded p-2 px-3 '}
                                    errors={errors?.Password?.message}
                                    placeholder="Enter Password"
                                />}
                        />
                    </div>


                    <Button Children={'Login'}
                        button_css={'w-full bg-[#f8285a] hover:text-white hover:bg-rose-400 rounded-lg border-[border-rose-500 ]'}
                    />
                </form>
            </div>
        </>
    )
}