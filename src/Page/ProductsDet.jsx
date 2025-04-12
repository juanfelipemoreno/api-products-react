import { useEffect, useState } from "react";
import { NavLink, useNavigate} from "react-router";
import { useParams,useLocation  } from 'react-router-dom';
import {Modal,Button,Container,Row,Col,FormControl,InputGroup} from 'react-bootstrap';
import NavbarComp from "../Components/Navbar/Navbar";

export default function ProductsDet ({productsShop,  setProductsShop, error, setError}) {

    const location = useLocation();
    const data = location.state?.data;
    const navigate = useNavigate();
    
    const [count, setCount] = useState(1);

    useEffect(() => {
        if (data === undefined) {
            navigate('/products');
        }
    }, [data]);

    const handleIncrease = () => {
        const newCount = count + 1;
        setCount(newCount);
    };

    const handleDecrease = () => {
        if (count > 1) {
        const newCount = count - 1;
        setCount(newCount);
        }
    };

    const addProductShop = () => {
        console.log("AGREGANDO ")
        setError({ message: 'Producto Agregado', type: 'success' });
        
        const productDet = {
            id : data.id,
            detail : data    
        }
        
        setProductsShop(prev => {
            const valorActual = prev.find(p => p.id === productDet.id);
            if (valorActual ){
                return prev.map(p =>
                p.id === productDet.id ? { ...p, count: p.count + count } : p
                );
            }
            return [...prev, { ...productDet, count: count }];
        }) 
        
        const timer = setTimeout(() => {
            setError('');
        }, 3000);

        return () => clearTimeout(timer);
    };

    if (!data) {
        return <div>Cargando...</div>; // O un mensaje si `data` no está disponible.
    }

    return(
        
        <div>
            <NavbarComp/>
            <Modal show={true}
                style={{marginTop: '0'}}
                size="lg" aria-labelledby="contained-modal-title-vcenter"
                centered
            >
            <Modal.Header className="">
                <Modal.Title className="px-1 d-flex gap-2" id="contained-modal-title-vcenter text-uppercase">
                    <NavLink to="/products" className="btn btn-secondary text-decoration-none gap-5" >
                        <i className="bi bi-arrow-bar-left"></i>
                        Atras
                    </NavLink>
                    <b>{data.category}</b>
                </Modal.Title>
            </Modal.Header>
                    <Modal.Body>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 d-flex align-items-center imgDetailCard">
                                <img 
                                src={data.image} 
                                alt={data.title} 
                                className="img-fluid"
                                />
                            </div>
                            <Modal.Body className="col-md-6 p-3">
                                <Container>
                                    <Row>
                                        <Col className="fs-2"><h2>{data.title}</h2></Col>
                                    </Row>
                                    <Row>
                                        <div style={{textAlign : 'justify', fontFamily : 'Arial, sans-serif'}}>
                                            <p  >{data.description}</p>
                                            <div className="fs-2">
                                                <strong>Valor: {data.price}</strong>
                                            </div>
                                            <hr className="my-2" />
                                            <div className="d-flex gap-3 p-2">
                                                <InputGroup style={{ maxWidth: '150px' }}>
                                                    <Button variant="outline-secondary" onClick={handleDecrease}>-</Button>
                                                    <FormControl value={count} readOnly className="text-center" />
                                                    <Button variant="outline-secondary" onClick={handleIncrease}>+</Button>
                                                </InputGroup>
                                                
                                                <Button variant="secondary" onClick={addProductShop}>Agregar</Button>
                                            </div>
                                        </div>
                                    </Row>
                                </Container>
                            </Modal.Body>
                            
                        </div>
                    </div>
                    </Modal.Body>
                </Modal>
            </div>
  
        
    )
}