/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.ctr.controllers;

import hu.elte.ctr.entities.Screening;
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
import hu.elte.ctr.repositories.ScreeningRepository;

/**
 *
 * @author Betűmix
 */
@RestController
@RequestMapping("/screenings")
public class ScreeningController {

    @Autowired
    private ScreeningRepository screeningRepository;

    @GetMapping("")
    public ResponseEntity<Iterable<Screening>> getAll() {
        return ResponseEntity.ok(screeningRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Screening> get(@PathVariable Integer id) {
        Optional<Screening> screening = screeningRepository.findById(id);
        if (screening.isPresent()) {
            return ResponseEntity.ok(screening.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("")
    public ResponseEntity<Screening> post(@RequestBody Screening screening) {
        Screening savedScreening = screeningRepository.save(screening);
        return ResponseEntity.ok(savedScreening);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Screening> put(@RequestBody Screening screening, @PathVariable Integer id) {
        Optional<Screening> oScreening = screeningRepository.findById(id);
        if (oScreening.isPresent()) {
            screening.setAuditoriumid(id);
            return ResponseEntity.ok(screeningRepository.save(screening));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Screening> oScreening = screeningRepository.findById(id);
        if (oScreening.isPresent()) {
            screeningRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}