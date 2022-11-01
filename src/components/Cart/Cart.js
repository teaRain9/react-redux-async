import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector} from "react-redux";


const Cart = (props) => {
    const addedItems = useSelector(state => state.cart.items)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
          {addedItems.map(addedItem => {
              return (
                  <CartItem
                      key={addedItem.id}
                      item={{
                          id: addedItem.id,
                          title: addedItem.title,
                          quantity: addedItem.quantity,
                          total: addedItem.totalPrice,
                          price: addedItem.price
                        }}
                  />
              )
          })}
      </ul>
    </Card>
  );
};

export default Cart;
