import store from "./Store";
import { Provider } from "react-redux";

const CartProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default CartProvider;
