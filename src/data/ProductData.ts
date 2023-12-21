import etsy from "./etsy.json";
import type { Product } from "./models/Product";

const rawData: Product[] = etsy.map(function(item) { return {
   listing_id: item.listing_id,
   url: item.url,
   mainImage: item.MainImage,
   title: item.title,
   currency_code: item.currency_code,
   price: item.price,
   quantity: item.quantity,
}});

export const productData = rawData.filter((element) => element.mainImage);



