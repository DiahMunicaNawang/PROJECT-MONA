import React, { useState } from "react";
import axios from 'axios';
import {
    CCard,
} from '@coreui/react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function InsertMahasiswa() {
    const [nama, setNama] = useState("");
    const [nim, setNim] = useState("");
    const [alamat, setAlamat] = useState("");

    const handleSubmit = async (e) => {
        if (nama === "" || nim === "" || alamat === "") {
            alert("Data Gagal ditambahkan, field tidak boleh ada yang kosong");
        } else {
            e.preventDefault();
            await axios.post('http://localhost:8080/create/mahasiswa', {
                nama: nama,
                nim: nim,
                alamat: alamat,
            });
            window.location.href = '/listmahasiswa';
        }
    };

    return (
        <div className='body-flex'>
            <div className="flex">
                <div className='col-10 p-5 mx-auto'>
                    <h1 className="py-1 text-center">
                        Form Tambah Data Mahasiswa
                    </h1>
                    <CCard className="mb-4 p-5">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Nama Mahasiswa</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nama"
                                    autoFocus
                                    value={nama}
                                    onChange={(e) => setNama(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>NIM</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="nim"
                                    value={nim}
                                    onChange={(e) => setNim(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Alamat</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="alamat"
                                    value={alamat}
                                    onChange={(e) => setAlamat(e.target.value)}
                                />
                            </Form.Group>
                            <Button type='submit' className="col-12 px-4 btn btn-success">
                                Submit
                            </Button>
                        </Form>
                    </CCard>
                </div>
            </div>
        </div>
    );
}

export default InsertMahasiswa;