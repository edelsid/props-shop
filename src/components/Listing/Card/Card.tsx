import { Product } from "../../../data/models/Product";

interface ProductProp {
  item: Product;
}

export const Card = ({ item }: ProductProp) => {
  return (
    <div className="item">
      <div className="item-image">
        <a href={item.url}>
          <img src={item.mainImage!.url_570xN}></img>
        </a>
      </div>
      <div className="item-details">
        <p className="item-title">{checkName(item.title)}</p>
        <p className="item-price">{checkCode(item.currency_code, item.price)}</p>
        <p className={"item-quantity " + checkLevel(item.quantity)}>{item.quantity} left</p>
      </div>
    </div>
  )
}

const checkCode = (code?: string, amount?: string) => {
  let price: string = amount! + " " + code!;
  switch (code) {
    case "USD": price = "$"+amount;
      return price;
    case "EUR": price = "€"+amount;
      return price;
  }
  return price;
}

const checkName = (title?: string) => {
  let name: string = title!;
  if (title!.length > 50) {
    name = title!.slice(0, 50) + "...";
  }
  return name;
}

const checkLevel = (quantity?: number) => {
  let level: string;
  if (quantity! > 20) level = "level-high";
  else if (quantity! <= 20 && quantity! > 10) level = "level-medium";
  else level = "level-low";

  return level;
}