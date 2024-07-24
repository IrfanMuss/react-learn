import ProductCard from "../components/Organism/Card/ProductCard";
import Button from "../components/Atoms/Button/Button";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Sepatu Keren",
    image: "/oli.png",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text.`,
    price: 313000,
  },
  {
    id: 2,
    name: "Sepatu Biasa",
    image: "/oli.png",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text ever
    since the 1500s.`,
    price: 247000,
  },
  {
    id: 3,
    name: "Sepatu Cantik",
    image: "/oli.png",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.`,
    price: 294000,
  },
];

const email = localStorage.getItem("email");

// Use State
const ProductsPage = () => {
  // State untuk menyimpan daftar item dalam keranjang, diinisialisasi dengan satu item.
  const [cart, setCart] = useState([
    {
      id: 1,
      qty: 1,
    },
  ]);

  // function untuk menangani penambahan item ke keranjang berdasarkan ID item.
  const handleAddToCart = (id) => {
    // Memeriksa apakah item dengan ID yang sama sudah ada di keranjang.
    if (cart.find(item => item.id === id)) {
      // Jika sudah ada, update jumlah (qty) dari item tersebut.
      setCart(cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item));
    } else {
      // Jika item dengan ID tersebut belum ada di keranjang, tambahkan item baru dengan qty 1.
      setCart([...cart, {id, qty: 1}]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };
  return (
    <>
      <div className="flex justify-end h-20 bg-blue-700 text-white items-center px-10">
        {email}
        <Button classname="bg-red-500 ml-5" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="flex justify-center py-5">
        <div className="flex flex-wrap w-4/6">
          {products.map((products) => (
            <ProductCard key={products.id}>
              <ProductCard.Header image={products.image} />
              <ProductCard.Body name={products.name}>
                {products.description}
              </ProductCard.Body>
              <ProductCard.Footer
                price={products.price}
                id={products.id}
                handleAddToCart={handleAddToCart}
              />
            </ProductCard>
          ))}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th> 
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                // Mencari produk dengan ID yang sesuai dengan item dalam keranjang
                const product = products.find((product) => product.id === item.id);
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>Rp {product.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                    <td>{item.qty}</td>
                    <td>Rp {(item.qty * product.price).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

        </div>
      </div>
    </>
  );
};

export default ProductsPage;
