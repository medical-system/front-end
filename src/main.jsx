import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// aos import
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'aos/dist/aos.css';

// react-datepicker import
import 'react-datepicker/dist/react-datepicker.css';

// apexcharts
import "apexcharts/dist/apexcharts.css";

// react-big-calendar
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-big-calendar/lib/css/react-big-calendar.css';

AOS.init();
createRoot(document.getElementById("root")).render(<App />);
