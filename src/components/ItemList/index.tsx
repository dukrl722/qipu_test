import React, { useState, useEffect } from "react";

import { BlockItem, InfoItem, ItemQuantity } from "./styles";

interface StructureProduct {
    id: number;
    name: string;
    description: string;
    qtd: number;
}

type Props = {
    data: StructureProduct;
}

export function ItemList({ data, ...rest }: Props) {

    const [lowStock, setLowStock] = useState<boolean>(false);
    const [noneStock, setNoneStock] = useState<boolean>(false);

    function validateStateStockProduct(value: number) {

        setNoneStock(false);
        setLowStock(false);

        if (value === 0) {
            setNoneStock(true);
            return "Fora de estoque";
        } else if (value <= 3) {
            setLowStock(true);
            return "Estoque baixo";
        }

        return "";
    }

    return (
        <BlockItem key={data.id}>
            <InfoItem>
                <h1>{data.name}</h1>
                <div>
                    {data.description}
                </div>
            </InfoItem>
            <ItemQuantity lowStock={lowStock} noneStock={noneStock}>
                <strong>{data.qtd}</strong>
                <p>{validateStateStockProduct(data.qtd)}</p>
            </ItemQuantity>
        </BlockItem>
    );
};
