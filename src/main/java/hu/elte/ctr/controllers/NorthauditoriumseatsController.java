/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.ctr.controllers;

import hu.elte.ctr.entities.Northauditoriumseats;
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
import hu.elte.ctr.repositories.NorthauditoriumseatsRepository;

/**
 *
 * @author Betűmix
 */
@RestController
@RequestMapping("/northauditoriumseats")
public class NorthauditoriumseatsController {

    @Autowired
    private NorthauditoriumseatsRepository northauditoriumseatsRepository;

    @GetMapping("")
    public ResponseEntity<Iterable<Northauditoriumseats>> getAll() {
        return ResponseEntity.ok(northauditoriumseatsRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Northauditoriumseats> get(@PathVariable Integer id) {
        Optional<Northauditoriumseats> northauditoriumseats = northauditoriumseatsRepository.findById(id);
        if (northauditoriumseats.isPresent()) {
            return ResponseEntity.ok(northauditoriumseats.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("")
    public ResponseEntity<Northauditoriumseats> post(@RequestBody Northauditoriumseats northauditoriumseats) {
        Northauditoriumseats savedNorthauditoriumseats = northauditoriumseatsRepository.save(northauditoriumseats);
        return ResponseEntity.ok(savedNorthauditoriumseats);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Northauditoriumseats> put(@RequestBody Northauditoriumseats northauditoriumseats, @PathVariable Integer id) {
        Optional<Northauditoriumseats> oNorthauditoriumseats = northauditoriumseatsRepository.findById(id);
        if (oNorthauditoriumseats.isPresent()) {
            northauditoriumseats.setId(id);
            return ResponseEntity.ok(northauditoriumseatsRepository.save(northauditoriumseats));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Northauditoriumseats> oNorthauditoriumseats = northauditoriumseatsRepository.findById(id);
        if (oNorthauditoriumseats.isPresent()) {
            northauditoriumseatsRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}