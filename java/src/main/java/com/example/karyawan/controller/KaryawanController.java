package com.example.karyawan.controller;

import com.example.karyawan.model.Karyawan;
import com.example.karyawan.repository.KaryawanRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/karyawan")
@CrossOrigin
public class KaryawanController {
    private final KaryawanRepository repository;

    public KaryawanController(KaryawanRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Karyawan> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Karyawan create(@RequestBody Karyawan karyawan) {
        return repository.save(karyawan);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
