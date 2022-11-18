import React, { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";

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

const NewProductName: React.FC = () => {

    const [name, setName] = useState<string>();
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
                "name" : name,
            }
        ];

        localStorage.setItem('newProduct', JSON.stringify(JSONProduct));
    }

    return (
        <Background>
            <BodyProductName>
                <Information>
                    <NewProductTitle text="Defina o nome do seu produto" />
                    <NewProductDescription text="Escolha um nome para você e seu cliente poderem identificá-lo" />
                    <Input onChange={(e) => setName(e.target.value)} />
                </Information>
                <Link to={"/newProductStock"} style={{ textDecoration: "none" }} onClick={saveValue} >
                    <ButtonNext>CONTINUAR</ButtonNext>
                </Link>
            </BodyProductName>
        </Background>
    );
};

export default NewProductName;