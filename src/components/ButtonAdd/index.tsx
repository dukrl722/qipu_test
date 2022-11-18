import React, { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";

import { GoPlus } from "react-icons/go";

import { BodyButton } from "./styles";

export default function ButtonAdd() {

    return (
        <Link to={"/new"}>
            <BodyButton>
                <GoPlus size={25} />
            </BodyButton>
        </Link>

    );
};
