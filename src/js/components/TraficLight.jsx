import React, { useState, useEffect } from "react";

//create your first component
const TraficLight = () => {
    
    const [color, setColor] = useState("red");
    const [isRunning, setIsRunning] = useState(false);
    const [hasPurple, setHasPurple] = useState(false);

    const handleClick = (color) => {
        setColor(color);
    }

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setColor((prevColor) => {
                    if(prevColor === "red") return "green";
                    if(prevColor === "green") return "yellow";
                    if (prevColor === "yellow") return hasPurple ? "purple" : "red";
                    return "red"; 
                });
            }, 3000);
        }

        return () => clearInterval(interval);
    }, [isRunning, hasPurple]);

   
    const startCycle = () => setIsRunning(true);

    const addPurple = () => setHasPurple(true);

    return (
        <div>
            <div className="text-center py-5">
                <h1>Traffic Light Project</h1>
                <h3>Mario Orol</h3>
                <div className="trafficTop">
                    <div className="container">
                        <div className={`redLight ${color === "red" ? "active" : ""}`} onClick={() => handleClick("red")}></div>
                        <div className={`yellowLight ${color === "yellow" ? "active" : ""}`} onClick={() => handleClick("yellow")}></div>
                        <div className={`greenLight ${color === "green" ? "active" : ""}`} onClick={() => handleClick("green")}></div>
                        {hasPurple && (
                         <div className={`purpleLight ${color === "purple" ? "active" : ""}`} onClick={() => handleClick("purple")}></div>
                        )}
                    </div>
                </div>
            </div>
            <div gap-3>
                <button type="button" className="btn btn-success" onClick={startCycle}>Cycle Traffic Light</button>
                <button type="button" className="btn btn-purple" onClick={addPurple}>Add Purple Light</button>
            </div>
        </div> 
    );
};

export default TraficLight;