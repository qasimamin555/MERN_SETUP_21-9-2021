import React from 'react';
import ReactDOM from 'react-dom';
import MainRouter from './MainRouter';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
       <BrowserRouter>
             <MainRouter />
       </BrowserRouter>          
,document.getElementById("root"));
