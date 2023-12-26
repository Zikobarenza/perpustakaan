import React, { useState } from "react";

export default function Pengembalian() {
  const [judulBuku, setJudulBuku] = useState("");
  const [tanggalpeminjaman, setTanggal] = useState("");
  const [kondisiBuku, setKondisiBuku] = useState("");

  const handleFormSubmit = () => {
    // Send a POST request to the backend when the form is submitted
    fetch("http://localhost:8081/api/pengembalian", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        judul: judulBuku,
        tanggal_pengembalian: tanggalpeminjaman,
        kondisi_pengembalian: kondisiBuku,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Handle success, e.g., show a success message to the user
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error, e.g., show an error message to the user
      });
  };

  return (
    <main id="pengembalian">
      <div className="container pt-5 pb-5 vh-100" style={{ backgroundColor: '#2580B5' }}>
        <h2 className="">Pengembalian Buku</h2>

        <div className="row">
          <div className="">
            <form style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px" }}>
              <div className="mb-3">
                <label htmlFor="judulBuku" className="form-label">
                  Judul Buku:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="judulBuku"
                  value={judulBuku}
                  onChange={(e) => setJudulBuku(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="tanggalpeminjaman" className="form-label">
                  Tanggal Pengembalian:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="tanggalpeminjaman"
                  value={tanggalpeminjaman}
                  onChange={(e) => setTanggal(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="kondisiBuku" className="form-label">
                  Kondisi Buku Saat Dikembalikan:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="kondisiBuku"
                  value={kondisiBuku}
                  onChange={(e) => setKondisiBuku(e.target.value)}
                />
              </div>

              <button
                type="button"
                className="btn btn-primary"
                onClick={handleFormSubmit}
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
