import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { runWorker } from '../src/utils/mock_api/index';
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


if (process.env.NODE_ENV === 'development') {
  runWorker().start()
}
const queryClient = new QueryClient();

root.render(

  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App/>
    </QueryClientProvider>
  </React.StrictMode>
);


reportWebVitals();
