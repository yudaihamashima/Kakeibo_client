import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

import MainPage from './components/pages/mainPage'
import CreatePaymentPage from './components/pages/createPaymentPage'
import AnalysisPage from './components/pages/analysisPage'
import HomeEffectPage from './components/pages/homeEffectPage'

function App() {
  return (
    <>
      <RecoilRoot>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomeEffectPage/>} />
              <Route path="/main" element={<MainPage/>} />
              <Route path="/createPayment" element={<CreatePaymentPage/>} />
              <Route path="/analysis" element={<AnalysisPage/>} />
            </Routes>
          </BrowserRouter>
        </RecoilRoot>
    </>
  );
}

export default App;
