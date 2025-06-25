const { createApp } = Vue;

    createApp({
      data() {
        return {
          dataKaryawan: []
        };
      },
      mounted() {
        this.ambilData();
      },
      methods: {
        async ambilData() {
          try {
            const response = await fetch('http://localhost:8080/api/karyawan');
            if (!response.ok) throw new Error('Gagal mengambil data');
            const data = await response.json();
            this.dataKaryawan = data;
          } catch (error) {
            console.error(error);
            alert('Gagal memuat data dari server.');
          }
        },
        formatTanggal(tanggal) {
          const opsi = { year: 'numeric', month: 'long', day: 'numeric' };
          return new Date(tanggal).toLocaleDateString('id-ID', opsi);
        },
        editKaryawan(karyawan) {
          // redirect + kirim data via query atau localStorage
          localStorage.setItem('dataEdit', JSON.stringify(karyawan));
          window.location.href = 'form-karyawan.html';
        },
        async hapusKaryawan(id) {
          if (confirm('Yakin ingin menghapus data ini?')) {
            try {
              const res = await fetch(`http://localhost:8080/api/karyawan/${id}`, {
                method: 'DELETE'
              });
              if (!res.ok) throw new Error('Gagal menghapus');
              alert('Data berhasil dihapus');
              this.ambilData();
            } catch (err) {
              console.error(err);
              alert('Terjadi kesalahan saat menghapus data');
            }
          }
        }
      }
    }).mount('#app');
