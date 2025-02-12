import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
var list = ["hr-1","hr-2","dots","mn-1","mn-2","dots","sc-1","sc-2"];

function App() {
    const clocks = []
    for (let i = 0; i < 6; i++) {
        clocks.push(<div className="clock">
            <div className="hand"></div>
        </div>)
    }
    return (
        list.map((item, i) => {
            if (item !== "dots"){
                return (
                    <div className="digit" id={item} key={i} data-digit="1">
                        {clocks}
                    </div>
                )
            } else {
                return (
                    <div className="segment-dot">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                )
            }
        })
    )
}
