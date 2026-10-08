import { useState } from "react";
import {
  X,
  UserPlus,
} from "lucide-react";

function StudentForm({
  student,
  onClose,
  onAdd,
  onUpdate,
}) {

  const [form, setForm] = useState(
    student || {
      name: "",
      nim: "",
      prodi: "Informatika",
      semester: 4,
      status: "Aktif",
    }
  );

  const handleChange = (e) => {

    const { name, value } = e.target;

    setForm({
      ...form,
      [name]:
        name === "semester"
          ? Number(value)
          : value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      form.name.trim() === "" ||
      form.nim.trim() === ""
    ) {
      alert(
        "Nama dan NIM wajib diisi!"
      );

      return;
    }

    if (student) {
      onUpdate(form);
    } else {
      onAdd(form);
    }
  };

  return (
    <div className="modal-overlay">

      <div className="modal">

        {/* HEADER */}
        <div className="modal-header">

          <div>

            <div className="modal-icon">
              <UserPlus size={21} />
            </div>

            <h2>
              {student
                ? "Edit Mahasiswa"
                : "Tambah Mahasiswa"}
            </h2>

            <p>
              {student
                ? "Perbarui data mahasiswa."
                : "Tambahkan mahasiswa baru."}
            </p>

          </div>

          <button
            className="close-btn"
            onClick={onClose}
          >
            <X size={20} />
          </button>

        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit}>

          {/* NAME */}
          <div className="form-group">

            <label>
              Nama Lengkap
            </label>

            <input
              type="text"
              name="name"
              placeholder="Masukkan nama lengkap"
              value={form.name}
              onChange={handleChange}
            />

          </div>

          {/* NIM */}
          <div className="form-group">

            <label>
              NIM
            </label>

            <input
              type="text"
              name="nim"
              placeholder="Masukkan NIM"
              value={form.nim}
              onChange={handleChange}
            />

          </div>

          {/* PRODI + SEMESTER */}
          <div className="form-row">

            <div className="form-group">

              <label>
                Program Studi
              </label>

              <select
                name="prodi"
                value={form.prodi}
                onChange={handleChange}
              >

                <option value="Informatika">
                  Informatika
                </option>

                <option value="Sistem Informasi">
                  Sistem Informasi
                </option>

                <option value="Akuntansi">
                  Akuntansi
                </option>

                <option value="Manajemen">
                  Manajemen
                </option>

              </select>

            </div>

            <div className="form-group">

              <label>
                Semester
              </label>

              <select
                name="semester"
                value={form.semester}
                onChange={handleChange}
              >

                {[1, 2, 3, 4, 5, 6, 7, 8].map(
                  (semester) => (
                    <option
                      key={semester}
                      value={semester}
                    >
                      Semester {semester}
                    </option>
                  )
                )}

              </select>

            </div>

          </div>

          {/* STATUS */}
          <div className="form-group">

            <label>
              Status
            </label>

            <select
              name="status"
              value={form.status}
              onChange={handleChange}
            >

              <option value="Aktif">
                Aktif
              </option>

              <option value="Cuti">
                Cuti
              </option>

              <option value="Lulus">
                Lulus
              </option>

            </select>

          </div>

          {/* BUTTON */}
          <div className="form-buttons">

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Batal
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              {student
                ? "Simpan Perubahan"
                : "Tambah Mahasiswa"}
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default StudentForm;