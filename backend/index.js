import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "perpustakaan"
});

app.post('/api/daftar', (req, res) => {
    const { username, name, email, password } = req.body;
    const sql = "INSERT INTO Pengguna (username, name, email, password) VALUES (?, ?, ?, ?)";

    db.query(sql, [username, name, email, password], (err, data) => {
        if (err) {
            return res.json("Gagal mendaftar");
        } else {
            return res.json("Berhasil mendaftar");
        }
    });
});

app.post('/masuk', (req, res) => {
    const sql = "SELECT * FROM Pengguna WHERE email = ? AND password = ?";

    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.json("Gagal Masuk");
        if (data.length > 0) {
            return res.json("Anda Berhasil Masuk");
        } else {
            return res.json("Maaf Email atau Password yang anda masukkan salah");
        }
    });
});

app.get('/api/users', (req, res) => {
    const sql = "SELECT id, name, email, username, password FROM Pengguna"; // Ambil hanya kolom yang dibutuhkan

    db.query(sql, (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Gagal mengambil data pengguna" });
        } else {
            return res.json(data); // Kirim data pengguna dalam bentuk array objek
        }
    });
});

app.get('/api/books', (req, res) => {
    const sql = "SELECT id, judul, pengarang, penerbit, jumlah FROM buku";

    db.query(sql, (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Gagal mengambil data buku" });
        } else {
            return res.json(data); // Mengirim data buku dalam bentuk array objek
        }
    });
});

app.get('/api/pinjam', (req, res) => {
    const sql = "SELECT id, judul, pengarang, penerbit, jumlah FROM buku";

    db.query(sql, (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Gagal mengambil data buku" });
        } else {
            return res.json(data); // Mengirim data buku dalam bentuk array objek
        }
    });
});


// Endpoint untuk menghapus pengguna berdasarkan ID
app.delete('/api/users/:id', (req, res) => {
    const userId = req.params.id;
    const sql = "DELETE FROM Pengguna WHERE id = ?";

    db.query(sql, userId, (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Gagal menghapus pengguna" });
        } else {
            return res.json({ message: "Pengguna berhasil dihapus" });
        }
    });
});
app.post('/api/pengembalian', (req, res) => {
    const { name, judul, tanggal_pengembalian, kondisi_pengembalian } = req.body;
    const sql = 'INSERT INTO pengembalian (judul, tanggal_pengembalian, kondisi_pengembalian) VALUES (?, ?, ?)';
  
    db.query(sql, [judul, tanggal_pengembalian, kondisi_pengembalian], (err, data) => {
      if (err) {
        console.error("Error inserting into database:", err);
        return res.status(500).json({ error: "Internal Server Error", details: err.message });
      } else {
        return res.status(200).json({ message: "Berhasil mendaftar" });
      }
    });
  });

app.post('/api/pinjam', (req, res) => {
    const { name, judul, tanggalpeminjaman, kondisibuku } = req.body;
    const sql = 'INSERT INTO peminjaman (name, judul, tanggalpeminjaman, kondisibuku) VALUES (?, ?, ?, ?)';
  
    db.query(sql, [name, judul, tanggalpeminjaman, kondisibuku], (err, data) => {
      if (err) {
        console.error("Error inserting into database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      } else {
        return res.status(200).json("Berhasil mendaftar");
      }
    });
  });
  
  app.get('/api/pinjam', (req, res) => {
    const sql = 'SELECT * FROM peminjaman';
  
    db.query(sql, (err, data) => {
      if (err) {
        console.error("Error fetching data from database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      } else {
        return res.status(200).json(data);
      }
    });
  });
  
  app.delete('/api/pinjam/:id', (req, res) => {
      const peminjamanId = req.params.id;
      const sql = 'DELETE FROM peminjaman WHERE id = ?';
  
      db.query(sql, [peminjamanId], (err, data) => {
          if (err) {
              console.error('Error deleting peminjaman:', err);
              res.status(500).json({ message: 'Internal Server Error' });
          } else {
              res.json({ message: 'Peminjaman berhasil dihapus' });
          }
      });
  });

app.get("/", (req, res) => {
    res.json("hello this is the backend");
});

app.listen(8081, () => console.log("Server is listening on port 8081"));
