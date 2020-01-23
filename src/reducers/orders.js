import { ADD_ORDER, REMOVE_ORDER } from '../constants';
import { load } from 'redux-localstorage-simple';

let ORDERS = load({ namespace: 'orders-list' });

if (!ORDERS || !ORDERS.orders || !ORDERS.orders.length) {
  ORDERS = {
    orders: [],
  }
}

const orders = (state = ORDERS.orders, { type, id, city, date, phone, name }) => {
  switch (type) {
    case ADD_ORDER :
      return [
        ...state, {
          id,
          city,
          date,
          phone,
          name,
        }
      ];
    case REMOVE_ORDER:
      return [...state].filter(order => order.id !== id);
    default:
      return state;
  }
};

export default orders;
