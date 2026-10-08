import { GraduationCap, Plus } from "lucide-react";

function Header({ onAdd }) {
  return (
    <header className="header">
      <div className="header-inner">

        <div className="brand">

          <div className="logo">
            <GraduationCap size={25} />
          </div>

          <div>
            <h2>
              Student<span>Hub</span>
            </h2>

            <p>Management System</p>
          </div>

        </div>

        <button
          className="add-btn header-button"
          onClick={onAdd}
        >
          <Plus size={18} />
          Tambah Mahasiswa
        </button>

      </div>
    </header>
  );
}

export default Header;