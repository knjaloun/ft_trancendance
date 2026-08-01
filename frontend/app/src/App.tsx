import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { LoginPage } from '#auth/pages/login.tsx'
import { RegisterPage } from '#auth/pages/register.tsx';
import { EmailVerificationPage } from '#emailVeri/pages/verificationPage.tsx';
import { CheckYourEmailPage } from '#emailVeri/pages/checkYourEmail.tsx';
import { ResendActivationLinkPage } from '#emailVeri/pages/resendActivationLiink.tsx';
import { TwoFaVerifyPage } from './features/2fa/pages/2faVweifyPage';


function App() {
  return (

    <BrowserRouter>
       <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/verify" element={<EmailVerificationPage/>}/>
          <Route path="/checkYourEmail" element={<CheckYourEmailPage/>}/>
          <Route path="/verify/resend" element={<ResendActivationLinkPage/>}/>
           <Route path="/2fa/verify" element={<TwoFaVerifyPage/>}/>
       </Routes>
    </BrowserRouter>
  )
}
export default App
