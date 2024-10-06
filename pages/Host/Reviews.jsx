import React from "react"
import starImg from "../../assets/images/star.png"

export default function Reviews() {
    return (
        <div className="reviews-section">
            <h1>Your reviews <a style={{color: "#4D4D4D", fontSize: "16", fontWeight: "normal", marginLeft: "10"}}>last <a style={{textDecoration: "underline", fontWeight: "bold"}}>30 days</a></a></h1>
            <h1 className="reviews-rating">5.0 <img style={{alignItems: "center", width: "24", height: "24"}} src={starImg}/> <a style={{fontWeight: "normal", fontSize: "20"}}>overall rating</a></h1>
            <div>
                <div className="reviews-stars">
                    <p>5 stars</p>
                    <div className="reviews-meter">
                    </div>
                    <p>100%</p>
                </div>
                <div className="reviews-stars">
                    <p>4 stars</p>
                    <div className="reviews-meter" style={{backgroundColor: "#B9B9B9"}}>
                    </div>
                    <p>0%</p>
                </div>
                <div className="reviews-stars">
                    <p>3 stars</p>
                    <div className="reviews-meter" style={{backgroundColor: "#B9B9B9"}}>
                    </div>
                    <p>0%</p>
                </div>
                <div className="reviews-stars">
                    <p>2 stars</p>
                    <div className="reviews-meter" style={{backgroundColor: "#B9B9B9"}}>
                    </div>
                    <p>0%</p>
                </div>
                <div className="reviews-stars">
                    <p>1 stars</p>
                    <div className="reviews-meter" style={{backgroundColor: "#B9B9B9"}}>
                    </div>
                    <p>0%</p>
                </div>

                <div style={{borderBottom: "2px solid #C7C7C7", maxWidth: "fit-content"}}>
                    <h3>Reviews (2) </h3>
                    <div>
                        <div>
                            <img style={{alignItems: "center", width: "24", height: "24"}} src={starImg}/>
                            <img style={{alignItems: "center", width: "24", height: "24"}} src={starImg}/>
                            <img style={{alignItems: "center", width: "24", height: "24"}} src={starImg}/>
                            <img style={{alignItems: "center", width: "24", height: "24"}} src={starImg}/>
                            <img style={{alignItems: "center", width: "24", height: "24"}} src={starImg}/>
                        </div>
                    </div>
                    <div>
                        <h4>Elliot  <a style={{color: "#8C8C8C", fontWeight: "normal", marginLeft: "5"}}>December 1, 2022</a></h4>
                        <p style={{maxWidth: "350"}}> 
                        The beach bum is such as awesome van! Such as comfortable trip. 
                        We had it for 2 weeks and there was not a single issue. 
                        Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!
                        </p>
                    </div>
                </div>

                <div style={{borderBottom: "2px solid #C7C7C7", maxWidth: "fit-content"}}>
                    <div>
                        <div style={{marginTop: "10"}}>
                            <img style={{alignItems: "center", width: "24", height: "24"}} src={starImg}/>
                            <img style={{alignItems: "center", width: "24", height: "24"}} src={starImg}/>
                            <img style={{alignItems: "center", width: "24", height: "24"}} src={starImg}/>
                            <img style={{alignItems: "center", width: "24", height: "24"}} src={starImg}/>
                            <img style={{alignItems: "center", width: "24", height: "24"}} src={starImg}/>
                        </div>
                    </div>
                    <div>
                        <h4>Sandy  <a style={{color: "#8C8C8C", fontWeight: "normal", marginLeft: "5"}}>November 3, 2022</a></h4>
                        <p style={{maxWidth: "350"}}> 
                            This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!
                        </p>
                    </div>
                </div>

                
            </div>
        </div>
    )
}