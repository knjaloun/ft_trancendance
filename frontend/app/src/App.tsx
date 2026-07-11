import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { LoginPage } from '#auth/pages/login.tsx'
import { RegisterPage } from '#auth/pages/register.tsx';

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
       </Routes>
    </BrowserRouter>
  )
}
export default App
