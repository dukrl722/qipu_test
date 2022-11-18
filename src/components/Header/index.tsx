import React, { useState, useEffect, FormEvent } from "react";

import { GoSearch } from "react-icons/go";

import { HeaderBlock, Menu, Title } from "./styles";

export default function Header () {
    return (
        <HeaderBlock>
            <Menu>
                <div></div>
                <div></div>
                <div></div>
            </Menu>
            <Title>Estoque</Title>
            <GoSearch size={25} />
        </HeaderBlock>
    );
};
