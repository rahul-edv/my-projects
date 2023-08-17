import Single from "../../components/single/Single";
import "./product.scss";
import { singleProduct } from "../../data";

const Product = () => {
  // fetch data and send to single component
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;
