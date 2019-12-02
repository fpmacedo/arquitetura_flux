import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-alphabounce-instinct-masculino/93/COL-9739-793/COL-9739-793_zoom1.jpg?ims=120x"
          alt="Tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$ 129.90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-alphabounce-instinct-masculino/93/COL-9739-793/COL-9739-793_zoom1.jpg?ims=120x"
          alt="Tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$ 129.90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-alphabounce-instinct-masculino/93/COL-9739-793/COL-9739-793_zoom1.jpg?ims=120x"
          alt="Tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$ 129.90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-alphabounce-instinct-masculino/93/COL-9739-793/COL-9739-793_zoom1.jpg?ims=120x"
          alt="Tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$ 129.90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-alphabounce-instinct-masculino/93/COL-9739-793/COL-9739-793_zoom1.jpg?ims=120x"
          alt="Tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$ 129.90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-alphabounce-instinct-masculino/93/COL-9739-793/COL-9739-793_zoom1.jpg?ims=120x"
          alt="Tenis"
        />
        <strong>Tenis muito legal</strong>
        <span>R$ 129.90</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
