import { Card } from "./Card/Card";
import type { mainImage } from "../../data/models/Product";

export interface Item {
   listing_id: number,
   url?: string,
   mainImage?: mainImage,
   title?: string,
   currency_code?: string,
   price?: string,
   quantity?: number,
 }
 
 type Products = {
   products: Item[];
 }

export const Listing = ({ products }: Products) => {
   return (
    <div className="item-list">
      {products.map((item) => (
        <Card item={item} key={item.listing_id}/>
      ))}
    </div>
   )
}