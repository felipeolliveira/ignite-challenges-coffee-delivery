import coffeeLogo from '@/assets/coffee_delivery_logo.svg'
import { useLayoutContext } from '@/providers/LayoutProvider'
import { useOrderContext } from '@/providers/OrderProvider'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link, NavLink } from 'react-router-dom'
import { CartNav, CityPoint, HeaderContainer } from './styles'

export function Header() {
  const { isCartHidden } = useLayoutContext()
  const { itemsState, address } = useOrderContext()

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={coffeeLogo} alt="Logo do Coffee Delivery" />
      </Link>
      <nav>
        <CityPoint title="Endereço de compra">
          <MapPin weight="fill" size={22} />
          {address && (
            <span>
              {address.city}, {address.state}
            </span>
          )}
        </CityPoint>

        {!isCartHidden && (
          <NavLink to="/order/checkout">
            <CartNav itensAmout={itemsState.length} title="Carrinho de compra">
              <ShoppingCart weight="fill" size={22} />
            </CartNav>
          </NavLink>
        )}
      </nav>
    </HeaderContainer>
  )
}
