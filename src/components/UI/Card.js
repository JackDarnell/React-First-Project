import React from "react";
import './Card.css';

function Card(props) {
    const classes = 'card ' + props.className;
    return <div className = {classes}>{props.children} </div> //children is a reserved name, the value is always the content between opening and closing tags.
}


export default Card;