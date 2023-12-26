import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";

const DataBuku = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch book data from the server
        axios.get('http://localhost:8081/api/books')
            .then((response) => {
                setBooks(response.data); // Mengatur state books dengan respons data buku dari server
            })
            .catch((error) => {
                console.error('Error fetching book data:', error);
            });
    }, []);

    const handleDelete = (bukuId) => {
        axios.delete(`http://localhost:8081/api/books/${bukuId}`)
            .then((response) => {
                if (response.data.message === "Buku berhasil dihapus") {
                    const updatedBooks = books.filter((buku) => buku.id !== bukuId);
                    setBooks(updatedBooks);
                } else {
                    console.error('Gagal menghapus buku');
                }
            })
            .catch((error) => {
                console.error('Error deleting book:', error);
            });
    };

    return (
        <div>
            <h1>Data Buku</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Judul</th>
                        <th>Pengarang</th>
                        <th>Penerbit</th>
                        <th>Jumlah</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((buku) => (
                        <tr key={buku.id}>
                            <td>{buku.id}</td>
                            <td>{buku.judul}</td>
                            <td>{buku.pengarang}</td>
                            <td>{buku.penerbit}</td>
                            <td>{buku.jumlah}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(buku.id)}>
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default DataBuku;
