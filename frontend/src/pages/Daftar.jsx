import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Helmet from "react-helmet";

export default function Daftar() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [failed, setFailed] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:8081/api/daftar', { email, password, name, username })
            .then((res) => {
                if (res.data === "Berhasil mendaftar") {
                    navigate("/masuk"); // Redirect to login page on successful registration
                } else {
                    setFailed("Gagal mendaftar"); // Update state to show registration failure
                }
            })
            .catch((error) => {
                console.error("Error:", error);
                setFailed("Gagal mendaftar"); // Update state to show registration failure
            });
    };

    return (
        <main id="daftar">
            <Helmet>
                <title>Daftar | Bijakcuan.</title>
            </Helmet>
            <div  style={{ display: 'flex', justifyContent: 'space-between' ,marginTop:"-100px" }}>
                <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", backgroundColor: 'blue', width: '40%' }}>
                    <img
                        src="/assets/logo.jpg"
                        alt="Logo BijakCuan"
                        style={{
                            borderRadius: "20rem",
                            width: "200px",
                        }}
                        className=""
                    />
                </div>
                <div style={{ width: '60%', backgroundColor: "#f0f0f0" }}>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: '30px auto',
                        width: '70%'
                    }}>
                        <div className="card-body" style={{ width: "28rem" }} >
                            <h3 className="mb-1 fw-bold">Daftar</h3>
                            {failed && (
                                <div id="wrong" className="alert alert-danger">
                                    <p>{failed}</p>
                                </div>
                            )}
                            <div className="d-flex flex-column gap-4">
                                <form onSubmit={handleSubmit} className="form-outline d-flex flex-column gap-2">
                                    <br />
                                    <p>Nama Lengkap</p>
                                    <input
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="form-control"
                                        placeholder="Nama (Maks. 50 Karakter)"
                                        required
                                    />
                                    <br />
                                    <p>Username</p>
                                    <input
                                        onChange={(e) => setUsername(e.target.value)}
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="form-control"
                                        placeholder="Username"
                                        required
                                    />
                                    <br />
                                    <p>Alamat Email</p>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="form-control"
                                        placeholder="Alamat Email"
                                        required
                                    />
                                    <br />
                                    <p>Password</p>
                                    <input
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="password"
                                        name="password"
                                        id="password"
                                        className="form-control"
                                        placeholder="Password"
                                        required
                                    />
                                    <br />
                                    <button type="submit" className="btn btn-primary mt-3">
                                        Daftar
                                    </button>
                                </form>
                                <p className="text-center" style={{ marginBottom: "-20px" }}>
                                    ---Atau---
                                </p>
                                <button className="btn btn-primary mt-3" style={{ backgroundColor: "orange" }}>
                                    <Link to="/masuk">Masuk Sekarang</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
