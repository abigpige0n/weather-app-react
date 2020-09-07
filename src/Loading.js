import React from "react";
import Loader from 'react-loader-spinner';

export default function Loading () {
    return(
        <Loader
        type="Hearts"
        color="#f58e85"
        height={100}
        width={100}
        timeout={5000}
     />
    );
}