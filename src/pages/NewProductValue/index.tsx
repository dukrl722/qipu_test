import React, { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";

import NextButton from "../../components/NextButton";
import Background from "../../components/Background";

import { BodyProductName, Information, Input, ButtonNext } from "./styles";
import NewProductTitle from "../../components/NewProductTitle";
import NewProductDescription from "../../components/NewProductDescription";

type Product = {
    name: string;
    description: string;
    value: string;
    qtd: number;
    img: string;
    category: [string]
}

const NewProductValue: React.FC = () => {

    const [value, setValue] = useState<string>();
    const [newProduct, setNewProduct] = useState<Product[]>(() => {
        const newConstructorProduct = localStorage.getItem('newProduct');
        
        if (newConstructorProduct) {
            return JSON.parse(newConstructorProduct);
        }

        return [];
    });

    function saveValue() {

        const JSONProduct = [
            {
                "id" : 0,
                "name" : newProduct[0].name,
                "qtd" : newProduct[0].qtd,
                "description" : newProduct[0].description,
                "img" : newProduct[0].img,
                "value" : value
            }
        ];

        localStorage.setItem('newProduct', JSON.stringify(JSONProduct));
    }

    return (
        <Background>
            <BodyProductName>
                <Information>
                    <NewProductTitle text="Defina o valor de venda" />
                    <NewProductDescription text="Para escolher o valor que será cobrado é importante você saber o custo do seu produto e o lucro que você pretende obter." />
                    <Input onChange={(e) => setValue("R$ " + e.target.value)} />
                </Information>
                <Link to={"/"} style={{ textDecoration: "none" }} onClick={saveValue} >
                    <ButtonNext>CONTINUAR</ButtonNext>
                </Link>
            </BodyProductName>
        </Background>
    );
};

export default NewProductValue;