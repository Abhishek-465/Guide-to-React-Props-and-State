import React from "react"
export default function Cards(props){
    return(
    <main className={props.darkMode ? "dark": ""}>
        <div class="card-img">
            <img src={props.img}/>
        </div>
        <div>
            <p>{props.text}</p>
        </div>
    </main>
    )


}