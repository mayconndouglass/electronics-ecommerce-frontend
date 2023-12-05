import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { IndividualProduct } from '../pages/IndividualProduct'
import { Cart } from '../pages/Cart'

export const Router = () => {
  return (
    <Routes>
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/loja/product/:id' element={<IndividualProduct />} />
        <Route path='/loja/cart' element={<Cart />} />
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}
