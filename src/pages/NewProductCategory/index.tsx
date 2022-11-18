import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { GoPlus, GoCheck, GoChevronRight } from "react-icons/go";

import { BodyProductName, Information, ButtonNext, CategoryDiv, NewCategory, ListCategory } from "./styles";

import Background from "../../components/Background";
import NewProductTitle from "../../components/NewProductTitle";
import NewProductDescription from "../../components/NewProductDescription";

type Props = {
    id: number;
    name: string;
}

const NewProductCategory: React.FC = () => {

    const [category, setCategory] = useState<Props[]>([]);
    const [constructNewCategory, setConstructNewCategory] = useState<string>();
    const [openInput, setOpenInput] = useState<boolean>();

    function handleOpenInput() {
        setOpenInput(true);
    }

    useEffect(() => {
        const categories = localStorage.getItem('Categories');

        if (categories) {
            setCategory(JSON.parse(categories));
        }
    }, []);

    function handleSaveNewCategory() {
        const categories = localStorage.getItem('Categories');
        const JSONcategories: Props[] = JSON.parse(categories as string);

        const newCategory: Props = {
            id: JSONcategories ? JSONcategories.length + 1 : 1,
            name: constructNewCategory as string
        };

        let arAux: Props[] = JSONcategories;

        if (!arAux) {
            arAux = [];
        }

        arAux.push(newCategory);

        localStorage.setItem('Categories', JSON.stringify(arAux));

        setOpenInput(false);
    }

    return (
        <Background>
            <BodyProductName>
                <Information>
                    <NewProductTitle text="Adicione as categorias" />
                    <NewProductDescription text="Separar os produtos em categorias pode facilitar a sua organização e ajuda os clientes a encontrarem o que querer." />
                    <div onClick={handleOpenInput}>
                        <span>Adicionar nova categoria</span>
                        <p>
                            <GoPlus />
                        </p>
                    </div>
                    <NewCategory open={openInput as boolean}>
                        <input type="text" onChange={(e) => setConstructNewCategory(e.target.value)} />
                        <GoCheck size={30} onClick={handleSaveNewCategory} />
                    </NewCategory>
                    <ListCategory >
                        {
                            category && category.map(
                                cat => (
                                    <CategoryDiv>
                                        <p>
                                            {cat.name}
                                        </p>
                                        <GoChevronRight />
                                    </CategoryDiv>
                                )
                            )
                        }
                    </ListCategory>

                </Information>
                <Link to={"/newProductPicture"} style={{ textDecoration: "none" }} >
                    <ButtonNext>CONTINUAR</ButtonNext>
                </Link>
            </BodyProductName>
        </Background>
    );
};

export default NewProductCategory;