-- Buat database
CREATE DATABASE IF NOT EXISTS db_karyawan;
USE db_karyawan;

-- Buat tabel karyawan
CREATE TABLE IF NOT EXISTS karyawan (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nama VARCHAR(100) NOT NULL,
    tanggal_lahir VARCHAR(20) NOT NULL,
    jabatan VARCHAR(100) NOT NULL,
    nip VARCHAR(50) NOT NULL,
    jenis_kelamin VARCHAR(20) NOT NULL
);

-- Tambahkan data awal
INSERT INTO karyawan (nama, tanggal_lahir, jabatan, nip, jenis_kelamin) VALUES
('Yogi Lestari', '1990-02-14', 'Helpdesk', '14021990', 'Pria'),
('Anggi Setiawan', '1991-05-10', 'BPS', '10051991', 'Pria'),
('Rosiana', '1993-04-20', 'Tester', '20041993', 'Wanita'),
('Yudi Ismiaji', '1994-01-11', 'Programmer', '11011994', 'Pria');
