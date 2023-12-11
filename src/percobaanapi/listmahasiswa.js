import { React, useEffect, useState } from "react";
import axios from "axios";
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import { Modal, Button, Form } from "react-bootstrap";

function ListMahasiswa() {
  const [id, setId] = useState("");
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [alamat, setAlamat] = useState("");
  const [show, setShow] = useState(false);

  const UpdateDataMahasiswa = async (event) => {
    event.preventDefault();
    try {
      const putData = await axios.put(
        `http://localhost:8080/update/mahasiswa/${id}`,
        {
          nama: nama,
          nim: nim,
          alamat: alamat,
        }
      );
      alert(putData.data.messages);
      window.location.reload();
    } catch (error) {
      alert("Data Gagal diubah");
    }
  };
  const showModal = (data) => {
    setId(data.id);
    setNama(data.nama);
    setNim(data.nim);
    setAlamat(data.alamat);
    setShow(true);
  };
  const closeModal = () => {
    setId("");
    setNama("");
    setNim("");
    setAlamat("");
    setShow(false);
  };

  // Mendefinisikan state untuk menampilkan atau menyembunyikan modal penghapusan
  const [showDelete, setShowDelete] = useState(false); 
  const showModalDelete = (data) => {
    // Fungsi untuk menampilkan modal penghapusan dengan data mahasiswa yang dipilih
    setId(data.id); // Mengatur ID mahasiswa
    setNama(data.nama); // Mengatur nama mahasiswa
    setNim(data.nim); // Mengatur NIM mahasiswa
    setShowDelete(true); // Menampilkan modal penghapusan
  };

  const closeModalDelete = () => {
    // Fungsi untuk menutup modal penghapusan dan mengatur kembali nilai ID, nama, dan NIM
    setId(""); // Mengatur kembali ID menjadi kosong
    setNama(""); // Mengatur kembali nama menjadi kosong
    setNim(""); // Mengatur kembali NIM menjadi kosong
    setShowDelete(false); // Menyembunyikan modal penghapusan
  };

  const DeleteDataMahasiswa = async (event) => {
    // Fungsi untuk menghapus data mahasiswa
    event.preventDefault(); // Mencegah perilaku bawaan dari event
    try {
      const deleteData = await axios.delete(
        // Mengirim permintaan penghapusan ke URL yang sesuai dengan ID mahasiswa
        `http://localhost:8080/delete/mahasiswa/${id}`
      );
      alert(deleteData.data.messages); // Menampilkan pesan yang dikembalikan dalam sebuah alert
      window.location.reload(); // Memuat ulang halaman
    } catch (error) {
      alert("Data Gagal dihapus"); // Menampilkan pesan kesalahan dalam sebuah alert
    }
  };

  const [data_mahasiswa, setDataMahasiswa] = useState([]);

  const GetDataMahasiswa = async () => {
    const getData = await axios.get(`http://localhost:8080/mahasiswa/`);
    setDataMahasiswa(getData.data.data);
    console.log(getData);
  };

  useEffect(() => {
    GetDataMahasiswa();
  }, []);

  return (
    <div className="body-flex">
      <div className="flex">
        <div className="col-10 p-5 mx-auto">
          <h1 className="py-1 text-center">Data Mahasiswa</h1>

          <Modal show={show} onHide={closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>Form Update Data</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={UpdateDataMahasiswa}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                ></Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setNama(e.target.value)}
                    value={nama}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>NIM</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setNim(e.target.value)}
                    value={nim}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Alamat</Form.Label>
                  <Form.Control
                    type="text"
                    autoFocus
                    onChange={(e) => setAlamat(e.target.value)}
                    value={alamat}
                  />
                </Form.Group>
                <Button type="submit" color="primary" className="px-4">
                  Update
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={closeModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={showDelete} onHide={closeModalDelete}>
            <Modal.Header closeButton>
              <Modal.Title>Apakah Anda yakin menghapus data ini?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="col-sm-12">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Detail Data</h5>
                    <div className="row">
                      <p className="col-4 card-text">Nama Mahasiswa</p>
                      <p className="col-6 card-text">: {nama}</p>
                    </div>
                    <div className="row">
                      <p className="col-4 card-text">NIM</p>
                      <p className="col-6 card-text">: {nim}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button
                type="submit"
                color="primary"
                className="px-4"
                onClick={DeleteDataMahasiswa}>Hapus Data
              </Button>
              <Button variant="danger" onClick={closeModalDelete}>Batal
              </Button>
            </Modal.Footer>
          </Modal>

          <CCard className="mb-4">
            <CCardHeader>
              <strong>Tabel Mahasiswa</strong>
            </CCardHeader>
            <CCardBody>
              <p className="text-medium-emphasis small">
                Tabel ini menampilkan seluruh data mahasiswa yang masih aktif
              </p>
              <div className="py-3">
                <CButton
                  className="btn btn-success text-white me-2"
                  href="/insertmahasiswa"
                >
                  Tambah Data
                </CButton>
              </div>
              <CTable striped>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col">Nama</CTableHeaderCell>
                    <CTableHeaderCell scope="col">NIM</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Alamat</CTableHeaderCell>
                    <CTableHeaderCell scope="col">Action</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {data_mahasiswa.map((item, index) => {
                    return (
                      <CTableRow key={index}>
                        <CTableHeaderCell> {item.nama} </CTableHeaderCell>
                        <CTableDataCell> {item.nim} </CTableDataCell>
                        <CTableDataCell> {item.alamat} </CTableDataCell>
                        <CTableDataCell>
                          <CButton
                            className="btn btn-primary text-white me-2"
                            onClick={() => showModal(item)}
                            showModal
                            dengan
                            data
                            item
                          >
                            Edit
                          </CButton>
                          <CButton
                            className="btn btn-danger text-white"
                            onClick={() => showModalDelete(item)}>
                            Hapus
                          </CButton>
                        </CTableDataCell>
                      </CTableRow>
                    );
                  })}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </div>
      </div>
    </div>
  );
}

export default ListMahasiswa;