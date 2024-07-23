import Button from "../../Atoms/Button/Button";

const ProductCard = ({ children }) => {
  return (
    <div className="flex flex-col justify-between w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-3">
      {children}
    </div>
  );
};

const Header = ({ image }) => {
  return (
    <a href="#">
      <img src={image} alt="product" className="p-8 rounded-t-lg"></img>
    </a>
  );
};

const Body = ({ children, name }) => {
  return (
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className="text-xl text-white tracking-tight font-semibold">
          {name}
        </h5>
      </a>
      <p className="text-white text-m">{children}</p>
    </div>
  );
};

const Footer = ({ price }) => {
  return (
    <div className="flex items-center justify-between px-5 pb-5 mx-2">
      <span className="text-xl text-white font-bold">{price}</span>
      <Button classname="bg-blue-600">Add to card</Button>
    </div>
  );
};

ProductCard.Header = Header;
ProductCard.Body = Body;
ProductCard.Footer = Footer;

export default ProductCard;
