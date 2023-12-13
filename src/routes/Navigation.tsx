import { Suspense } from "react"
import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom"
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages"
import { routes } from "./routes"

import logo from '../images/descarga.png'

export const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="React Logo" />
                        <ul>
                            {
                                routes.map(({ name, to }) => (
                                    <li key={to}>
                                        <NavLink
                                            to={to}
                                            className={({ isActive }) => isActive ? 'nav-active' : ''}
                                        >
                                            {name}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map(({ to, path, Component }) => (
                                <Route
                                    key={to}
                                    path={path}
                                    element={<Component />}
                                />
                            ))
                        }
                        <Route path='/*' element={<Navigate to={routes[0].to} replace />} />
                    </Routes>

                </div>
            </BrowserRouter>
        </Suspense>
    )
}
