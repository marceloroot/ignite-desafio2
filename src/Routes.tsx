import {Routes,Route} from 'react-router-dom'
import { OrderConfirmedPage } from './pages/OrderConfirmed'
import { CompleteOrderPage } from './pages/CompleteOrder'
import { HomePage } from './pages/Home'
import {DefaultLayout} from './layouts/DefaultLayout'
export function Router(){
    return(
        <Routes>
            <Route path='/'  element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/completeOrder" element={<CompleteOrderPage />} />
            <Route path="/orderConfirmed" element={<OrderConfirmedPage />} />
            </Route>
        </Routes>
    )
}