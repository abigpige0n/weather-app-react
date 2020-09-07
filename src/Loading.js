import React from "react";
import Loader from 'react-loader-spinner';

export default function Loading () {
    return(
        <Loader
        type="Puff"
        color="red"
        height={100}
        width={100}
     />
    );
}