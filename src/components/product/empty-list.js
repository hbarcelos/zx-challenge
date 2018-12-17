import React from 'react';
import './empty-list.css';

export default function EmptyProductList() {
  return (
    <div className="product__list product__list--empty">
      Nenhum produto encontrado.
    </div>
  );
}
