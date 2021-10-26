import React, { useEffect } from 'react'
import HOC from "../../Common/HOC.jsx";
import { withRouter } from 'react-router';
import { Button } from '@material-ui/core';
import "./Support.css";

function Support() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="content_padding">
                <div className="mt-3 mb-2 text-center page_heading">Write to us</div>
                <div className="mt-2 mb-2 text-center support_para">We are always happy to answer you.</div>
                <div className="support_input_feild_margin">
                    <div>
                        <div className="input_heading">Name</div>
                        <input type="email" class="form-control" placeholder="Enter Name" />
                    </div>

                    <div className="mt-2">
                        <div className="input_heading">E-mail</div>
                        <input type="email" class="form-control" placeholder="Enter email" />
                    </div>

                    <div className="mt-2">
                        <div className="input_heading">Subject</div>
                        <input type="email" class="form-control" placeholder="Enter Subject" />
                    </div>

                    <div className="mt-2">
                        <div className="input_heading">Message</div>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>
                    </div>

                    <div className="text-center mt-4 mb-3"><Button className="Home_page_button support_buton_width">Send</Button></div>
                </div>
            </div>
        </>
    )
}

export default withRouter(HOC(Support));
