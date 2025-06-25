 const { createApp } = Vue;

    createApp({
      data() {
        return {
          showConfirm: false,
          form: {
            nama: '',
            tanggal_lahir: '',
            jabatan: '',
            nip: '',
            jenis_kelamin: ''
          }
        };
      },
      methods: {
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
            const response = await fetch('http://localhost:8080/api/karyawan', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(this.form)
            });

            if (!response.ok) throw new Error('Gagal menyimpan data');

            alert('Data berhasil disimpan!');
            window.location.href = 'list-karyawan.html';
          } catch (error) {
            alert('Terjadi kesalahan saat menyimpan data.');
            console.error(error);
          }
        }
      }
    }).mount('#app');
  
