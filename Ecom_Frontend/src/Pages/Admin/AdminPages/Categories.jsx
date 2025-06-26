import React, { useState } from "react";
import CategoryTable from "../../../Components/Admin/Categories/CategoryTable";
import AddNewCategory from "../../../Components/Admin/Categories/AddNewCategory";

const Categories = () => {

    const [cate, setCate] = useState(false)

  return (
    <div>
      <CategoryTable setCate={setCate}/>
      <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex justify-end transition-all duration-300 ease-in-out">
        <AddNewCategory />
      </div>
    </div>
  );
};

export default Categories;
