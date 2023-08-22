import React from "react";
import "./theme_style.css";

const Card = ({ children }) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

const CardGrid = ({ children }) => {
    return (
        <div className="cardGrid">
            {children}
        </div>
    )
}

const ThemeCard = (props, i) => {
    return (
        <Card key={i} >
            {props.map((s) => (
                <div className="yes" >

                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <div class="flip-card-front">

                                <img src={s.img} alt="Avatar" style={{ width: "100%", height: "200px" }} />

                            </div>
                            <div class="flip-card-back">
                                <p>{s.description}</p>
                            </div>

                        </div>
                    </div>
                    <div className="card-heading">
                        <h2>{s.heading}</h2>
                    </div>
                </div>
            ))}
        </Card>
    )
}

export { CardGrid, ThemeCard };