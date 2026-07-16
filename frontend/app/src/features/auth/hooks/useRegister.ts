import { useReducer, useState } from "react";
import { type ChangeEvent } from "react";
import type { RegisterData, RegisterAction } from "#auth/types/registerTypes.ts";
import { registerUser } from "#auth/api/register.ts";
import { registerNotification } from "#notifications/auth_toast.ts";

export function useRegister()
{
    const initial_value: RegisterData = {
        first_name : "",
        last_name : "",
        phone_number: "",
        email: "",
        password: "",
        agree_to_terms: false
    };

    const actions_types: string[] = ['updateFirstName', 'updateLastName', 'updatePhoneNumber', 'updateEmail', 'updatePassword', 'updateAgreeToTerms']

    function reducer(state: RegisterData , action: RegisterAction)
    {
     if (!actions_types.includes(action.type))
        return state;
        return{
            ...state,
                [action.field] : action.value,
            
        }
    }

    const [state, dispatch] = useReducer(reducer, initial_value)
    const [isLoading, setLoading] = useState(false)

    const handleFirstNameChange = (e:ChangeEvent<HTMLInputElement>) =>
    {
        dispatch({type: 'updateFirstName', field:'first_name', value: e.target.value})
    }

    const handleLastNameChange = (e:ChangeEvent<HTMLInputElement>) =>
    {
        dispatch({type: 'updateLastName', field:'last_name', value: e.target.value})
    }
    const handlePhoneNumberNameChange = (e:ChangeEvent<HTMLInputElement>) =>
    {
        dispatch({type: 'updatePhoneNumber', field:'phone_number', value: e.target.value})
    }

    const handleEmailChange = (e:ChangeEvent<HTMLInputElement>) =>
    {
        dispatch({type: 'updateEmail', field:'email', value: e.target.value})
    }

    const handlePasswordChange = (e:ChangeEvent<HTMLInputElement>) =>
    {
        dispatch({type: 'updatePassword', field:'password', value: e.target.value})
    }

     const handleAgreeToTermsChange = (e:ChangeEvent<HTMLInputElement>) =>
    {
        dispatch({type: 'updateAgreeToTerms', field:'agree_to_terms', value: e.target.checked})
    }

    const handleRegistration = async () =>
    {
        setLoading(true)
        const status_code : number = await registerUser({
            first_name: state.first_name,
            last_name : state.last_name,
            phone_number: state.phone_number,
            email: state.email,
            password: state.password,
            agree_to_terms: state.agree_to_terms,
        }, isLoading);
        setLoading(false)
        registerNotification(status_code);

    }
    return {state, handleFirstNameChange, handleLastNameChange, handlePhoneNumberNameChange, handleEmailChange, handlePasswordChange, handleAgreeToTermsChange, handleRegistration, isLoading}
}