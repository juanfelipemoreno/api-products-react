import { useState,useEffect } from "react";
import { Button,Container,Form,Nav,Navbar,ListGroup,OverlayTrigger,Popover,Card} from 'react-bootstrap';

const NavbarComp = ({productsShop, setProductsShop}) => {

    const [modeBlack, setModeBlack] = useState('dark');
    const [viewChangeTheme, setViewChangeTheme] = useState(true);
    
    const handleMode = (e) => {
      const mode = modeBlack === "dark" ? "light" : "dark";
      const modeBody = mode === "dark" ? "white" : "black";
      setModeBlack(mode)  

      setViewChangeTheme(!viewChangeTheme)
      document.body.style.backgroundColor = modeBody;
    };

    const handleRemoveProduct = (id) => {
      const updatedProducts = productsShop.filter(product => product.id !== id);
      setProductsShop(updatedProducts);
    };
    console.log(productsShop)
    return (
        <Navbar bg={modeBlack} variant={modeBlack} expand="lg" fixed="top" 
          style={{zIndex : '1060'}}  
        >
          <Container fluid>
            <Navbar.Brand href="#">El universo</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">Inicio</Nav.Link>
                <Nav.Link href="#action2">Productos</Nav.Link>
                <Nav.Link href="#action2">Detalle Productos</Nav.Link>
              </Nav>
              <Form className="d-flex px-4">
                <Navbar.Collapse className="justify-content-end gap-5">
                  <div>
                    <OverlayTrigger
                      trigger="click"
                        key='bottom'
                        placement='auto-start'
                        overlay={
                          <Popover id={`popover-positioned-bottom`}>
                            <Popover.Header className="text-black" as="h3">Carrito</Popover.Header>
                            <Popover.Body>
                            {
                              (productsShop && productsShop.length > 0) ? (
                                <>
                                {
                                  productsShop.map((data)=>(
                                      <Card style={{ width: '100%', maxWidth: '300px'}} key={data.id}>
                                        <div className="d-flex align-items-center">
                                          <Card.Img 
                                            variant="left" 
                                            src={data.detail.image} 
                                            style={{ width: '50px', height: '50px', objectFit: 'contain', marginInline: '10px' }}
                                          />
                                          <div className="d-flex flex-column">
                                              <Card.Title className="truncate-text title fs-6">{data.detail.title}</Card.Title>
                                            
                                              <Card.Body className="fs-6 d-flex flex-row-reverse px-2 p-0 gap-3">
                                                <Card.Text>${data.detail.price * data.count}</Card.Text>
                                                <strong>Precio:</strong>
                                                <Card.Text>{data.count}</Card.Text>
                                              </Card.Body>
                                              <Button 
                                                variant="danger" 
                                                size="sm"
                                                onClick={() => handleRemoveProduct(data.id)}
                                                className="mx-2 mb-2"
                                              >
                                                Eliminar
                                              </Button>
                                            
                                          </div>
                                        </div>
                                      </Card>
                                  ))
                                }
                                  <hr />
                                  <div className="text-end fw-bold fs-5">
                                    Total: ${productsShop.reduce((acc, curr) => acc + curr.detail.price * curr.count, 0).toFixed(2)}
                                  </div>
                                </>
                                ) : (
                                <div>No hay productos</div>
                              )
                              
                            }
                            </Popover.Body>
                          </Popover>
                        }
                      >
                        <div className="fs-2" style={{color : (modeBlack == 'dark' ? 'white' : 'black')}}>
                          <i className="bi bi-cart"></i>
                        </div>
                        
                      </OverlayTrigger>
                    </div>
                    <div className="vr"></div>
                    {viewChangeTheme ? (
                      <>
                        <div  className="" onClick={handleMode}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sun-fill" viewBox="0 0 16 16">
                            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708"/>
                          </svg>
                        </div>
                      </>    
                    ) : (
                      <>
                        <div className="text-bg-light" onClick={handleMode} >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-stars-fill" viewBox="0 0 16 16">
                            <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278"/>
                            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z"/>
                          </svg> 
                        </div>
                      </>
                    )}
                  
                </Navbar.Collapse>
              </Form>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavbarComp;