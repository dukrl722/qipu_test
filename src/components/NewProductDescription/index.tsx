import React, { useState, useEffect, FormEvent } from "react";

import { Description } from "./styles";

type Props = {
    text: string;
}

export default function NewProductDescription({text, ...rest} : Props) {
    return (
        <Description>
            {text}
        </Description>
    );
};
