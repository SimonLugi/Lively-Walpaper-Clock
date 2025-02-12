import {StrictMode, useEffect} from 'react'
import ReactDOM from 'react-dom/client';
import './Style_time.css'
import BG from './clock-background.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BG></BG>
      <App />
  </StrictMode>,
)

var list = ["hr-1", "hr-2", "dots", "mn-1", "mn-2", "dots", "sc-1", "sc-2"];

function App() {
    const clocks = [];
    for (let i = 0; i < 6; i++) {
        clocks.push(<div className="clock" key={i}>
            <div className="hand"></div>
        </div>);
    }

    useEffect(() => {
        const hr1 = document.getElementById('hr-1');
        const hr2 = document.getElementById('hr-2');
        const mn1 = document.getElementById('mn-1');
        const mn2 = document.getElementById('mn-2');
        const sc1 = document.getElementById('sc-1');
        const sc2 = document.getElementById('sc-2');

        // Start the countdown after React has rendered
        const interval = setInterval(() => {
            const dd = new Date();
            const HH = dd.getHours();  // 24-hour format
            const h1 = Math.floor(HH / 10);  // Tens digit of the hour
            const h2 = HH % 10;  // Ones digit of the hour
            const mm = dd.getMinutes();
            const m1 = mm < 10 ? 0 : Math.floor(mm / 10);  // Tens digit of minutes
            const m2 = mm < 10 ? mm : mm % 10;  // Ones digit of minutes
            const ss = dd.getSeconds();
            const s1 = ss < 10 ? 0 : Math.floor(ss / 10);  // Tens digit of seconds
            const s2 = ss % 10;  // Ones digit of seconds

            // Update the DOM elements with the current time
            if (sc1 && sc2 && mn1 && mn2 && hr1 && hr2) {
                sc1.setAttribute('data-digit', s1);
                sc2.setAttribute('data-digit', s2);
                mn1.setAttribute('data-digit', m1);
                mn2.setAttribute('data-digit', m2);
                hr1.setAttribute('data-digit', h1);
                hr2.setAttribute('data-digit', h2);
            }
        }, 1000);

        // Cleanup interval on unmount
        return () => clearInterval(interval);
    }, []);  // Empty dependency array ensures this runs once after initial render

    return (
        list.map((item, i) => {
            if (item !== "dots") {
                return (
                    <div className="digit" id={item} key={i} data-digit="6">
                        {clocks}
                    </div>
                );
            } else {
                return (
                    <div className="segment-dot" key={i}>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                );
            }
        })
    );
}

export default App;
