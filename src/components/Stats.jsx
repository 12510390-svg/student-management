import {
  Users,
  UserCheck,
  GraduationCap,
  BookOpen,
} from "lucide-react";

function Stats({ students }) {

  const totalStudents = students.length;

  const activeStudents = students.filter(
    (student) => student.status === "Aktif"
  ).length;

  const totalPrograms = new Set(
    students.map((student) => student.prodi)
  ).size;

  const semesterFour = students.filter(
    (student) => student.semester === 4
  ).length;

  const stats = [
    {
      title: "Total Mahasiswa",
      value: totalStudents,
      description: "Data terdaftar",
      icon: Users,
    },
    {
      title: "Mahasiswa Aktif",
      value: activeStudents,
      description: "Status aktif",
      icon: UserCheck,
    },
    {
      title: "Program Studi",
      value: totalPrograms,
      description: "Prodi tersedia",
      icon: GraduationCap,
    },
    {
      title: "Semester 4",
      value: semesterFour,
      description: "Mahasiswa semester 4",
      icon: BookOpen,
    },
  ];

  return (
    <section className="stats-grid">

      {stats.map((stat) => {

        const Icon = stat.icon;

        return (
          <div
            className="stat-card"
            key={stat.title}
          >

            <div className="stat-icon">
              <Icon size={22} />
            </div>

            <div>
              <p>{stat.title}</p>

              <h3>{stat.value}</h3>

              <span>{stat.description}</span>
            </div>

          </div>
        );
      })}

    </section>
  );
}

export default Stats;