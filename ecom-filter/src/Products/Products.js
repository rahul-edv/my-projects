import "./Products.css";
import Card from "../Components/Card";

const Products = ({ data }) => {
    return (
        <>
            <section className="card-container">
                {data}
            </section>
        </>
    );
};

export default Products;
