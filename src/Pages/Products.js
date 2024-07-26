import ProductCard from "../components/Organism/Card/ProductCard";
import Button from "../components/Atoms/Button/Button";
import { useState, useEffect, useRef } from "react";
import Counter from "../components/Organism/Counter";
import { getProducts } from "../services/dsa/Products.sevice";

const email = localStorage.getItem("email");

// Use State
const ProductsPage = () => {
  // State untuk menyimpan daftar item dalam keranjang, diinisialisasi dengan satu item.
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  // setCart dari localStorage jika ada, jika tidak maka menjadi array kosong
  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  // menghitung total harga dan menyimpan data keranjang ke localStorage setiap kali 'cart' berubah
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      // Hitung total harga dengan menjumlahkan harga produk dikali kuantitas
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum); // Set total harga
      localStorage.setItem("cart", JSON.stringify(cart)); // Simpan cart ke localStorage
    }
  }, [cart, products]); // Bergantung pada perubahan 'cart'

  // function untuk menangani penambahan item ke keranjang berdasarkan ID item.
  const handleAddToCart = (id) => {
    // Memeriksa apakah item dengan ID yang sama sudah ada di keranjang.
    if (cart.find((item) => item.id === id)) {
      // Jika sudah ada, update jumlah (qty) dari item tersebut.
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      // Jika item dengan ID tersebut belum ada di keranjang, tambahkan item baru dengan qty 1.
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  // const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  // const handleCartRef = (id) => {
  //   cartRef.current = [ ...cartRef.current, { id, qty: 1 }];
  //   localStorage.setItem("cart", JSON.stringify(cartRef.current));
  // };

  const totalPriceRef = useRef(null);

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart, products]);

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
          {products.length > 0 &&
            products.map((products) => (
              <ProductCard key={products.id}>
                <ProductCard.Header image={products.image} />
                <ProductCard.Body title={products.title}>
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
              {products.length > 0 &&
                cart.map((item) => {
                  // Mencari produk dengan ID yang sesuai dengan item dalam keranjang
                  const product = products.find(
                    (product) => product.id === item.id
                  );
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 10)} ...</td>
                      <td>
                        {product.price.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        {(item.qty * product.price).toLocaleString("id-ID", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </td>
                    </tr>
                  );
                })}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    {totalPrice.toLocaleString("id-ID", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <Counter/> */}
    </>
  );
};

export default ProductsPage;
