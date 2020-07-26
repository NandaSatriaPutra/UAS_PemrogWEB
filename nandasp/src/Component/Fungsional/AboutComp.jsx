import React from 'react'
import { Jumbotron, Button,Container, Row, Col } from 'reactstrap';
import CardComp from './CardComp';
import { Link } from 'react-router-dom';

function AboutComp() {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">WebStore</h1>
                <p className="lead">Alamat   : Griya indah Sumampir, Purwokerto </p>
                <p className="lead">No Telp  : 08123111921 </p>
                <p className="lead">Web Store Merupakan tempat Belanja Online Untuk semua kalangan .
                </p>
                
                <hr className="my-2" />
                <p className="lead">

                </p>
                <pre></pre><Link to ="/homepage"><Button>Kembali</Button></Link>
                
            </Jumbotron>
            
            <Container>
                <Row>
                    <Col><CardComp id="1" Nama="Nanda Satria Putra" Alamat="Jalan Asisten sayid 45 RT 02/01 Nusawungu "/></Col>

                </Row>
                
            </Container>
            
        </div>
    )
}

export default AboutComp 