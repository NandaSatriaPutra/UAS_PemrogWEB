import React, { Component } from 'react';
import axios from 'axios'
import qs from 'querystring'
import { Table, Button, Container, NavLink, Alert } from 'reactstrap'
import { Link } from 'react-router-dom'

const api = 'http://localhost:3001'

class ListComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tb_supplier: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount() {
        axios.get(api + '/tampilsupplier').then(res => {
            this.setState({
                tb_supplier: res.data.values
            })
        })
    }

    Deletesupplier = (id_supplier) => {
        const {tb_supplier} = this.state
        const data = qs.stringify({
            id_supplier: id_supplier
        })

        axios.delete(api+'/hapussupplier', 
            {
                data: data,
                headers: {'Content-type': 'application/x-www-form-urlencoded'}
            }
        ).then(json=>{
            if(json.data.status ===200){
                this.setState({
                    response: json.data.values,
                    tb_supplier: tb_supplier.filter(tb_supplier => tb_supplier.id_supplier!== id_supplier),
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
                <h2>Data Supplier</h2>
                <Alert color="success" style={{display: this.state.display}}>
                    {this.state.response}
                </Alert>
                <Link to="/supplier/tambahsupplier"><Button color="success">Tambah Data</Button></Link>
                <hr />
                <Table className="table-bordered">
                    <thead>
                        <tr>
                            <th>Nama Supplier</th>
                            <th>No telp</th>
                            <th>Alamat</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tb_supplier.map(tb_supplier =>
                            <tr key={tb_supplier.id_supplier}>
                                <td>{tb_supplier.nama_supplier}</td>
                                <td>{tb_supplier.no_telp}</td>
                                <td>{tb_supplier.alamat}</td>
                                <td>
                                    <Link to=
                                        {
                                            {
                                                pathname: '/supplier/edit',
                                                state: {
                                                    id_supplier: tb_supplier.id_supplier,
                                                    nama_supplier: tb_supplier.nama_supplier,
                                                    no_telp: tb_supplier.no_telp,
                                                    alamat: tb_supplier.alamat
                                                }
                                            }
                                        }>
                                            <Button>Edit</Button>
                                    </Link>
                                        <spam> </spam>
                                        <Button onClick={()=>this.Deletesupplier(tb_supplier.id_supplier)} color="danger">Hapus</Button>
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

export default ListComp;