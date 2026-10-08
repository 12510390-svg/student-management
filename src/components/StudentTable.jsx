import {
  Pencil,
  Trash2,
  Users,
} from "lucide-react";

function StudentTable({
  students,
  onEdit,
  onDelete,
  onStatusChange,
}) {

  const getInitials = (name) => {
    return name
      .split(" ")
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="table-wrapper">

      {students.length === 0 ? (

        <div className="empty-state">

          <Users size={45} />

          <h3>
            Data tidak ditemukan
          </h3>

          <p>
            Coba gunakan pencarian atau filter
            yang berbeda.
          </p>

        </div>

      ) : (

        <table>

          <thead>
            <tr>
              <th>Mahasiswa</th>
              <th>NIM</th>
              <th>Program Studi</th>
              <th>Semester</th>
              <th>Status</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>

            {students.map((student) => (

              <tr key={student.id}>

                {/* NAME */}
                <td>
                  <div className="student-info">

                    <div className="avatar">
                      {getInitials(student.name)}
                    </div>

                    <div>
                      <strong>
                        {student.name}
                      </strong>

                      <small>
                        Mahasiswa
                      </small>
                    </div>

                  </div>
                </td>

                {/* NIM */}
                <td>
                  <span className="nim">
                    {student.nim}
                  </span>
                </td>

                {/* PRODI */}
                <td>
                  <span className="prodi">
                    {student.prodi}
                  </span>
                </td>

                {/* SEMESTER */}
                <td>
                  <span className="semester">
                    Semester {student.semester}
                  </span>
                </td>

                {/* STATUS */}
                <td>

                  <select
                    className={`status ${student.status.toLowerCase()}`}
                    value={student.status}
                    onChange={(e) =>
                      onStatusChange(
                        student.id,
                        e.target.value
                      )
                    }
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

                </td>

                {/* ACTION */}
                <td>

                  <div className="actions">

                    <button
                      className="edit-btn"
                      onClick={() =>
                        onEdit(student)
                      }
                      title="Edit"
                    >
                      <Pencil size={16} />
                    </button>

                    <button
                      className="delete-btn"
                      onClick={() =>
                        onDelete(student.id)
                      }
                      title="Hapus"
                    >
                      <Trash2 size={16} />
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      )}

    </div>
  );
}

export default StudentTable;