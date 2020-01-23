import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';

import { removeTask } from '../../actions/actionCreator';

import style from './orders.css';

const Orders = ({ orders, removeTask }) => (
  <table className={style.table}>
    <tbody>
      <tr>
        <th>Город</th>
        <th>Дата</th>
        <th>Телефон</th>
        <th>Имя</th>
      </tr>
      {orders.map(({ id, city, date, phone, name }) => (
        <tr className={style.item} key={id}>
          <td>{city}</td>
          <td>{date}</td>
          <td>{phone}</td>
          <td>{name}</td>
          <td>
            <button className={style.button} onClick={() => removeTask(id)}>Удалить</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

Orders.propTypes = {
  orders: PropTypes.array,
  removeTask: PropTypes.func,
};

Orders.defaultProps = {
  orders: [],
  removeTask: () => {},
};

export default connect(state => ({
  orders: state.orders,
}), { removeTask })(Orders);