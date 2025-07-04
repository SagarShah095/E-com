import React, { useState } from "react";
import CategoryTable from "../../../Components/Admin/Categories/CategoryTable";
import AddNewCategory from "../../../Components/Admin/Categories/AddNewCategory";
import AddNewSubCate from "../../../Components/Admin/Categories/AddNewSubCate";
import { useEffect } from "react";

const Categories = () => {
  const [category, setCategory] = useState(false);
  const [subCate, setSubCate] = useState(false);
  const [update, setUpdate] = useState("");
  const [open, setOpen] = useState(false);
  const [productDrawer, setProductDrawer] = useState(false);
  const [getProducts, setGetProducts] = useState([]);
  const [getCate, setGetCate] = useState([]);
  const [edit, setEdit] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const id = new URLSearchParams(location.search).get("id");
    if (id) setProductDrawer(true);
  }, [location.search]);

  console.log(category, "getCate in Categories");

  return (
    <div>
      <CategoryTable
        setEdit={setEdit}
        edit={edit}
        setGetCate={setGetCate}
        getCate={getCate}
        category={category}
        setCategory={setCategory}
        setUpdate={setUpdate}
        update={update}
        setSubCate={setSubCate}
        open={open}
        setOpen={setOpen}
        refresh={refresh}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      {(category || open) && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-40 flex justify-end transition-all duration-300 ease-in-out">
          <AddNewCategory
            setEdit={setEdit}
            edit={edit}
            setProductDrawer={setProductDrawer}
            setGetProducts={setGetProducts}
            setCategory={setCategory}
            update={update}
            setOpen={setOpen}
            open={open}
            setGetCate={setGetCate}
            getCate={getCate}
            setRefresh={setRefresh}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
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
