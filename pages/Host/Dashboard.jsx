import React from "react"
import HostVans from "./HostVans"
import starImg from "../../assets/images/star.png"

export default function Dashboard() {

    const styles = {
        color: "#4D4D4D"
    }
    return (
        <>
            <div className="dashboard-opener">
                <h1>Welcome!</h1>
                <p style={styles}>Income last <a style={{textDecoration: "underline"}}>30 days</a></p>
                <h1 style={{fontSize: "43"}}>$2260</h1>
            </div>
            <div className="dashboard-second">
                <h3>Review Score </h3>
                <div style={{display: "flex", flexDirection: "row", gap: "5px"}}>
                    <img className="starImg" src={starImg} />
                    <h3>5.0/5</h3>
                </div>
            </div>

            <HostVans />
        </>
    )
}