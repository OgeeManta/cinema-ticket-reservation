/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.ctr.controllers;

import hu.elte.ctr.entities.Auditorium;
import hu.elte.ctr.repositories.AuditoriumRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Betűmix
 */

@RestController
@RequestMapping("/halls")
public class AuditoriumController {

    @Autowired
    private AuditoriumRepository auditoriumRepository;

    @GetMapping("")
    public ResponseEntity<Iterable<Auditorium>> getAll() {
        return ResponseEntity.ok(auditoriumRepository.findAll());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Auditorium> get(@PathVariable Integer id) {
        Optional<Auditorium> audit = auditoriumRepository.findById(id);
        if (audit.isPresent()) {
            return ResponseEntity.ok(audit.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("")
    public ResponseEntity<Auditorium> post(@RequestBody Auditorium audit) {
        Auditorium savedIssue = auditoriumRepository.save(audit);
        return ResponseEntity.ok(savedIssue);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Auditorium> put(@RequestBody Auditorium audit, @PathVariable Integer id) {
        Optional<Auditorium> oIssue = auditoriumRepository.findById(id);
        if (oIssue.isPresent()) {
            audit.setAuditoriumId(id);
            return ResponseEntity.ok(auditoriumRepository.save(audit));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Auditorium> oIssue = auditoriumRepository.findById(id);
        if (oIssue.isPresent()) {
            auditoriumRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
}
