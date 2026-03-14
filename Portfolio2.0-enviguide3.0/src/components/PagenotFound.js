import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const PagenotFound = () => {
     useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    return (
        <>
            <div className="pagenotfound-mainsection">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10">
                            <img className="pagenotfoundim" src="../assets/images/404Error-amico.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="text-center">
                <NavLink className="pagenotfoundimtxt" to={'/'}>Back to Home Page</NavLink>
                </div>
            </div>
        </>
    )
}

export default PagenotFound;