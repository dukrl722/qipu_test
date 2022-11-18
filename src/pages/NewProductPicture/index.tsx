import React, { useState, useEffect, FormEvent } from "react";
import { Link } from "react-router-dom";

import { GoPlus } from "react-icons/go";

import { BodyProductName, Information, ButtonNext, Label } from "./styles";

import Background from "../../components/Background";
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

const NewProductPicture: React.FC = () => {

    const [picture, setPicture] = useState<string>();
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
                "id": 0,
                "name": newProduct[0].name,
                "qtd": newProduct[0].qtd,
                "description": newProduct[0].description,
                "img": picture
            }
        ];

        localStorage.setItem('newProduct', JSON.stringify(JSONProduct));
    }

    function fileSave(file: any) {
        const fr = new FileReader();

        fr.readAsDataURL(file[0]);

        fr.onloadend = () => {
            setPicture(fr.result as string);
        };
    }

    return (
        <Background>
            <BodyProductName>
                <Information>
                    <NewProductTitle text="Adicione uma foto do seu produto" />
                    <NewProductDescription text="As fotos dos produtos aparecem para seus clientes em suas lojas. É uma boa forma de mostrar o que você está oferecendo." />
                    <Label imgUrl={picture as string}>
                        As dimenções da foto <br /> devem ser de 600 x 600
                        <GoPlus size={50} />
                        <input style={{ display: "none" }} accept="image/*" type="file" onChange={(e) => fileSave(e.target.files)} />
                    </Label>
                </Information>
                <Link to={"/newProductValue"} style={{ textDecoration: "none" }} onClick={saveValue} >
                    <ButtonNext>CONTINUAR</ButtonNext>
                </Link>
            </BodyProductName>
        </Background>
    );
};

export default NewProductPicture;