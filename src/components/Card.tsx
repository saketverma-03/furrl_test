import "@/scss/components/card.scss";
import { FiShare } from "react-icons/fi";
import { RWebShare } from "react-web-share";

type CardProps = {
  id: string;
  image: string;
  brandName: string;
  price: number;
  comparedPrice: number;
  furrlDiscountPercent: number;
  title: string;
  productid: string;
};

export default function Card({
  id,
  image,
  brandName,
  price,
  comparedPrice,
  furrlDiscountPercent,
  title,
  productid,
}: CardProps) {
  const link: string = `https://web.furrl.in/productDetail?productId=${productid}&id=${id}&brand=${brandName.trim()}&name=${title.trim()}`;
  return (
    <>
      <div className="card-container">
        <img src={image} alt="" />
        <a href={link}>
          <p className="font-light fl">{brandName}</p>
          <p className="title">{title}</p>
          <span className="costContaienr">
            <p className="price">{`Rs ${price}`}</p>
            <p className="price-compared fl">{comparedPrice}</p>
            <p className="disscount fl">{furrlDiscountPercent + "%"}</p>
          </span>
        </a>
        <span className="shareIcon">
          <RWebShare
            data={{
              text: title,
              url: link,
              title: title,
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <FiShare />
          </RWebShare>
        </span>
      </div>
    </>
  );
}
