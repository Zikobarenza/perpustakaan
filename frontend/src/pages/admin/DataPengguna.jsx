import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Button } from "react-bootstrap";

const DataPengguna = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch user data from the server
        axios.get('http://localhost:8081/api/users')
            .then((response) => {
                setUsers(response.data); // Assuming response.data is an array of user objects
            })
            .catch((error) => {
                console.error('Error fetching user data:', error);
            });
    }, []);

    const handleDelete = (userId) => {
        axios.delete(`http://localhost:8081/api/users/${userId}`)
            .then((response) => {
                if (response.data.message === "Pengguna berhasil dihapus") {
                    const updatedUsers = users.filter((user) => user.id !== userId);
                    setUsers(updatedUsers);
                } else {
                    console.error('Gagal menghapus pengguna');
                }
            })
            .catch((error) => {
                console.error('Error deleting user:', error);
            });
    };

    return (
        <div>
            <h1>Data Pengguna</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleDelete(user.id)}>
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

export default DataPengguna;

// Komponen lain, impor, dan logika lainnya di sini
