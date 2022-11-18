import React, { useState, useEffect, FormEvent } from "react";

import ButtonAdd from "../../components/ButtonAdd";
import Header from "../../components/Header";
import List from "../../components/List";

import "./styles";

const ListProduct: React.FC = () => {

    return (
        <>
            <Header />
            <List />
            <ButtonAdd />
        </>

    );
};

export default ListProduct;