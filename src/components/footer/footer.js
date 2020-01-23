import React from 'react';

import style from './footer.css';

const Footer = () => (
  <div className={style.footer}>
    Нажимая «Записаться», я выражаю своё согласие с обработкой моих персональных данных&nbsp;в&nbsp;соответствии с
    принятой <a className={style.link} href={``}>политикой конфиденциальности</a> и
    принимаю <a className={style.link} href={``}>пользовательское&nbsp;соглашение</a>
  </div>
);

export default Footer;
