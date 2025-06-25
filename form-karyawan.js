const { createApp } = Vue;

createApp({
  data() {
    return {
      showConfirm: false,
      daftarJabatan: [],
      form: {
        id: null,
        nama: '',
        tanggal_lahir: '',
        jabatan: '',
        nip: '',
        jenis_kelamin: ''
      },
      modeEdit: false
    };
  },
  async mounted() {
    const dataEdit = localStorage.getItem('dataEdit');
    if (dataEdit) {
      this.form = JSON.parse(dataEdit);
      this.modeEdit = true;
      localStorage.removeItem('dataEdit');
    }

    await this.ambilDaftarJabatan();
  },
  methods: {
    async ambilDaftarJabatan() {
      try {
        const res = await fetch('http://localhost:8080/api/jabatan');
        const data = await res.json();
        this.daftarJabatan = data;
      } catch (e) {
        console.error('Gagal mengambil data jabatan:', e);
        alert('Gagal mengambil data jabatan dari server');
      }
    },
    konfirmasiSimpan() {
      if (this.validasiForm()) {
        this.showConfirm = true;
      } else {
        alert('Mohon lengkapi semua data terlebih dahulu.');
      }
    },
    validasiForm() {
      return (
        this.form.nama &&
        this.form.tanggal_lahir &&
        this.form.jabatan &&
        this.form.nip &&
        this.form.jenis_kelamin
      );
    },
    async simpanData() {
      this.showConfirm = false;
      try {
        const url = this.modeEdit
          ? `http://localhost:8080/api/karyawan/${this.form.id}`
          : 'http://localhost:8080/api/karyawan';

        const method = this.modeEdit ? 'PUT' : 'POST';

        const response = await fetch(url, {
          method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.form)
        });

        if (!response.ok) throw new Error('Gagal menyimpan data');
        alert(this.modeEdit ? 'Data berhasil diperbarui!' : 'Data berhasil disimpan!');
        window.location.href = 'list-karyawan.html';
      } catch (error) {
        console.error(error);
        alert('Terjadi kesalahan saat menyimpan data.');
      }
    }
  }
}).mount('#app');
