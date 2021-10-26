import React, { useEffect } from 'react'
import { Grid, Card, Button } from '@material-ui/core';
import "./UserProperties.css";

function PropertySummary(props) {

    const Tenantdetail = [{ name: "Jhon Smith" },
    { name: "Jhon Smith" },
    { name: "Jhon Smith" },
    { name: "Jhon Smith" },
    { name: "Jhon Smith" },
    { name: "Jhon Smith" },
    { name: "Jhon Smith" },
    { name: "Jhon Smith" },
    { name: "Jhon Smith" },
    { name: "Jhon Smith" },
    { name: "Jhon Smith" },
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <>

            <div className="mt-4">
                <Grid className="Component_main_grid mt-2 mb-2 p-3 ">
                    <Grid item md={8}>
                        <Grid className="Component_main_grid mt-2 mb-2 p-3 ">
                            <Grid item md={2}><div className="user_properties_profile"></div></Grid>
                            <Grid item md={10}>
                                <div><strong>Generic Details</strong></div>
                                <div>Lorem Ipsum is a fish text often used in print and web design.
                                    Lorem Ipsum has been the standard "fish" for Latin texts since
                                    the early 16th century. At the time, an unnamed printer created
                                    a large collection.</div>
                                <div className="text-right mt-2"><Button className="Home_page_button p-2">Join the tenant</Button></div>

                            </Grid>
                        </Grid>
                        <div className="page_heading mt-3">Tenants Details</div>
                        {Tenantdetail.map((item, index) => (
                            <Card className="p-2 mt-2 Card_shadow">
                                <div className="d-flex justify-content-between">
                                    <span>Tenants 1</span>
                                    <span className="text-right">
                                        <div>Aggreement Date</div>
                                        <div><strong>07.10.2021</strong></div>
                                    </span>
                                </div>
                                <Grid className="Component_main_grid mt-2 p-3 ">
                                    <Grid item md={2}><div className="user_properties_profile"></div></Grid>
                                    <Grid item md={10}>
                                        <div><strong>{item.name}</strong></div>
                                        <div><strong>Contact Details</strong></div>
                                    </Grid>
                                </Grid>
                                <div>Lorem Ipsum is a fish text often used in print and web design.
                                    Lorem Ipsum has been the standard "fish" for Latin texts since
                                    the early 16th century. At the time, an unnamed printer created
                                    a large collection.</div>
                            </Card>
                        ))}
                    </Grid>
                    <Grid item md={4}>

                    </Grid>
                </Grid>



            </div>

        </>
    )
}


export default PropertySummary;
