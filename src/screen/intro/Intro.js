import "./Intro.css";
import heros from "../../images/heros.jpg"
import { Button } from "@mui/material";
const Intro = () => {
    return (
        <div className="Intro" >
            <div className="introLeft" >

                <img src={heros} alt="hero" />
                <div className="Reactangle"></div>
            </div>
            <div className="introRight">
                <div className="introspan">

                    <span>Shop by </span>
                    <span>Voice</span>
                </div>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sunt iste sit neque vel repudiandae<br /> distinctio, deserunt qui? Maiores eum officiis, ducimus alias esse facilis accusantium iure ex beatae necessitatibus.
                </span>
                <Button sx={{ color: "#8FE58E", backgroundColor: "green", borderRadius: "20px" ,alignItem:"center"}}>Explore!</Button>
            </div>
        </div>
    )
}

export default Intro
