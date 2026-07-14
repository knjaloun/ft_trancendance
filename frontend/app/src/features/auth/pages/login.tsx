import { LoginForm } from "../components/loginForm"

export function LoginPage() {

    return (
       <div className="h-full w-full flex max-w-[2560px]">
            <div className="h-full w-full  bg-gray-100 md:w-1/2 flex justify-center items-center">
                <LoginForm/>
            </div>
            <div className="h-full w-1/2 md:bg-[url(/img/loginImage.jpg)] hidden md:block md:bg-cover md:bg-center"></div>
       </div>
    )
}