import { useOrderContext } from '@/providers/OrderProvider'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'
import {
  ProductAddToCartButton,
  ProductCardContainer,
  ProductCount,
  ProductPrice,
  ProductTag
} from './styles'

interface ProductProps {
  product: {
    id: number
    imageUrl: string
    tags: string[]
    name: string
    description: string
    price: number
  }
}

export function ProductCard({ product }: ProductProps) {
  const { addProductToCart, settings } = useOrderContext()
  const [amount, setAmount] = useState(1)

  const pricePerAmount = product.price * amount
  const amountStep = 1

  function handleIncreaseAmount() {
    setAmount((amount) => {
      if (amount < settings.maxCoffeeAmount) {
        return amount + amountStep
      }
      return amount
    })
  }

  function handleDecreaseAmount() {
    setAmount((amount) => {
      if (amount > settings.minCoffeeAmount) {
        return amount - amountStep
      }
      return amount
    })
  }

  function handleAddToCart() {
    addProductToCart(product, amount)
    setAmount(settings.minCoffeeAmount)
  }

  return (
    <ProductCardContainer key={product.id}>
      <img src={product.imageUrl} alt="" />

      <div className="tag-group">
        {product.tags.map((tag) => (
          <ProductTag key={`${product.id}-${tag}`}>{tag}</ProductTag>
        ))}
      </div>

      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <footer>
        <ProductPrice>
          <span>R$</span>
          <strong>
            {pricePerAmount.toLocaleString('pt-br', {
              minimumFractionDigits: 2
            })}
          </strong>
        </ProductPrice>

        <ProductCount>
          <button
            type="button"
            onClick={handleDecreaseAmount}
            title="Diminuir quantidade"
          >
            <Minus size={16} />
          </button>
          <span>{amount}</span>
          <button
            type="button"
            title="Aumentar quantidade"
            onClick={handleIncreaseAmount}
          >
            <Plus size={16} />
          </button>
        </ProductCount>

        <ProductAddToCartButton
          type="button"
          title={`Adicionar ${amount} de ${product.name} ao carrinho`}
          onClick={handleAddToCart}
        >
          <ShoppingCartSimple weight="fill" />
        </ProductAddToCartButton>
      </footer>
    </ProductCardContainer>
  )
}
