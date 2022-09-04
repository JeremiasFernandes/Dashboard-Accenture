import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRoutes from './routes';
import { BrowserRouter } from "react-router-dom";
import { DataProvider } from './context/data_context';

ReactDOM.render(
  
    <BrowserRouter>
          <DataProvider>
            <AppRoutes>
            </AppRoutes>
            </DataProvider>
    </BrowserRouter>
  
  ,
  document.getElementById('root')
);

