import { Swiper, SwiperSlide } from "swiper/react";

import productsData from "../../componemts/data/productsData";
import { displayMoney } from "../utils/utils";
import { Link } from "react-router-dom";

export default function HeroSlider() {
  const heroProducts = productsData.filter(
    (item) => item.tag === "hero-product"
  );

  console.log(heroProducts);

  return (
    <>
      {heroProducts.slice(0, 1).map((item, index) => {
        const {
          id,
          title,
          tagline,
          heroImage,
          finalPrice,
          originalPrice,
          path,
        } = item;
        const newPrice = displayMoney(finalPrice);
        const oldPrice = displayMoney(originalPrice);

        return (
          <div className="hero_card" key={index}>
            <div className="hero_item_txt">
              <h3>{title}</h3>
              <h1>{tagline}</h1>
              <h2 className="hero_price">
                {newPrice} &nbsp;
                <small>
                  <del>{oldPrice}</del>
                </small>
              </h2>
              <Link to={`${path}${id}`} className="btn">
                Shop Now
              </Link>
            </div>
            <figure className="hero_item_img">
              <img src="" alt="product-img" />
            </figure>
          </div>
        );
      })}
    </>
  );
}
