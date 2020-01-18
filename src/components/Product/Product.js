import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import './Product.css';
import styles from './Product.module.css';

const QuantityValue = styled.span`
  font-weight: 500;
  color: ${props => (props.inStock ? 'green' : 'red')};
`;

function Product({ imgUrl, name, price, quantity }) {
  const isInStock = quantity < 50;

  // vanilla css
  // const quantityClasses = [
  //   'Product-quantity',
  //   isInStock ? 'available' : 'not-available',
  // ];

  // const quantityClasses = [
  //   styles.quantity,
  //   isInStock ? styles.available : styles.notAvailable,
  // ];

  const quantityClass = isInStock ? styles.available : styles.notAvailable;

  return (
    <div className={styles.container}>
      <img src={imgUrl} alt={name} width="640" />
      <h2 className={styles.name}>{name}</h2>
      <p>Price: {price}$</p>

      <p>
        Quantity:
        {/* <span className={quantityClass}>
          {isInStock ? 'Few left' : 'In stock'}
        </span> */}
        <QuantityValue inStock={isInStock}>
          {isInStock ? 'In stock' : 'Few left'}
        </QuantityValue>
      </p>
      <button type="button">Add to cart</button>
    </div>
  );
}

Product.defaultProps = {
  imgUrl:
    'https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder',
};

Product.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
