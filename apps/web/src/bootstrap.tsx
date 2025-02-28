import { createRoot } from 'react-dom/client'; // <- this is a shared module, but used as usual
import { BrowserRouter } from "react-router";
import App from './App';

// load app
const el = document.createElement('main');
const root = createRoot(el);
root.render(<BrowserRouter><App /></BrowserRouter>);
document.body.appendChild(el);