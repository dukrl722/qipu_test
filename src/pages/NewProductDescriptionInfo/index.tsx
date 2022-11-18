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

const NewProductDescriptionInfo: React.FC = () => {

    const [description, setDescription] = useState<string>();
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
                "name" : newProduct[0].name,
                "qtd" : newProduct[0].qtd,
                "description" : description
            }
        ];

        localStorage.setItem('newProduct', JSON.stringify(JSONProduct));
    }

    useEffect(() => {
        console.log(newProduct);
    }, []);

    return (
        <Background>
            <BodyProductName>
                <Information>
                    <NewProductTitle text="Descreva seu produto" />
                    <NewProductDescription text="Coloque detalhes sobre o que está sendo oferecido." />
                    <Input onChange={(e) => setDescription(e.target.value)} />
                </Information>
                <Link to={"/newProductCategory"} style={{ textDecoration: "none" }} onClick={saveValue} >
                    <ButtonNext>CONTINUAR</ButtonNext>
                </Link>
            </BodyProductName>
        </Background>
    );
};

export default NewProductDescriptionInfo;