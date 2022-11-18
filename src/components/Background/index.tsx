import React, { useState, useEffect, FormEvent, ReactNode } from "react";
import { BackgroundNew } from "./styles";

type Props = {
    children: ReactNode;
}

export default function Background({children, ...rest} : Props) {
    return (
        <BackgroundNew>
            {children}
        </BackgroundNew>
    );
};
