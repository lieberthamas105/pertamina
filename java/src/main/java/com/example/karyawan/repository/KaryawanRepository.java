package com.example.karyawan.repository;
import com.example.karyawan.model.Karyawan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface KaryawanRepository extends JpaRepository<Karyawan, Integer> {}
