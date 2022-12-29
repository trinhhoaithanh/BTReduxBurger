import React from 'react';
import ReactDOM from 'react-dom/client';
import BTBurger from './Components/Props/BTBurger/BTBurger'
import "./assets/BTBurger.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import HomeTemplate from "./templates/HomeTemplate";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path='' element={<HomeTemplate/>}>
                        <Route index element={<BTBurger/>}></Route>
                        <Route path='*' element={<Navigate to=""/>}></Route>

                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
 </>
);


