import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { IndividualProduct } from '../pages/IndividualProduct'
import { Cart } from '../pages/Cart'
import { RequireAuth } from '../components/RequireAuth'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'
import { NotFound } from '../pages/NotFound'

export const Router = () => {
  return (
    <Routes>
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/store/product/:id' element={<IndividualProduct />} />

        <Route path='/store/cart' element={<RequireAuth><Cart /></RequireAuth>} />

        <Route path='/accounts/sign-up' element={<SignUp />} />
        <Route path='/accounts/sign-in' element={<SignIn />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
