import React from "react";
import { Route, Routes } from "react-router-dom";

import ListProduct from "../pages/ListProduct";
import NewProductCategory from "../pages/NewProductCategory";
import NewProductDescriptionInfo from "../pages/NewProductDescriptionInfo";
import NewProductName from "../pages/NewProductName";
import NewProductPicture from "../pages/NewProductPicture";
import NewProductStock from "../pages/NewProductStock";
import NewProductValue from "../pages/NewProductValue";

const Router: React.FC = () => (
    <Routes>
            <Route path="/" element={<ListProduct />} />
            <Route path="new" element={<NewProductName />} />
            <Route path="newProductStock" element={<NewProductStock />} />
            <Route path="newProductDescription" element={<NewProductDescriptionInfo />} />
            <Route path="newProductCategory" element={<NewProductCategory />} />
            <Route path="newProductPicture" element={<NewProductPicture />} />
            <Route path="newProductValue" element={<NewProductValue />} />
    </Routes>
);

export default Router;