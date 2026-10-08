import {
  Search,
  Filter,
  Plus,
} from "lucide-react";

function SearchFilter({
  search,
  setSearch,
  filterProdi,
  setFilterProdi,
  onAdd,
}) {
  return (
    <div className="toolbar">

      <div className="toolbar-title">
        <h2>Daftar Mahasiswa</h2>

        <p>
          Kelola dan cari data mahasiswa
        </p>
      </div>

      <div className="toolbar-actions">

        {/* SEARCH */}
        <div className="search-box">

          <Search size={18} />

          <input
            type="text"
            placeholder="Cari nama atau NIM..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        {/* FILTER */}
        <div className="filter-box">

          <Filter size={17} />

          <select
            value={filterProdi}
            onChange={(e) =>
              setFilterProdi(e.target.value)
            }
          >
            <option value="Semua">
              Semua Prodi
            </option>

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

        {/* ADD */}
        <button
          className="add-btn"
          onClick={onAdd}
        >
          <Plus size={18} />
          Tambah
        </button>

      </div>

    </div>
  );
}

export default SearchFilter;