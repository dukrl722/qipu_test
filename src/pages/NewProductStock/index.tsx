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

const NewProductStock: React.FC = () => {

    const [stock, setStock] = useState<number>();
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
                "qtd" : stock
            }
        ];

        console.log(JSONProduct);

        localStorage.setItem('newProduct', JSON.stringify(JSONProduct));
    }

    useEffect(() => {
        localStorage.getItem('newProduct');
    }, []);

    return (
        <Background>
            <BodyProductName>
                <Information>
                    <NewProductTitle text="Escreva quantos produtos você tem no estoque" />
                    <NewProductDescription text="A quantidade ficará armazenada para você controlar o seu estoque" />
                    <Input type="number" onChange={(e) => setStock(parseInt(e.target.value))} />
                </Information>
                <Link to={"/newProductDescription"} style={{ textDecoration: "none" }} onClick={saveValue} >
                    <ButtonNext>CONTINUAR</ButtonNext>
                </Link>
            </BodyProductName>
        </Background>
    );
};

export default NewProductStock;