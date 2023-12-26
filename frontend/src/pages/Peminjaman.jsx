import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Peminjaman() {
  const [namaAnggota, setNamaAnggota] = useState("");
  const [judulBuku, setJudulBuku] = useState("");
  const [tanggalPeminjaman, setTanggalPeminjaman] = useState("");
  const [kondisiBuku, setKondisiBuku] = useState("");
  const [peminjamanData, setPeminjamanData] = useState([]);
  const [failed, setFailed] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:8081/api/pinjam")
      .then(response => {
        setPeminjamanData(response.data);
      })
      .catch(error => {
        console.error("Error fetching borrowing data:", error);
      });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const formattedTanggalPeminjaman = new Date(tanggalPeminjaman).toISOString().split('T')[0];

      const response = await axios.post("http://localhost:8081/api/pinjam", {
        name: namaAnggota,
        judul: judulBuku,
        tanggalpeminjaman: formattedTanggalPeminjaman,
        kondisibuku: kondisiBuku,
      });

      console.log("Response from server:", response.data);

      // Refresh borrowing data
      fetchData();
    } catch (error) {
      console.error("Error submitting form:", error.message);
      setFailed("Gagal melakukan peminjaman");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8081/api/pinjam/${id}`);
      console.log("Delete response:", response.data);

      // Refresh borrowing data
      fetchData();
    } catch (error) {
      console.error("Error deleting item:", error.message);
    }
  };

  return (
    <main id="peminjaman">
      <div className="container pt-5 pb-5" style={{ backgroundColor: '#2580B5' }}>
        <h2 className="">Peminjaman Buku</h2>

        <div className="row">
          <div className="">
            <form
              style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px" }}
              onSubmit={handleFormSubmit}
            >
              <div className="mb-3">
                <label htmlFor="namaAnggota" className="form-label">
                  Nama Anggota:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="namaAnggota"
                  value={namaAnggota}
                  onChange={(e) => setNamaAnggota(e.target.value)}
                  required
                />
              </div>

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
                  Tanggal Peminjaman:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="tanggalpeminjaman"
                  value={tanggalPeminjaman}
                  onChange={(e) => setTanggalPeminjaman(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="kondisiBuku" className="form-label">
                  Kondisi Buku Saat Dipinjam:
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
                type="submit"
                className="btn btn-primary"
              >
                Kirim
              </button>
            </form>
          </div>
        </div>
  
        {/* Display Borrowing Data */}
        <div className="mt-4">
          <h3>Daftar Peminjaman Buku</h3>
          <ul>
            {peminjamanData.map((item, index) => (
              <li key={index}>
                <strong>Nama Anggota:</strong> {item.name}, 
                <strong> Judul Buku:</strong> {item.judul}, 
                <strong> Tanggal Peminjaman:</strong> {item.tanggalpeminjaman}, 
                <strong> Kondisi:</strong> {item.kondisibuku}
                <button onClick={() => handleDelete(item.id)}>Hapus</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
