import { useState } from "react";
import Header from "./components/Header";
import Stats from "./components/Stats";
import SearchFilter from "./components/SearchFilter";
import StudentForm from "./components/StudentForm";
import StudentTable from "./components/StudentTable";

const initialStudents = [
  {
    id: 1,
    name: "Velovexia Miracle",
    nim: "24010101",
    prodi: "Informatika",
    semester: 4,
    status: "Aktif",
  },
  {
    id: 2,
    name: "Joshua Darmawan",
    nim: "24010102",
    prodi: "Informatika",
    semester: 4,
    status: "Aktif",
  },
  {
    id: 3,
    name: "Reginald Fredrick",
    nim: "24010103",
    prodi: "Informatika",
    semester: 4,
    status: "Aktif",
  },
  {
    id: 4,
    name: "Bridgetic Malfoy",
    nim: "24010104",
    prodi: "Akuntansi",
    semester: 4,
    status: "Aktif",
  },
  {
    id: 5,
    name: "Injilia Ignasia",
    nim: "24010105",
    prodi: "Manajemen",
    semester: 4,
    status: "Aktif",
  },
  {
    id: 6,
    name: "Eastereva Maria",
    nim: "24010106",
    prodi: "Manajemen",
    semester: 4,
    status: "Aktif",
  },
  {
    id: 7,
    name: "Amarissa Aurelia",
    nim: "24010107",
    prodi: "Sistem Informasi",
    semester: 4,
    status: "Aktif",
  },
];

function App() {
  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");
  const [filterProdi, setFilterProdi] = useState("Semua");
  const [showForm, setShowForm] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  const filteredStudents = students.filter((student) => {
    const searchText = search.toLowerCase();

    const matchSearch =
      student.name.toLowerCase().includes(searchText) ||
      student.nim.toLowerCase().includes(searchText);

    const matchProdi =
      filterProdi === "Semua" ||
      student.prodi === filterProdi;

    return matchSearch && matchProdi;
  });

  const handleAddStudent = (student) => {
    const newStudent = {
      ...student,
      id: Date.now(),
    };

    setStudents([...students, newStudent]);
    setShowForm(false);
  };

  const handleUpdateStudent = (updatedStudent) => {
    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id
          ? updatedStudent
          : student
      )
    );

    setEditingStudent(null);
    setShowForm(false);
  };

  const handleDeleteStudent = (id) => {
    const confirmDelete = window.confirm(
      "Apakah kamu yakin ingin menghapus data mahasiswa ini?"
    );

    if (confirmDelete) {
      setStudents(
        students.filter((student) => student.id !== id)
      );
    }
  };

  const handleStatusChange = (id, status) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? { ...student, status }
          : student
      )
    );
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setShowForm(true);
  };

  const handleAddButton = () => {
    setEditingStudent(null);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingStudent(null);
  };

  return (
    <div className="app">
      <Header onAdd={handleAddButton} />

      <main className="container">

        {/* HERO */}
        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">
              STUDENT MANAGEMENT SYSTEM
            </p>

            <h1>
              Kelola Data
              <span> Mahasiswa</span>
            </h1>

            <p className="hero-description">
              Kelola data mahasiswa dengan lebih mudah,
              rapi, dan praktis dalam satu sistem.
            </p>
          </div>

          <div className="hero-decoration">
            🎓
          </div>
        </section>

        {/* STATISTICS */}
        <Stats students={students} />

        {/* MAIN CONTENT */}
        <section className="content-card">

          <SearchFilter
            search={search}
            setSearch={setSearch}
            filterProdi={filterProdi}
            setFilterProdi={setFilterProdi}
            onAdd={handleAddButton}
          />

          <StudentTable
            students={filteredStudents}
            onEdit={handleEdit}
            onDelete={handleDeleteStudent}
            onStatusChange={handleStatusChange}
          />

        </section>

      </main>

      {/* FORM MODAL */}
      {showForm && (
        <StudentForm
          student={editingStudent}
          onClose={handleCloseForm}
          onAdd={handleAddStudent}
          onUpdate={handleUpdateStudent}
        />
      )}

      <footer>
        StudentHub • Student Management System
      </footer>
    </div>
  );
}

export default App;