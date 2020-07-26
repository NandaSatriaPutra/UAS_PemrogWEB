import React, {Component} from 'react';
import axios from 'axios'
import {Container, Col, Row, Form, FormGroup, Alert, Label, Input, Button} from 'reactstrap'
import {Link} from 'react-router-dom'

const api = 'http://localhost:3001'

class RegisterComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            role: '',
            tanggal_daftar: '',
            response: '',
            display: 'none'
            
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    Addregister = () => {
        axios.post(api+ '/auth/api/v1/register', {
            username: this.state.username,
            email: this.state.password,
            role: this.state.role,
            tanggal_daftar: this.state.tanggal_daftar,
        }).then(json => {
            if(json.data.status === 200){
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
                <h4>Register</h4>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Form className="form">
                    <Col>
                    <Label>Username</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Masukan Username"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Email</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Masukan email"/>
                            </Col>
                        </Row>
                    </FormGroup>
                    <Label>Password</Label>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Input type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Masukan Password"/>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Button color ="success" type="button" onClick={this.Addregister}>Submit</Button>
                            </Col>
                            <Col>
                            <Link to="/"><Button color="warning">kembali halaman login</Button></Link>
                            </Col>
                        </Row>
                    </FormGroup>
                    </Col>
                </Form>
            </Container>
        )
    }
}

export default RegisterComp;