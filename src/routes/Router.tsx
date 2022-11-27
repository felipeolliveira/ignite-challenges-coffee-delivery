import { DefaultLayout } from '@/layout/DefaultLayout'
import { Checkout } from '@/pages/Checkout'
import SuccessOrder from '@/pages/SuccessOrder'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/order/checkout" element={<Checkout />} />
        <Route path="/order/success" element={<SuccessOrder />} />
      </Route>
    </Routes>
  )
}
