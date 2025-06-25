package com.example.karyawan.model;

import jakarta.persistence.*;

@Entity
@Table(name = "jabatan")
public class Jabatan {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Integer id;
  private String nama;
  public Integer getId() { return id; }
  public void setId(Integer id) { this.id = id; }
  public String getNama() { return nama; }
  public void setNama(String nama) { this.nama = nama; }
}
