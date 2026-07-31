import { RegisterForm } from "#auth/components/registerForm.tsx"
 import { ToastContainer } from 'react-toastify';
import { Footer } from "#shared/components/Footer.tsx";

export function RegisterPage() {
    return (

        <div className="h-full w-full  flex max-w-[2560px] min-h-150">
            <div className="h-full w-full bg-gray-100 md:w-1/2 flex flex-col">
                <div className="flex-1 flex justify-center items-center">
                    <RegisterForm />
                    <ToastContainer/>
                </div>
                <Footer/>
            </div>
            <div className="h-full w-1/2 md:bg-[url(/img/loginImage.jpg)] hidden md:block md:bg-cover md:bg-center"></div>
        </div>
    )
}
