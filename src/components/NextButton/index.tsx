import React, { useState, useEffect, FormEvent, ReactEventHandler } from "react";
import { Link } from "react-router-dom";

import { ButtonNext } from "./styles";

type Props = ReactEventHandler & {
    uri: string;
}

export default function NextButton({uri, ...rest} : Props) {
    return (
        <Link to={uri} style={{textDecoration: "none"}} {...rest}>
            <ButtonNext>CONTINUAR</ButtonNext>
        </Link>
    );
};
