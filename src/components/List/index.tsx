import React, { useState, useEffect, FormEvent } from "react";

import { BlockItem, InfoItem, ItemQuantity } from "./styles";

import ModalDetailProduct from "../ModalDetailProduct";

type Product = {
    id: number;
    name: string;
    description: string;
    img: string;
    qtd: number;
    value: string;
}

export default function List() {

    const [products, setProducts] = useState<Product[]>([]);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [productModal, setProductModal] = useState<Product>();

    useEffect(() => {

        const jsonProduct = localStorage.getItem('Products');
        const product: Product[] = JSON.parse(jsonProduct as string);

        const jsonNewProduct = localStorage.getItem('newProduct');
        const newProduct: Product[] = JSON.parse(jsonNewProduct as string);

        if (newProduct) {

            let arAux: Product[] = product;

            localStorage.removeItem('newProduct');

            newProduct[0].id = product ? product.length + 1 : 1;

            if (!arAux) {
                arAux = [];
            }

            arAux.push(newProduct[0]);

            localStorage.setItem('Products', JSON.stringify(arAux));
        }

    }, []);

    useEffect(() => {
        const localProducts = localStorage.getItem('Products');

        if (localProducts) {
            setProducts(JSON.parse(localProducts));
        }

    }, []);

    function handleOpenModal(product: Product) {
        setProductModal(product);
        setOpenModal(true);
    }

    function handleCloseModal() {
        setOpenModal(false);
    }

    return (

        <>
            <div className="listItems">
                {
                    products && products.map(
                        product => (
                            <>
                                <BlockItem onClick={() => {
                                    handleOpenModal(product)
                                }} key={product.id}  >
                                    <InfoItem>
                                        <h1>{product.name}</h1>
                                        <div>
                                            {product.description}
                                        </div>
                                    </InfoItem>
                                    <ItemQuantity lowStock={product.qtd <= 3 && product.qtd > 0} noneStock={product.qtd === 0}>
                                        <strong>{product.qtd}</strong>
                                        <p>
                                            {
                                                product.qtd === 0 ? "Fora de estoque" : "Estoque baixo"
                                            }
                                        </p>
                                    </ItemQuantity>
                                </BlockItem>
                            </>

                        )
                    )
                }
            </div>
            {
                productModal && (
                    <ModalDetailProduct data={productModal as Product} open={openModal} onHandleClose={handleCloseModal} />
                )
            }
        </>
    );
}