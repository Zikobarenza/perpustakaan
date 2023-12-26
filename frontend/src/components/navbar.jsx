import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { Cookies } from "react-cookie"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-solid-svg-icons"

export default function Navbar() {
	const route = useLocation()
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const cookies = new Cookies()

	useEffect(() => {
		const isLoggedInUser = cookies.get("auth-login")
		if (isLoggedInUser) {
			setIsLoggedIn(true)
		}
	}, [])

	return (
		<nav className="navbar navbar-expand-lg fixed-top pt-3 pb-3">
			<div className="container">
				<h4>
					<Link className="navbar-brand fw-bold" to="/">
						LOGO
					</Link>
				</h4>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse gap-4" id="navbarNav">
					<ul className="navbar-nav ms-auto align-items-center gap-2">
						<li className="nav-item">
							<Link
								className={`nav-link ${route.pathname === "/" ? "active" : ""}`}
								aria-current="page"
								to="/">
								Beranda
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={`nav-link ${
									route.pathname === "/tentang" ? "active" : ""
								}`}
								to="/tentang">
								Tentang
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className={`nav-link ${
									route.pathname === "/kategori" ? "active" : ""
								}`}
								to="/kategori">
								Kategori
							</Link>
						</li>
						<li className="nav-item dropdown">
						<a
							className="nav-link dropdown-toggle"
							href="#"
							id="layananSirkulasiDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Layanan Sirkulasi
						</a>
						<div
							className="dropdown-menu"
							aria-labelledby="layananSirkulasiDropdown"
						>
							<Link
                  className={`dropdown-item ${
                    route.pathname === "/peminjaman" ? "active" : ""
                  }`}
                  to="/peminjaman"
                >
                  Peminjaman
                </Link>
                <Link
                  className={`dropdown-item ${
                    route.pathname === "/pengembalian" ? "active" : ""
                  }`}
                  to="/pengembalian"
                >
                  Pengembalian
                </Link>
						</div>
						</li>
						<li className="nav-item">
							<Link
								className={`nav-link ${
									route.pathname === "/pesan" ? "active" : ""
								}`}
								to="/artikel">
								Pesan
							</Link>
						</li>
					</ul>
					{isLoggedIn ? (
						<ul className="navbar-nav gap-2 mt-2 mt-lg-0 align-items-center">
							<li className="nav-item w-100">
								<Link to="/profil">
									<FontAwesomeIcon
										icon={faUser}
										className={`btn d-flex mx-auto ${
											route.pathname === "/profil"
												? "btn-dark"
												: "btn-outline-dark"
										}`}
									/>
								</Link>
							</li>
						</ul>
					) : (
						<ul className="navbar-nav gap-2 mt-2 mt-lg-0 align-items-center">
							<li className="nav-item w-100">
								<Link className="btn btn-outline-primary w-100" to="/daftar">
									Daftar
								</Link>
							</li>
							<li className="nav-item w-100">
								<Link className="btn btn-primary w-100" to="/masuk">
									Masuk
								</Link>
							</li>
						</ul>
					)}
				</div>
			</div>
		</nav>
	)
}
