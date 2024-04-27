import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { IndividualProduct } from '../pages/IndividualProduct'
import { Cart } from '../pages/Cart'
import { RequireAuth } from '../components/RequireAuth'
import { SignUp } from '../pages/SignUp'
import { SignIn } from '../pages/SignIn'
import { NotFound } from '../pages/NotFound'
import { PrivacyPolicy } from '../pages/PrivacyPolicy'
import { Contact } from '../pages/Contact'
import { WishList } from '../pages/WishList'
import { About } from '../pages/About'
import { Checkout } from '../pages/Checkout'

export const Router = () => {
  return (
    <Routes>
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/store/product/:id' element={<IndividualProduct />} />

        <Route path='/store/cart' element={<RequireAuth><Cart /></RequireAuth>} />
        <Route path='/store/wish-list' element={<WishList />} />

        <Route path='/accounts/sign-up' element={<SignUp />} />
        <Route path='/accounts/sign-in' element={<SignIn />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path='/checkout' element={<Checkout />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
