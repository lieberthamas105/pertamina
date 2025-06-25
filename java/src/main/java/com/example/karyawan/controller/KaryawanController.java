package com.example.karyawan.controller;
import com.example.karyawan.model.Karyawan;
import com.example.karyawan.repository.KaryawanRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/karyawan")
@CrossOrigin
public class KaryawanController {
  private final KaryawanRepository repo;
  public KaryawanController(KaryawanRepository repo) { this.repo = repo; }

  @GetMapping public List<Karyawan> getAll() { return repo.findAll(); }
  @PostMapping public Karyawan create(@RequestBody Karyawan k) { return repo.save(k); }
  @PutMapping("/{id}") public Karyawan update(@PathVariable Integer id, @RequestBody Karyawan k) {
    k.setId(id);
    return repo.save(k);
  }
  @DeleteMapping("/{id}") public void delete(@PathVariable Integer id) { repo.deleteById(id); }
}
