import {Button} from "@material-ui/core";
import React from "react";

const User = ({name, fun}) => {
    return (
        <>
        <h1> This is User Component {name} </h1>
        <Button onClick={fun} variant="contained">Click me</Button>
        </>
    );

};

export default User;