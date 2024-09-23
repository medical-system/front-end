import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// aos import
import AOS from 'aos';
import 'aos/dist/aos.css';
// appexCharts 
import "apexcharts/dist/apexcharts.css";

AOS.init();
createRoot(document.getElementById("root")).render(<App />);
