import React, { useState } from "react";
import "./style.css";

const Test = () => {
    const [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(counter + 1);
    }

    const dekriment = () => {
        setCounter(counter - 1);
    }

    return (
        <div className="fullDisplay">
            Счетчик
            <div className="counter">
                {counter}
            </div>
            <div className="buttons">
                <button className="button_increment" 
                    onClick={increment}
                >
                    +1
                </button>
                <button className="button_decriment"
                    onClick={dekriment}
                >
                    -1
                </button>
            </div>
        </div>
    )
}
export default Test;