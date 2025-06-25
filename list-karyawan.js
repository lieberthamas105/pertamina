const { createApp } = Vue;

createApp({
  data() {
    return {
      karyawanList: [], // akan diisi dari fetch
    };
  },
  mounted() {
    this.ambilDataKaryawan();
  },
  methods: {
    async ambilDataKaryawan() {
      try {
        const response = await fetch(`http://localhost:8080/api/karyawan`);
        if (!response.ok) throw new Error("Gagal mengambil data");
        const data = await response.json();
        this.karyawanList = data;
      } catch (error) {
        console.error("Error saat fetch data:", error);
        alert("Gagal memuat data karyawan.");
      }
    },
    async hapusData(index) {
      const yakin = confirm("Yakin ingin menghapus data ini?");
      if (!yakin) return;

      const karyawan = this.karyawanList[index];

      try {
        const response = await fetch(`http://localhost:8080/api/karyawan/${karyawan.id}`, {
          method: 'DELETE'
        });

        if (!response.ok) throw new Error('Gagal menghapus data');

        this.karyawanList.splice(index, 1); // hapus dari tampilan
        alert("Data berhasil dihapus.");
      } catch (error) {
        alert("Gagal menghapus data.");
        console.error(error);
      }
    }
  }
}).mount('#app');
