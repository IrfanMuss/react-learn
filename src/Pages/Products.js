import ProductCard from "../components/Organism/Card/ProductCard";

const products = [
  {
    id: 1,
    name: "Oli TMO",
    image: "/oli.png",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.`,
    price: "Rp. 313.000,00",
  },
  {
    id: 2,
    name: "Oli TMO",
    image: "/oli.png",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever
    since the 1500s.`,
    price: "Rp. 313.000,00",
  },
  {
    id: 3,
    name: "Oli TMO",
    image: "/oli.png",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry..`,
    price: "Rp. 290.000,00",
  },
];

const ProductsPage = () => {
  return (
    <div className="flex justify-center py-5">
      {products.map( (products) => (
        <ProductCard key={products.id}>
        <ProductCard.Header image={products.image} />
        <ProductCard.Body name={products.name}>
          {products.description}
        </ProductCard.Body>
        <ProductCard.Footer price={products.price} />
      </ProductCard>
      ))}
    </div>
  );
};

export default ProductsPage;
