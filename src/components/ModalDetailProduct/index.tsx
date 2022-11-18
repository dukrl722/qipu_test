import React, { useState, useEffect, FormEvent } from "react";

import { HeaderModal, Modal, ImgProduct, BodyModal, ItemBodyModal } from "./styles";

import { GoTrashcan, GoPencil, GoChevronLeft } from "react-icons/go";

interface Product {
    id: number;
    name: string;
    description: string;
    img: string;
    qtd: number;
    value: string;
}

type ProductDetailProps = {
    data: Product;
    open: boolean;
    onHandleClose: (event: React.MouseEvent<HTMLOrSVGElement>) => void
}

export default function ModalDetailProduct({data, open, onHandleClose, ...rest} : ProductDetailProps) {

    return (
        <Modal open={open}>
            <HeaderModal>
                <div>
                    <GoChevronLeft size={24} onClick={onHandleClose} />
                    <div>
                        <GoTrashcan size={24} />
                        <GoPencil size={24} />
                    </div>
                </div>
                <ImgProduct>
                    <div>
                        <img src={data.img} />
                    </div>
                    <p>{data.name}</p>
                </ImgProduct>
            </HeaderModal>
            <BodyModal>
                <ItemBodyModal>
                    <p>Estoque</p>
                    <span>{data.qtd}</span>
                </ItemBodyModal>
                <ItemBodyModal>
                    <p>Categoria</p>
                    <span>Bebidas, Café </span>
                </ItemBodyModal>
                <ItemBodyModal>
                    <p>Valor</p>
                    <span>{data.value}</span>
                </ItemBodyModal>
                <ItemBodyModal>
                    <p>Descrição</p>
                    <span>{data.description}</span>
                </ItemBodyModal>
            </BodyModal>
        </Modal>
    );
}