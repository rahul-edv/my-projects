import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

const Card = ({ img, title, prevPrice, newPrice }) => {
    return (
        <section className="card">
            <img className="card-img" src={img} alt="" />
            <div className="card-details">
                <h3 className="card-title">{title}</h3>
                <section className="card-reviews">
                    <AiFillStar className="rating-star" />
                    <AiFillStar className="rating-star" />
                    <AiFillStar className="rating-star" />
                    <AiFillStar className="rating-star" />
                    <span className="total-reviews">4</span>
                </section>
                <section className="card-price">
                    <div className="price">
                        <del>{prevPrice}</del> {newPrice}
                    </div>
                    <div className="bag">
                        <BsFillBagHeartFill className="bag-icon" />
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Card