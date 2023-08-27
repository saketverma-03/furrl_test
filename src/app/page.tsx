import Card from "@/components/Card";
import ProductList from "@/components/ProductList";
import "@/scss/homePage.scss";
import axios from "axios";

/* 
https://api.furrl.in/api/v1/vibe/getVibeRelate?visitId=&page=1  
*/

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

import { getData } from "@/api";

export default async function Home() {
  let data: productData[] = await getData();

  return (
    <main>
      <div className="section">
        <span>Products</span>
      </div>
      <div className="category-selector">
        <button className="selected">All</button>
        <button>Home</button>
        <button>Aparel</button>
        <button>Accsoress</button>
        {/* extera */}
      </div>
      <ProductList data={data} />
    </main>
  );
}
