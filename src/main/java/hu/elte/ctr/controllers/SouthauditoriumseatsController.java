/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.ctr.controllers;

import hu.elte.ctr.entities.Southauditoriumseats;
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
import hu.elte.ctr.repositories.SouthauditoriumseatsRepository;

/**
 *
 * @author Betűmix
 */
@RestController
@RequestMapping("/southauditoriumseats")
public class SouthauditoriumseatsController {

    @Autowired
    private SouthauditoriumseatsRepository southauditoriumseatsRepository;

    @GetMapping("")
    public ResponseEntity<Iterable<Southauditoriumseats>> getAll() {
        return ResponseEntity.ok(southauditoriumseatsRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Southauditoriumseats> get(@PathVariable Integer id) {
        Optional<Southauditoriumseats> southauditoriumseats = southauditoriumseatsRepository.findById(id);
        if (southauditoriumseats.isPresent()) {
            return ResponseEntity.ok(southauditoriumseats.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("")
    public ResponseEntity<Southauditoriumseats> post(@RequestBody Southauditoriumseats southauditoriumseats) {
        Southauditoriumseats savedSouthauditoriumseats = southauditoriumseatsRepository.save(southauditoriumseats);
        return ResponseEntity.ok(savedSouthauditoriumseats);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Southauditoriumseats> put(@RequestBody Southauditoriumseats southauditoriumseats, @PathVariable Integer id) {
        Optional<Southauditoriumseats> oSouthauditoriumseats = southauditoriumseatsRepository.findById(id);
        if (oSouthauditoriumseats.isPresent()) {
            southauditoriumseats.setId(id);
            return ResponseEntity.ok(southauditoriumseatsRepository.save(southauditoriumseats));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Southauditoriumseats> oSouthauditoriumseats = southauditoriumseatsRepository.findById(id);
        if (oSouthauditoriumseats.isPresent()) {
            southauditoriumseatsRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}