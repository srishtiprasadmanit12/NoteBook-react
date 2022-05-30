import React from "react";
import ReactDOM from "react-dom";

function Footer(){
    const year=new Date().getFullYear();
    return(
        <footer>
            <p>copyright ⓒ {year}</p>
        </footer>
    )
}
export default Footer;