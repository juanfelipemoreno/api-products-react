import {UseContext, React,useState} from 'react'
import {HashRouter as Router,BrowserRouter,Routes, Route} from 'react-router-dom'
import Products from '../Page/Products'
import ProductsDet from '../Page/ProductsDet'
import { AlertMessage } from '../Components/Alerts/ErrorComp'

export default function AppRoutes() {

    const [productsShop, setProductsShop] = useState([])
    const [error, setError] = useState({ message: '', type: '' })

    return (
        <Router>
            { error.message ? (<AlertMessage type={error.type} message={error.message} />) : (<div></div>)}
            <Routes>
                <Route path='/' element={<Products productsShop={productsShop} setProductsShop={setProductsShop} error={error} setError={setError}/>}/>
                <Route path='/products' element={<Products productsShop={productsShop} setProductsShop={setProductsShop}error={error} setError={setError}/>}/>
                <Route path='/products/:id' element={<ProductsDet productsShop={productsShop} setProductsShop={setProductsShop} error={error} setError={setError}/>}/>
                <Route path="*" element={<div><h1>404 NOT FOUND</h1></div>} />
            </Routes>
        </Router>
    )
}