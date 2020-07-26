import React, { useReducer, useContext, useState } from 'react'
import { Row, Container, Col, Card, CardImg, Button } from 'reactstrap'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom'





function DetailProdukComp(props) {
    const {
        buttonLabel,
        className
    } = props;
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <Container>
            <Link to="/daftarproduk"><Button>Kembali</Button></Link>

            <br />
            <Row>
                <Col>
                    <Col xs="6">

                        <CardImg top width="100%" src={props.location.state.src} alt="Card image cap" />

                    </Col>
                </Col>
                <Col xs="6">
                    <h3>{props.location.state.jenis}</h3>
                    <p>{props.location.state.penjual}</p>
                    <h6>Deskripsi :</h6>

                    <p>{props.location.state.deskripsi}</p>
                    <Button>{props.location.state.harga}</Button>
                    <hr />
                    <Button color="danger" onClick={toggle}>{buttonLabel}Beli</Button>{' '}
                    <Link to="/daftarproduk"><Button>Kembali</Button></Link>

                    <Modal isOpen={modal} toggle={toggle} className={className}>
                        <ModalHeader toggle={toggle}>Pembayaran</ModalHeader>
                        <ModalBody>
                            <p>Judul</p>
                            <h3>{props.location.state.jenis}</h3>
                            <br/>
                            <p>Harga Buku</p>
                            <h3>{props.location.state.harga}</h3>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={toggle}>Lanjutkan</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Batal</Button>
                        </ModalFooter>
                    </Modal>
                </Col>
            </Row>
        </Container>
    )
}

export default DetailProdukComp