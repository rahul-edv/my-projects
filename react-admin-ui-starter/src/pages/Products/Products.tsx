import "./products.scss";
import { useState } from "react";
import DataTable from "../../components/dataTable/DataTable";
import { products } from "../../data";
import { GridColDef } from "@mui/x-data-grid";
import AddProduct from "../../components/addProduct/AddProduct";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 40 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 150,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150,
    type: "string",
  },
  {
    field: "inStock",
    headerName: "In Stock",
    width: 100,
    type: "boolean",
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="products">
      <div className="info">
        <h1>Products</h1>
        <button type="button" onClick={() => setOpen(true)}>
          Add new product
        </button>
      </div>
      <DataTable slug="products" columns={columns} rows={products} />
      {open && (
        <AddProduct slug="product" columns={columns} setOpen={setOpen} />
      )}
    </div>
  );
};

export default Products;
