import React, {useState} from "react";

const TrafficLight = () => {

    let [trafficLightRed, settrafficLightRed] = useState("red");
    let [trafficLightYellow, settrafficLightYellow] = useState("yellow");
    let [trafficLightGreen, settrafficLightGreen] = useState("green");

    function red () {
        if (trafficLightRed == "black") {
            settrafficLightRed("red")
        }
        else {
            settrafficLightRed("black")
            settrafficLightYellow("yellow")
            settrafficLightGreen("green")
        }
        console.log("red");
    };
    function yellow () {
        if (trafficLightYellow == "black") {
            settrafficLightYellow("yellow")
        }
        else {
            settrafficLightYellow("black")
            settrafficLightRed("red")
            settrafficLightGreen("green")
        }
        console.log("yellow");
    };
    function green () {
        if (trafficLightGreen == "black") {
            settrafficLightGreen("green")
        }
        else {
            settrafficLightGreen("black")
            settrafficLightYellow("yellow")
            settrafficLightRed("red")
        }
        console.log("green");
    };


    return (
        <div className="trafficLight d-flex flex-column justify-content-center ms-5">
            <div className="trafficTop bg-black ms-5" style={{width: "10px", height: "100px"}}></div>
            <div className="lights d-flex flex-column bg-black rounded" style={{width: "100px", height: "300px"}}>
                <button className="rounded-circle bg-danger" style={{height: "100px", borderColor: trafficLightRed}}onClick={red}></button>
                <button className="rounded-circle bg-warning" style={{height: "100px", borderColor: trafficLightYellow}}onClick={yellow}></button>
                <button className="rounded-circle bg-success" style={{height: "100px", borderColor: trafficLightGreen}}onClick={green}></button>
            </div>

        </div>
    );
};

export default TrafficLight;