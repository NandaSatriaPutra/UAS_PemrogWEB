import React, { Component } from 'react';
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class ListBarangComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tb_barang: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount() {
        axios.get(api + '/tampilbarang').then(res => {
            this.setState({
                tb_barang: res.data.values
            })
        })
    }

    Deletebarang = (id_barang) => {
        const {tb_barang} = this.state
        const data = qs.stringify({
            id_barang: id_barang
        })

        axios.delete(api+'/hapusbarang', 
            {
                data: data,
                headers: {'Content-type': 'application/x-www-form-urlencoded'}
            }
        ).then(json=>{
            if(json.data.status ===200){
                this.setState({
                    response: json.data.values,
                    tb_barang: tb_barang.filter(tb_barang => tb_barang.id_barang!== id_barang),
                    display: 'block'
                })
                //this.props.history.push('/supplier')
            }else {
                this.setState({
                    response: json.data.values,
                    display: 'block'
                })
                //this.props.history.push('/supplier')
            }
        })
    }


    render() {
        return (
            <Container>
                <h2>Data Barang</h2>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Link to="/barang/tambahbarang"><Button color="success">Tambah Data</Button></Link>
                <hr />
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Nama Barang</th>
                            <th>Stok</th>
                            <th>Harga Barang</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tb_barang.map(tb_barang =>
                            <tr key={tb_barang.id_barang}>
                                <td>{tb_barang.nama_barang}</td>
                                <td>{tb_barang.stok}</td>
                                <td>{tb_barang.harga_barang}</td>
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: '/barang/editbarang',
                                                state: {
                                                    id_barang: tb_barang.id_barang,
                                                    nama_barang: tb_barang.nama_barang,
                                                    stok: tb_barang.stok,
                                                    harga_barang: tb_barang.harga_barang
                                                }
                                            }
                                        }>
                                            <Button>Edit</Button>
                                    </Link>
                                        <spam> </spam>
                                        <Button onClick={()=>this.Deletebarang(tb_barang.id_barang)} color="danger">Hapus</Button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <Link to="/homepage"><Button>Kembali</Button></Link>
            </Container>

        )
    }
}

export default ListBarangComp;