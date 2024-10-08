import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {store} from './app/store';  
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom"; 
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <Router>
        <App />
      </Router>
  </Provider>
  
);
