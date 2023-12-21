export type mainImage = {
   listing_image_id: number;
   hex_code: null;
   red: null;
   green: null;
   blue: null;
   hue: null;
   saturation: null;
   brightness: null;
   is_black_and_white: null;
   creation_tsz: null;
   listing_id: number;
   rank: null;
   full_width: null;
   url_75x75: string;
   url_170x135: string;
   url_570xN: string;
   url_fullxfull: string;
   full_height: null;
}

export type Product = {
   listing_id: number,
   url?: string,
   mainImage?: mainImage,
   title?: string,
   currency_code?: string,
   price?: string,
   quantity?: number,
}

