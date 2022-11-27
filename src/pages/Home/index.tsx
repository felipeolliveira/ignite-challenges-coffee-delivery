import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import coffeeCup from '@/assets/coffee_cup.png'
import {
  HomeAdvantageItem,
  HomeContainer,
  HomeInfo,
  HomeIntro,
  HomeIntroWrapper,
  OwerProducts,
  ProductList
} from './styles'

import productsFromDatabase from '@/database/products.json'
import { ProductCard } from './components/ProductCard'

export function Home() {
  return (
    <HomeContainer>
      <HomeIntro>
        <HomeIntroWrapper>
          <HomeInfo>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>

            <ul>
              <HomeAdvantageItem color="yellowDark">
                <span>
                  <ShoppingCart weight="fill" size={16} />
                </span>
                <p>Compra simples e segura</p>
              </HomeAdvantageItem>
              <HomeAdvantageItem color="brown">
                <span>
                  <Package weight="fill" size={16} />
                </span>
                <p>Embalagem mantém o café intacto</p>
              </HomeAdvantageItem>
              <HomeAdvantageItem color="yellow">
                <span>
                  <Timer weight="fill" size={16} />
                </span>
                <p>Entrega rápida e rastreada</p>
              </HomeAdvantageItem>
              <HomeAdvantageItem color="purple">
                <span>
                  <Coffee weight="fill" size={16} />
                </span>
                <p>O café chega fresquinho até você</p>
              </HomeAdvantageItem>
            </ul>
          </HomeInfo>
          <img src={coffeeCup} alt="Copó de café com grãos ao redor" />
        </HomeIntroWrapper>
      </HomeIntro>

      <OwerProducts>
        <h2>Nossos cafés</h2>

        <ProductList>
          {productsFromDatabase.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </ProductList>
      </OwerProducts>
    </HomeContainer>
  )
}
