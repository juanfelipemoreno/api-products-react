import React, { useState } from 'react';
import { NavLink,useNavigate } from "react-router";
import { Navigate } from 'react-router-dom'; 
import {Button,Card,ListGroup} from 'react-bootstrap';

function CardComp({ data= []}) {
    const navigate = useNavigate();

    const handleDetail = (data) => {
        navigate(`/products/${data.id}`, { state: { data}})
    };
    return (
        <Card style={{ width: '300px', Height: '400px', minHeight: '400px', display: 'inline-table'}} 
            className='shadow-lg card-hover'>
            <Card.Img 
                variant="top"
                className ="object-fit-contain" 
                src={data.image} 
                alt={data.title}
                style={{ maxHeight: '200px', objectFit: 'cover', 'padding' : '15px'}}
            />
            <Card.Body>
                <Card.Title className="truncate-text title"><b>{data.title}</b></Card.Title>
                <Card.Text className="truncate-text">{data.description} </Card.Text>
                <ListGroup className="list-group-flush fs-4">
                    <ListGroup.Item>${data.price}</ListGroup.Item>
                </ListGroup>
                <Button variant="primary" onClick={()=> handleDetail(data)}>
                    Ver Detalles
                </Button>
            </Card.Body>
        </Card>
    );
}

export default CardComp;