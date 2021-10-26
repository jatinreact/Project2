import React, { useEffect, useState } from 'react'

//HOC contains header & footer
import HOC1 from "../../../Common/HOC1.jsx";
import { Button, Card } from '@material-ui/core';
import { TextField, IconButton, OutlinedInput, InputAdornment, FormControl } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

//Css file
import "./EditProfile.css";

function EditProfile() {

    //---------------------local state ----------------------
    const [showPassword, setshowPassword] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <>
            <div className="Register_Main_div content_padding">
            <div className="mx-auto"><img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Image.png" className="profile_Edit" alt=""/></div>
                <div><strong>Jhon Smith</strong></div>
                <Card className="pt-2 pb-2 Card_shadow form_width mt-2">
                    <p className="page_heading text-center mt-3">Register</p>
                   
                    <div className="mt-4 p-3">

                        <TextField
                            placeholder="Full Name"
                            id="outlined-basic"
                            variant="outlined"
                            autoComplete="off"
                        />
                        <div className="mt-2">
                            <TextField
                                placeholder="Email"
                                id="outlined-basic"
                                variant="outlined"
                                autoComplete="off"
                            />
                        </div>
                        <div className="mt-2">
                            <TextField
                                placeholder="Phone Number"
                                id="outlined-basic"
                                variant="outlined"
                                autoComplete="off"
                            />
                        </div>
                        <div className="mt-2">
                            <FormControl className="MuiFormControl-fullWidth" variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    placeholder="Password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="off"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setshowPassword(!showPassword)}
                                                onMouseDown={(event) => event.preventDefault()}
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </div>

                        <div className="mt-4 mb-3"><Button className="Home_page_button login_register_width">Save</Button></div>

                    </div>
                </Card>


            </div>
        </>
    )
}

export default HOC1(EditProfile);
