import { type CheckYourEmailBodyProp } from "#emailVeri/types/checkEmailPropType.ts"

export function EmailVerificationBody({children} : CheckYourEmailBodyProp)
{
    return (
      <div className="w-full h-full bg-white-100 flex justify-center items-center">
            <div className="h-8/10 w-8/10 bg-gray-100 max-w-150 max-h-200">
                {children}
            </div>
        </div>
    )
}