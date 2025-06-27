import React, { useState } from "react";
import CategoryTable from "../../../Components/Admin/Categories/CategoryTable";
import AddNewCategory from "../../../Components/Admin/Categories/AddNewCategory";
import AddNewSubCate from "../../../Components/Admin/Categories/AddNewSubCate";

const Categories = () => {
  const [cate, setCate] = useState(false);
  const [subCate, setSubCate] = useState(false);
  const [update, setUpdate] = useState("");
  const [open, setOpen] = useState(false);
  const [getCate, setGetCate] = useState([]);

  return (
    <div>
      <CategoryTable
        setGetCate={setGetCate}
        getCate={getCate}
        setCate={setCate}
        setUpdate={setUpdate}
        update={update}
        setSubCate={setSubCate}
        open={open}
        setOpen={setOpen}
      />
      {(cate || open) && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex justify-end transition-all duration-300 ease-in-out">
          <AddNewCategory
            setCate={setCate}
            update={update}
            setOpen={setOpen}
            open={open}
            setGetCate={setGetCate}
            getCate={getCate}
          />
        </div>
      )}

      {subCate && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex justify-end transition-all duration-300 ease-in-out">
          <AddNewSubCate setSubCate={setSubCate} />
        </div>
      )}
    </div>
  );
};

export default Categories;
