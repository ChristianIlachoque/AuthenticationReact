import { BrowserRouter, Navigate, Route } from 'react-router-dom'
import './App.css'
import { Login } from './pages/Login/Login'
import { Private } from './pages/Private/Private'
import { Provider } from 'react-redux'
import store from './redux/store'
import { PrivateRoutes, PublicRoutes } from './models/routes'
import AuthGuard from './guards/AuthGuard'
import { RoutesWithNotFound } from "./utilities/RoutesWithNotFound";
import Logout from './components/Logout/Logout'
// import { Suspense } from 'react'
import { RoleGuard } from './guards/RoleGuard'
import { Dashboard } from './pages/Private/Dashboard/Dashboard'

// const Login = lazy(() => import('./pages/Login/Login'));
// const Private = lazy(() => import('./pages/Private/Private'));

function App() {

  return (
    <div className='app'>
      {/* <Suspense fallback={<>Cargando...</>}> */}
        <Provider store={store}>
          <BrowserRouter>
            <Logout />
            <RoutesWithNotFound>
              <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />} />
              <Route path={PublicRoutes.LOGIN} element={<Login />} />
              <Route element={<AuthGuard privateValidation={true} />}>
                <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
              </Route>
              <Route element={<RoleGuard role={'admin'} />}>
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
              </Route>
            </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      {/* </Suspense> */}
    </div>
  )
}

export default App
