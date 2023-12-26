import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";

const DataPinjam = () => {
    const [peminjaman, setPeminjaman] = useState([]);

    useEffect(() => {
        fetchPeminjaman();
    }, []);

    const fetchPeminjaman = () => {
        axios.get('http://localhost:8081/api/pinjam')
            .then((response) => {
                setPeminjaman(response.data);
            })
            .catch((error) => {
                console.error('Error fetching peminjaman data:', error);
            });
    };

    const handleDelete = (peminjamanId) => {
        axios.delete(`http://localhost:8081/api/pinjam/${peminjamanId}`)
            .then((response) => {
                if (response.data.message === "Peminjaman berhasil dihapus") {
                    const updatedPeminjaman = peminjaman.filter((item) => item.id !== peminjamanId);
                    setPeminjaman(updatedPeminjaman);
                } else {
                    console.error('Gagal menghapus peminjaman');
                }
            })
            .catch((error) => {
                console.error('Error deleting peminjaman:', error);
            });
    };

    return (
        <div>
            <h1>Data Peminjaman</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nama Anggota</th>
                        <th>Judul Buku</th>
                        <th>Tanggal Peminjaman</th>
                        <th>Kondisi Buku</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {peminjaman.map((pinjam) => (
                        <tr key={pinjam.id}>
                            <td>{pinjam.id}</td>
                            <td>{pinjam.name}</td>
                            <td>{pinjam.judul}</td>
                            <td>{pinjam.tanggalpeminjaman}</td>
                            <td>{pinjam.kondisibuku}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(pinjam.id)}>
                                    Hapus
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default DataPinjam;
