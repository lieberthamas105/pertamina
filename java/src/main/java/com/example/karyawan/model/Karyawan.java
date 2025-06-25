package com.example.karyawan.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "karyawan")
public class Karyawan {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String nama;
  @Column(name="tanggal_lahir")
  private LocalDate tanggalLahir;
  private String jabatan;
  private Long nip;
  @Column(name="jenis_kelamin")
  private String jenisKelamin;
  public Integer getId() { return id; }
  public void setId(Integer id) { this.id = id; }
  public String getNama() { return nama; }
  public void setNama(String nama) { this.nama = nama; }
  public LocalDate getTanggalLahir() { return tanggalLahir; }
  public void setTanggalLahir(LocalDate tanggalLahir) { this.tanggalLahir = tanggalLahir; }
  public String getJabatan() { return jabatan; }
  public void setJabatan(String jabatan) { this.jabatan = jabatan; }
  public Long getNip() { return nip; }
  public void setNip(Long nip) { this.nip = nip; }
  public String getJenisKelamin() { return jenisKelamin; }
  public void setJenisKelamin(String jenisKelamin) { this.jenisKelamin = jenisKelamin; }
}
