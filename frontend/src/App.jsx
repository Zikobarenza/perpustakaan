import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Navbar1 from "./components/Navbar1";
import Sidebar from "./components/Sidebar";
import Beranda from "./pages/Beranda";
import Masuk from "./pages/Masuk";
import Daftar from "./pages/Daftar";

import NotFound from "./pages/NotFound";

import Artikel from "./pages/Artikel";
import DetailArtikel from "./pages/DetailArtikel";
import DataPengguna from "./pages/admin/DataPengguna";
import DataPinjam from "./pages/admin/DataPinjam";
import DataBuku from "./pages/admin/DataBuku";
import Pengembalian from "./pages/Pengembalian";
import Peminjaman from "./pages/Peminjaman";
import Kategori from "./pages/Kategori";

const MainLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);
const AdminLayout = ({ children }) => (
  <>
    <Navbar1 />
    <div className="d-flex">
      <Sidebar />
      <div className="content " style={{marginLeft:"10%  ",marginTop:"4rem", width:"70%"}} >{children}</div>
    </div>
    <Footer />
  </>
);

export default function App() {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Perpustakaan </title>
      </Helmet>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Beranda />
            </MainLayout>
          }
        />
        <Route
          path="datapengguna"
          element={
            <AdminLayout>
              <DataPengguna />
            </AdminLayout>
          }
        />
        <Route
          path="/datapeminjaman"
          element={
            <AdminLayout>
              <DataPinjam />
            </AdminLayout>
          }
        />
        <Route
          path="/databuku"
          element={
            <AdminLayout>
              <DataBuku />
            </AdminLayout>
          }
        />
        <Route
          path="/artikel"
          element={
            <MainLayout>
              <Artikel />
            </MainLayout>
          }
        />

        <Route
          path="/detail/:id"
          element={
            <MainLayout>
              <DetailArtikel />
            </MainLayout>
          }
        />
        <Route
          path="/peminjaman"
          element={
            <MainLayout>
              <Peminjaman />
            </MainLayout>
          }
        />
        <Route
          path="/pengembalian"
          element={
            <MainLayout>
              <Pengembalian />
            </MainLayout>
          }
        />
        <Route
          path="/kategori"
          element={
            <MainLayout>
              <Kategori />
            </MainLayout>
          }
        />
        <Route
          path="*"
          element={
            <MainLayout>
              <NotFound />
            </MainLayout>
          }
        />

        <Route path="/masuk" element={<Masuk />} />
        <Route path="/daftar" element={<Daftar />} />
      </Routes>
    </BrowserRouter>
  );
}
