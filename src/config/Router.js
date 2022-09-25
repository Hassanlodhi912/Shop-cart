import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from '../components/about/About'
import Cart from '../components/cart/Cart'
import Contact from '../components/contact/Contact'
import Product from '../components/product/Product'
import Home from '../screen/Home/Home'
import Intro from '../screen/intro/Intro'
import ProductDetail from '../components/productDeatail/ProductDeatail'
import Error from '../components/eroor/Error'
import Header from '../components/header/Header'
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Intro />} />

            </Routes>
            <Header />

            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Product" element={<Product />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Cart" element={<Cart />} />
                <Route path="/ProductDetail/:id" element={<ProductDetail />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Router;
