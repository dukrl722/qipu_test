import React, { useState, useEffect, FormEvent } from "react";

import { Title } from "./styles";

type Props = {
    text: string;
}

export default function NewProductTitle({text, ...rest} : Props) {
    return (
        <Title>
            {text}
        </Title>
    );
};