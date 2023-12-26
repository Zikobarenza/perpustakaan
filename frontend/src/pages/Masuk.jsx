import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Helmet from "react-helmet";

export default function Masuk() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/masuk', { email, password })
      .then(res => {
        console.log(res);
        setLoginMessage(res.data);
        if (res.data.includes('berhasil')) {
          navigate('/');
        }
      })
      .catch((err) => {
        console.log(err);
        setLoginMessage("Terjadi kesalahan. Silakan coba lagi.");
      });
  };

  return (
    <main id="masuk" style={{ backgroundColor: "#f0f0f0" }}>
      <Helmet>
        <title>Masuk | Perpustakaan.</title>
      </Helmet>
      <div style={{ display: 'flex', justifyContent: 'space-between',marginTop:"-100px" }}>
        <div style={{ display: 'flex', alignItems: "center", justifyContent: "center", backgroundColor: 'blue', width: '40%' }}>
          <img
            src="/assets/logo.jpg"
            alt="Logo BijakCuan"
            style={{
              borderRadius: "20rem",
              width: "200px",
            }}
            className="mb-4"
          />
        </div>
        <div style={{ width: '60%' }}>
          <div style={{
            display: "flex",
            height: "97vh",
            alignItems: "center",
            justifyContent: "center",
            margin: '30px auto',
            width: '70%'
          }}>
            <div className="card-body " style={{ width: "28rem" }} >
              <h3 className="mb-1 fw-bold">Masuk</h3>
              <br />
              {loginMessage && (
                <div className={loginMessage.includes('berhasil') ? "alert alert-success" : "alert alert-danger"} role="alert" style={{ backgroundColor: loginMessage.includes('berhasil') ? "green" : "red" }}>
                  {loginMessage}
                </div>
              )}
              <div className="d-flex flex-column gap-4">
                <form onSubmit={handleSubmit} className="form-outline d-flex flex-column gap-2">
                  <br />
                  <p>Username</p>
                  <input
                    onChange={e => setEmail(e.target.value)}
                    name="username"
                    className="border-danger text-danger"
                    placeholder="Username/email"
                    required
                  />
                  <br />
                  <p>Password</p>
                  <input
                    onChange={e => setPassword(e.target.value)}
                    name="password"
                    className="border-danger text-danger"
                    placeholder="Password"
                    type="password"
                    required
                  />
                  <br />
                  <button type="submit" className="btn btn-primary mt-3">
                    Masuk
                  </button>
                </form>
                <p className="text-center" style={{ marginBottom: "-20px" }}>
                  ---Atau---
                </p>
                <button className="btn btn-primary mt-3" style={{ backgroundColor: "orange" }}>
                  <Link to="/daftar">Daftar</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
