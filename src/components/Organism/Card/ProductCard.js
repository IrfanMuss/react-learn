import Button from "../../Atoms/Button/Button";
// Nested Component
const ProductCard = ({ children }) => {
  return (
    <div className="flex flex-col justify-between w-full max-w-xs bg-gray-800 border border-gray-700 rounded-lg shadow mx-3">
      {children}
    </div>
  );
};

const Header = ({ image }) => {
  return (
    <a href="#">
      <img src={image} alt="product" className="p-8 rounded-t-lg w-full h-60 object-cover"></img>
    </a>
  );
};

const Body = ({ children, title }) => {
  return (
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className="text-xl text-white tracking-tight font-semibold">
          {title.substring(0, 20)} ...
        </h5>
      </a>
      <p className="text-white text-m">{children.substring(0, 100)} ...</p>
    </div>
  );
};

const Footer = ({ price, handleAddToCart, id }) => {
  return (
    <div className="flex items-center justify-between px-5 pb-5 mx-2">
      <span className="text-xl text-white font-bold">
        $ {price.toLocaleString("id-ID", { syle: "curency", curency: "USD" })}
      </span>
      <Button classname="bg-blue-600" onClick={() => handleAddToCart(id)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </Button>
    </div>
  );
};

ProductCard.Header = Header;
ProductCard.Body = Body;
ProductCard.Footer = Footer;

export default ProductCard;
