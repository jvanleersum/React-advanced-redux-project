import { useEffect } from "react";
import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

let isInitial = true;

function App() {
  const showCart = useSelector((state) => state.showCart);
  const cart = useSelector((state) => state);

  useEffect(() => {
    const sendCartData = () => {
      fetch(
        "https://react-food-ordering-app-a5349-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        { method: "PUT", body: JSON.stringify(cart) }
      );
    }

    if (isInitial) {
      isInitial = false;
      return;
    } else {
      sendCartData()
    }

  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
