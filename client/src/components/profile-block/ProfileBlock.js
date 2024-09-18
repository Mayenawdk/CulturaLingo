import React from "react";
import {Img} from 'react-bootstrap';
import "./PorfileBlock.css";

const ProfileBlock = () => {
    try{
        // recieve user info from database

        // set/adjust user data as needed
    }
    catch(err){
        console.log(err);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6" id="profilepic">
                    <Img src= {User.img}/>
                </div>
                <div className="col-6" id="favorites">
                </div>
            </div>
            <div className="row">
                <div className="col-12" id="recentsearches">
                </div>
            </div>
        </div>
    );
}

export default ProfileBlock;