import React from "react";

const Perawatan = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Input Data Perawatan</h1>

      <div>
        <div className="bg-white rounded-xl p-6 mb-6">
          <div className="flex items-start flex-wrap gap-8">
            <div className="flex-auto">
              <h5 className="font-medium text-xl mb-4">Data Pelanggan</h5>
              {/* Render informasi pelanggan di sini */}
            </div>
            <div className="flex-auto">
              <h5 className="font-medium text-xl mb-4">Data Perawatan</h5>
              {/* Render informasi perawatan di sini */}
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="block py-2 px-12 rounded-lg font-medium text-white bg-customBlue3 hover:bg-customBlue4"
            onClick={() => {
              alert("Data berhasil disimpan.");
            }}
          >
            Simpan Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default Perawatan;
