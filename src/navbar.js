import React from "react"
import {ReactComponent as Logo} from "./react-logo1.svg"
export default function Navbar(props){
    return(
            <nav className={props.darkMode ? "dark": ""}>
                <div class="logo">
                    <Logo/>
                </div>
                <p>Props & State</p>
        
                <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
            </nav>
    )

}