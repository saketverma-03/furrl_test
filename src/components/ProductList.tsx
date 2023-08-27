"use client";
import { getData } from "@/api";
import "@/scss/components/productList.scss";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Card from "./Card";
type productData = {
  id: string;
  images: any[];
  brandName: string;
  price: number;
  compare_at_price: number;
  furrlDiscountPercent: number;
  title: string;
  productid: string;
};
type props = {
  data: productData[];
};

export default function ProductList({ data }: props) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const [products, SetProducts] = useState(data);
  const [page, setPage] = useState(1);

  async function loadMoreProducts() {
    const next = page + 1;
    setPage(next);
    const newProducts = await getData(next);
    SetProducts([...products, ...newProducts]);
  }

  useEffect(() => {
    if (inView) {
      loadMoreProducts();
    }
  }, [inView]);

  return (
    <>
      <div className="product-list-container">
        {products.map((item) => {
          return (
            <>
              <Card
                id={item.id}
                productid={item.productid}
                image={item.images[0].src}
                brandName={item.brandName}
                comparedPrice={item.compare_at_price}
                price={item.price}
                furrlDiscountPercent={item.furrlDiscountPercent}
                title={item.title}
                key={item.id}
              />
            </>
          );
        })}
      </div>
      <h2 ref={ref}>Loading</h2>
    </>
  );
}
