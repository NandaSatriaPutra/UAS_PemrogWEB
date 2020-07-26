import React, {Component} from 'react';
import axios from 'axios'
import qs from 'querystring'
import {Link} from 'react-router-dom'
import {Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button} from 'reactstrap'

const api = 'http://localhost:3001'

class EditBarangComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_barang: this.props.location.state.id_barang,
            nama_barang: this.props.location.state.nama_barang,
            stok: this.props.location.state.stok,
            harga_barang: this.props.location.state.harga_barang,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    ubahbarang = (id_barang) => {
        const data = qs.stringify({
            id_barang: id_barang,
            nama_barang: this.state.nama_barang,
            stok: this.state.stok,
            harga_barang: this.state.harga_barang
        });

        axios.put(api+ '/ubahbarang', data)
        .then(json => {
            if(json === 200){
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
            }
        })
    }


    render() {
        return (
            <Container>
                <h4>Form Ubah Data</h4>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                    <Label>Nama Barang</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="nama_barang" value={this.state.nama_barang} onChange={this.handleChange} placeholder="Masukan Nama Barang"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Stok Barang</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="stok" value={this.state.stok} onChange={this.handleChange} placeholder="Masukan Stok Barang"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Harga Barang</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="harga_barang" value={this.state.harga_barang} onChange={this.handleChange} placeholder="Masukan Harga Barang"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    
                    <FormGroup>
                        <Row>
                            <Col>
                            <Button type="button" onClick={()=>this.ubahbarang(this.state.id_barang)}>Update</Button>
                            </Col>
                            <Col>
                            <Link to="/barang"><Button color="warning">kembali halaman barang</Button></Link>
                            </Col>
                        </Row>
                    </FormGroup>
                    </Col>
                </Form>
            </Container>
        )

    }
}

export default EditBarangComp;