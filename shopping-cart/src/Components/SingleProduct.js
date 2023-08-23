import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import { CartState } from "../Context/Contexts";

const SingleProduct = ({ prod }) => {
    const {
        state: { cart },
        dispatch,
    } = CartState();
    return (
        <div className="products">
            <Card>
                <Card.Img variant="top" src={prod.image} alt={prod.name} />
                <Card.Body>
                    <Card.Title>{prod.name}</Card.Title>
                    <Card.Subtitle>
                        <span>&#8377; {prod.price.split(".")[0]}</span>
                        {prod.fastDelivery ? (
                            <div>Fast Delivery</div>
                        ) : (
                            <div>4 Days Delivery</div>
                        )}
                        <Rating
                            rating={prod.ratings}
                            onClick={() => {
                                return false;
                            }}
                        />
                    </Card.Subtitle>
                    {cart.some((item) => item.id === prod.id) ? (
                        <Button
                            variant="danger"
                            onClick={() =>
                                dispatch({ type: "REMOVE_FROM_CART", payload: prod })
                            }
                        >
                            Remove from Cart
                        </Button>
                    ) : (
                        <Button
                            disabled={!prod.inStock}
                            onClick={() => dispatch({ type: "ADD_TO_CART", payload: prod })}
                        >
                            {!prod.inStock ? "Out of stock" : "Add to cart"}
                        </Button>
                    )}
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleProduct;
