import React from "react";
import { Img } from 'react-bootstrap';
import "./PorfileBlock.css";

const ProfileBlock = () => {
    try {
        // recieve user info from database

        // set/adjust user data as needed
    }
    catch (err) {
        console.log(err);
    }

    return (
        <div class="container">
            <div class="row">
                <div class="col-6" id="profilepic">
                    <Img src={user.img} />
                </div>
                <div class="col-6" id="favefood">
                    <textarea rows="4" className="form-control">{user.favefood}</textarea>
                </div>
            </div >
            <div class="row">
                <div class="col-6" id="favecountry">
                    <textarea rows="4" className="form-control">{user.favecountry}</textarea>
                </div>
                <div class="col-6" id="favecity">
                    <textarea rows="4" className="form-control">{user.favecity}</textarea>
                </div>
            </div>
        </div >
    );
}

export default ProfileBlock;

