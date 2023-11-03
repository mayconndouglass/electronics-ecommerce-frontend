import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { IndividualProduct } from '../pages/IndividualProduct'
import { TestPage } from '../pages/TestPage'

export const Router = () => {
  return (
    <Routes>
      <Route>
        <Route path='/' element={<Home />} />
        <Route path='/loja/product/:id' element={<IndividualProduct />} />
        <Route path='/testPage' element={<TestPage />} />
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}
