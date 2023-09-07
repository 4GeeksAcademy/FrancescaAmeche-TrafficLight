import React, {useState} from "react";

const TrafficLight = () => {

    let [trafficLightRed, settrafficLightRed] = useState("none");
    let [trafficLightYellow, settrafficLightYellow] = useState("none");
    let [trafficLightGreen, settrafficLightGreen] = useState("none");

    function red () {
        if (trafficLightRed == "0px 0px 30px 20px rgba(255, 255, 190, .75)") {
            settrafficLightRed("none")
        }
        else {
            settrafficLightRed("0px 0px 30px 20px rgba(255, 255, 190, .75")
            settrafficLightYellow("none")
            settrafficLightGreen("none")
        }
        console.log("red");
    };
    function yellow () {
        if (trafficLightYellow == "0px 0px 30px 20px rgba(255, 255, 190, .75") {
            settrafficLightYellow("none")
        }
        else {
            settrafficLightYellow("0px 0px 30px 20px rgba(255, 255, 190, .75")
            settrafficLightRed("none")
            settrafficLightGreen("none")
        }
        console.log("yellow");
    };
    function green () {
        if (trafficLightGreen == "0px 0px 30px 20px rgba(255, 255, 190, .75") {
            settrafficLightGreen("none")
        }
        else {
            settrafficLightGreen("0px 0px 30px 20px rgba(255, 255, 190, .75")
            settrafficLightYellow("none")
            settrafficLightRed("none")
        }
        console.log("green");
    };


    return (
        <div className="trafficLight d-flex flex-column justify-content-center ms-5">
            <div className="trafficTop bg-black ms-5 mt-3" style={{width: "10px", height: "100px"}}></div>
            <div className="lights d-flex flex-column bg-black rounded" style={{width: "100px", height: "300px"}}>
                <button className="rounded-circle bg-danger" style={{height: "100px", boxShadow: trafficLightRed}}onClick={red}></button>
                <button className="rounded-circle bg-warning" style={{height: "100px", boxShadow: trafficLightYellow}}onClick={yellow}></button>
                <button className="rounded-circle bg-success" style={{height: "100px", boxShadow: trafficLightGreen}}onClick={green}></button>
            </div>
        </div>
    );
};

export default TrafficLight;