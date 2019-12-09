/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.ctr.controllers;

import hu.elte.ctr.entities.Auditorium;
import hu.elte.ctr.entities.Screening;
import hu.elte.ctr.repositories.AuditoriumRepository;
import hu.elte.ctr.repositories.ScreeningRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin
@RestController
@RequestMapping("/auditoriums")
public class AuditoriumController {

    @Autowired
    private AuditoriumRepository auditoriumRepository;
    
    @Autowired
    private ScreeningRepository screeningRepository;
    
    @GetMapping("")
    //@Secured({ "ROLE_USER", "ROLE_ADMIN" })
    public ResponseEntity<Iterable<Auditorium>> getAll() {
        return ResponseEntity.ok(auditoriumRepository.findAll());
    }

    @PutMapping("/admin/{id}")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Auditorium> put(@PathVariable Integer id, @RequestBody Auditorium auditorium) {
    Optional<Auditorium> oldAud = auditoriumRepository.findById(id);
    if (!oldAud.isPresent())
    {
      ResponseEntity.notFound();
    }
    auditorium.setId(id);
    return ResponseEntity.ok(auditoriumRepository.save(auditorium));
  }
    
    @GetMapping("/{id}")
    //@Secured({ "ROLE_USER", "ROLE_ADMIN" })
    public ResponseEntity<Auditorium> get(@PathVariable Integer id) {
        Optional<Auditorium> audit = auditoriumRepository.findById(id);
        if (audit.isPresent()) {
            return ResponseEntity.ok(audit.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @GetMapping("/{id}/screenings")
    //@Secured({ "ROLE_USER", "ROLE_ADMIN" })
    public ResponseEntity<Iterable<Screening>> labels(@PathVariable Integer id) {
        Optional<Auditorium> oAuditorium = auditoriumRepository.findById(id);
        if (oAuditorium.isPresent()) {
            return ResponseEntity.ok(oAuditorium.get().getScreenings());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
}
