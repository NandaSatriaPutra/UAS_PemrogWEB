import React, {Component} from 'react';
import axios from 'axios'
import qs from 'querystring'
import {Link} from 'react-router-dom'
import {Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button} from 'reactstrap'

const api = 'http://localhost:3001'

class EditComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id_supplier: this.props.location.state.id_supplier,
            nama_supplier: this.props.location.state.nama_supplier,
            no_telp: this.props.location.state.no_telp,
            alamat: this.props.location.state.alamat,
            response: '',
            display: 'none'
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    ubahsupplier = (id_supplier) => {
        const data = qs.stringify({
            id_supplier: id_supplier,
            nama_supplier: this.state.nama_supplier,
            no_telp: this.state.no_telp,
            alamat: this.state.alamat
        });

        axios.put(api+ '/ubahsupplier', data)
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
                    <Label>Nama Supplier</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="nama_supplier" value={this.state.nama_supplier} onChange={this.handleChange} placeholder="Masukan Nama Supplier"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>No Telp</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="no_telp" value={this.state.no_telp} onChange={this.handleChange} placeholder="Masukan No Telp"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Alamat</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="alamat" value={this.state.alamat} onChange={this.handleChange} placeholder="Masukan Alamat"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    
                    <FormGroup>
                        <Row>
                            <Col>
                            <Button type="button" onClick={()=>this.ubahsupplier(this.state.id_supplier)}>Update</Button>
                            </Col>
                            <Col>
                            <Link to="/supplier"><Button color="warning">kembali halaman supllier</Button></Link>
                            </Col>
                        </Row>
                    </FormGroup>
                    </Col>
                </Form>
            </Container>
        )

    }
}

export default EditComp;