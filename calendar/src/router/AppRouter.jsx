import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';
import { Navigate } from 'react-router-dom';


export const AppRouter = () => {

  const authStatus = 'not-authenticated';
  return (
    <Routes>
      {
        (authStatus === 'not-authenticated')
          ? <Route path="/auth/*" element={ <LoginPage /> }/>
          : <Route path="/*" element={ <CalendarPage /> }/>
      }
 
      <Route path="/*" element={ <Navigate to="/auth/login" /> }/>
    </Routes>
  )
}