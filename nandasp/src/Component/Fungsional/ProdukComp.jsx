import React, { useContext, createContext, useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Card, Row, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button,  Container } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom'




function ProdukComp  (props) {
    
    return (
        <div>
            
              
                    <Card>
                        <CardImg top width="100%" src={props.src} alt=""Card image cap/>
                        <CardBody>
                            <h4><CardTitle>{props.jenis}</CardTitle></h4>
                            <p><CardSubtitle>{props.penjual}</CardSubtitle></p>
                            <Button color="success">{props.harga}</Button>
                            <Button color="white"><Link to = {
                                {
                                    pathname : `/detailproduk/${props.id}`,
                                    state : {
                                        jenis: props.jenis,
                                        src: props.src,
                                        penjual: props.penjual,
                                        harga: props.harga,
                                        deskripsi: props.deskripsi
                                    }
                                }
                            }>Detail</Link></Button>
                            
                        </CardBody>
                    </Card>
           

        </div>
    )
}

export default ProdukComp