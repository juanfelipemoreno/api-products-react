import { useEffect, useState } from "react";
import axios from "axios"
import NavbarComp from "../Components/Navbar/Navbar";
import { AlertMessage } from '../Components/Alerts/ErrorComp'
import LoadComp from "../Components/LoadComp";
import {Row,Col,Container} from 'react-bootstrap';
import CardComp from "../Components/CardComp";


const Products = ({productsShop, setProductsShop, error , setError}) => {

    const [loading, setLoading] = useState(true)
    
    const [products, setProducts] = useState([])
    

    const getDataApi = async() => {
        try{
            const respons = await axios.get('https://fakestoreapi.com/products')
            setError('');
            setProducts(respons.data)

        } catch (error){
            setLoading(false);
            setError({ message: error.message, type: 'danger' });
            console.error('Error al obtener los datos:', error);
        }finally{
            setLoading(false);
        }
    }
    useEffect(()=> {
        setLoading(true)
        getDataApi()
    },[])
        return(
            <>
                <NavbarComp productsShop={productsShop} setProductsShop={setProductsShop}/>
                { loading ? (<div className="spinner"><LoadComp /></div>) : (
                <>
                <Container className="p-5 mt-5">
                    <Row xs={1} md={4} className="g-4">
                        {Array.from({ length: 1 }).map((_, idx) => (
                            Array.isArray(products) && products.length > 0 && products.map((data, index)=>(
                                <Col key={index} md={4} className="custom-col">
                                    <CardComp data = {data}/>
                                </Col>
                            ))
                        ))}    
                    </Row>
                </Container>
             </>
            )}
        </>
    )
}

export default Products;