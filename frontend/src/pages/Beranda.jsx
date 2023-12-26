/* eslint-disable react/no-unescaped-entities */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
	faListCheck,
	faCommentDots,
	faCircleCheck,
} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import FormatCurrency from "../components/format-currency"
import programData from "../data/program-price.json"
import timData from "../data/timData.json"
import Cta from "../components/cta"
import "./css/beranda.css"

import artikelData from "../data/artikelData.json"
import kategoriData from "../data/kategoriData.json"
import mitraData from "../data/mitraData.json"

export default function Beranda() {
	return (
	  <main id="beranda">
		<section id="hero" className="pt-5 pb-0 vh-100" style={{ backgroundColor: "#2580B5" }}>
		  <div className="container">
			<div className="row align-items-center">
			  <div className="col-lg-7">
				<h1 className="mb-4">
				  Untuk Kebutuhan Anda Semua Kebutuhan Membaca
				</h1>
				<p className="mb-4">
				  "Temukan keajaiban dari perpustakaan sekolah online kami.
				  Akses katalog dan reservasi buku secara online kapan saja.
				  Nikmati kemudahan mengakses buku dan sumber ilmu."
				  </p>
              <Link to={"/program"} className="btn btn-primary text-black">
                CARI BUKU
              </Link>
              <Link to={"/program"} className="btn btn-primary m-4 bg-warning text-black">
                DAFTAR ANGGOTA
              </Link>
			  </div>
			  <div className="col-lg-5 d-flex justify-content-end">
				<img src="/assets/beranda/FOTO.png" alt="" />
			  </div>
			</div>
		  </div>
		</section>

			<section id="Artikel" style={{ backgroundColor: "#E8F7FB" }}>
			<div className="container pt-5 pb-5">
			<h2 className="mb-4 text-center" style={{ color: "#67C6E5" }}>
						EKSPLOR PERPUSTAKAAN
						</h2>
				<div className="row justify-content-center">
				{artikelData.map((artikel) => (
					<div className="col-lg-5 col-md-7 mb-5 text-center" key={artikel.id}>
					<div className="d-flex justify-content-center align-items-center">
						<img
						style={{ width: "50%", height: "auto", marginTop: "20px" }}
						src={artikel.gambar}
						alt={`Artikel text-center ${artikel.id}`}
						/>
					</div>
					<div>
						<h6 className="mt-4">{artikel.judul}</h6>
						<p className="mb-4">{artikel.deskripsi}</p>
					</div>
					</div>
				))}
				</div>
			</div>
			</section>

			<section id="Kategori">
			<div className="container pt-5 pb-5">
			<h2 className="mb-4 text-center" style={{ color: "#67C6E5" }}>
						KATEGORI BUKU
						</h2>
				<div className="row">
					{kategoriData.map((kategori) => (
						<div className="col-lg-4 col-md-4 mb-4" key={kategori.id}>
							<div className="card">
							<img
								src={kategori.gambar}
								className="card-img-top mx-auto d-block img-fluid"
								alt={`Artikel ${kategori.id}`}
								style={{
									width: "25%", 
									height: "auto",
									marginTop: "20px",
								}}
							/>
								<div className="card-body">
									<h6 className="text-center">{kategori.judul}</h6>
									<p className="card-text mb-25">{kategori.deskripsi}</p>
								</div>
								<div className="card-footer">
									<Link
										to={`/detail/${kategori.id}`}
										className="btn btn-primary card-button w-100">
										Detail
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
			</section>

			<section id="testimonial"style={{ backgroundColor: "#ffffff" }}>
				<div className="container">
				<div className="row gap-5 gap-lg-0 align-items-center">
						<div className="col-lg">
						<h2 className="mb-4 text-center" style={{ color: "#67C6E5" }}>
						ABOUT US
						</h2>
							<p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
						</div>
					</div>
				</div>
			</section>

			<section id="Tim">
				<div className="container pt-5 pb-5">
				<h2 className="mb-4 text-center" style={{ color: "#67C6E5" }}>
						TIM PENGEMBANG
						</h2>
					<div className="row justify-content-center">
						{timData.map((tim) => (
							<div className="col-lg-3 col-md-4 mb-4" key={tim.id}>
								<div className="card">
									<img
										src={tim.gambar}
										className="card-img-top"
										alt={`Tim ${tim.id}`}
									/>
									<div className="card-body text-center">
										<h6>{tim.judul}</h6>
										<p className="card-text mb-4">{tim.deskripsi}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>	

			<section id="Mitra">
			<div className="container pt-5 pb-5">
			<h2 className="mb-4 text-center" style={{ color: "#67C6E5" }}>
						MITRA KERJA
						</h2>
				<div className="row justify-content-center">
					{mitraData.map((mitra) => (
						<div className="col-lg-5 col-md-7 mb-5 text-center" key={mitra.id}>
							<div className="d-flex justify-content-center align-items-center">
								<img
									src={mitra.gambar}
									className="card-img-top"
									alt={`Mitra ${mitra.id}`}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
			</section>	
		</main>
	)
}
