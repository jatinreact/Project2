import React, { useEffect } from 'react'

//HOC contains header & footer
import HOC from "../../Common/HOC.jsx";
import { Grid, Button, Card } from '@material-ui/core';

//Css file
import "./ContactUs.css";

function ContactUs() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="content_padding">
                <div className="margin_content_both_side">
                    <Grid className="Component_main_grid mt-2 mb-2 p-3 ">
                        <Grid item md={6}>
                            <div className="page_heading mt-2">Contact us</div>
                            <div className="home_paragraph_width">We value each customer and are We are
                                proud that you stay with us.
                            </div>
                            <div className="mt-4"><span className="Footer_heading_Links mt-1"><i class="fa fa-phone"></i></span><span className="ml-2">+ 1 555 555 555</span></div>
                            <div><span className="Footer_heading_Links mt-1"><i class="fa fa-envelope"></i></span><span className="ml-2">info@gmail.com</span></div>
                            <div><span className="Footer_heading_Links mt-1"><i class="fa fa-instagram"></i></span><span className="ml-2">Instagram.com</span></div>
                            <div><span className="Footer_heading_Links mt-1"><i class="fa fa-facebook"></i></span><span className="ml-2">facebook.com</span></div>
                        </Grid>
                        <Grid item md={6}>
                            <div className="page_heading mt-2">Write to us</div>
                            <div className="home_paragraph_width">We are always happy to answer you.</div>
                            <div className="mt-4">
                                <Card className="p-2 Card_shadow">
                                    <div>
                                        <div className="input_heading">Name</div>
                                        <input type="email" class="form-control" placeholder="Enter Name" />
                                    </div>

                                    <div className="mt-2">
                                        <div className="input_heading">E-mail</div>
                                        <input type="email" class="form-control" placeholder="Enter email" />
                                    </div>

                                    <div className="mt-2">
                                        <div className="input_heading">Message</div>
                                        <textarea class="form-control" rows="3" placeholder="Message"></textarea>
                                    </div>

                                    <div className="mt-4 mb-3"><Button className="Home_page_button support_buton_width">Send</Button></div>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>

                </div>
            </div>
        </>
    )
}

export default HOC(ContactUs);
