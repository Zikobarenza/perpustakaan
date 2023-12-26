import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import kategoriData2 from "../data/kategoriData2.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Kategori() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = (offset) => {
    const newIndex = currentIndex + offset;

    if (newIndex >= 0 && newIndex < kategoriData.length) {
      setCurrentIndex(newIndex);
    }
  };

  return (
    <main id="kategori">
      <Helmet>
        <title>Kategori | Perpustakaan.</title>
      </Helmet>

      <div className="container pt-5 pb-5">
        <div className="row">
          {kategoriData2.map((kategori, index) => (
            <div className="col-lg-4 col-md-8 mb-3" key={kategori.id}>
              <div className="card mb-3">
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
                  <h5 className="card-title">{kategori.judul}</h5>
                  <p className="card-text mb-2">{kategori.deskripsi}</p>
                </div>
                <div className="card-footer text-right">
                  <Link
                    to={`/detail/${kategori.id}`} // Ubah tanda kutip di dalam string URL
                    className="btn btn-primary card-button"
                    style={{ width: "50%", marginLeft: "auto" }}
                  >
                    Pinjam
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-3">
          <FontAwesomeIcon
            icon={faAngleDoubleLeft}
            onClick={() => navigate(-2)}
            style={{ cursor: "pointer", fontSize: "18px" }}
          />
          <FontAwesomeIcon
            icon={faAngleLeft}
            onClick={() => navigate(-1)}
            style={{ cursor: "pointer", fontSize: "18px", marginLeft: "10px" }}
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            onClick={() => navigate(1)}
            style={{ cursor: "pointer", fontSize: "18px", marginLeft: "10px" }}
          />
          <FontAwesomeIcon
            icon={faAngleDoubleRight}
            onClick={() => navigate(2)}
            style={{ cursor: "pointer", fontSize: "18px", marginLeft: "10px" }}
          />
        </div>
      </div>
    </main>
  );
}
