import React, { FC, ReactElement } from 'react';
import './ShortProductCard.scss';
import { Product } from '../types';

export const ShortProductCard: FC<Product> = (product): ReactElement => {
  const { id, name, photo, desc, oldPrice, price, createdAt } = product;
  return (
    <div className="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-3">
      <div className="product-card">
        <div className="product-thumb">
          <a href="product.html">
            <img src={photo} />
          </a>
        </div>
        <div className="product-details">
          <h4>
            <a href="products.html">{name}</a>
          </h4>
          <p className="product-excerpt">{desc}</p>
          <div className="product-bottom-details d-flex justify-content-between">
            <div className="product-price">
              RUB {price} <small>{oldPrice}</small>
            </div>
            <div className="product-links">
              <a href="#" className="btn btn-outline-primary add-to-cart">
                <i className="fas fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
