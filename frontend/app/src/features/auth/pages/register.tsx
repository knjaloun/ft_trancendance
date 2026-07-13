import { RegisterForm } from "#auth/components/registerForm.tsx"

export function RegisterPage() {
    return (
        <div className="h-full w-full  bg-gray-950 flex justify-center items-center border">
            <div className="bg-gray-900 w-full h-full sm:rounded-[15%] shadow-lg sm:shadow-purple-200 sm:border
             sm:border-purple-400 sm:w-140 sm:h-140">
                <div className="w-full h-2/10 flex justify-center items-center text-white text-5xl">
                    <h1>Signup</h1>
                </div>
                <div className="w-full h-1/2">
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}