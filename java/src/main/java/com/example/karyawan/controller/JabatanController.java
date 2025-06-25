package com.example.karyawan.controller;
import com.example.karyawan.model.Jabatan;
import com.example.karyawan.repository.JabatanRepository;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/jabatan")
@CrossOrigin
public class JabatanController {
  private final JabatanRepository repo;
  public JabatanController(JabatanRepository repo) { this.repo = repo; }
  @GetMapping public List<Jabatan> getAll() { return repo.findAll(); }
}
