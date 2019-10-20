/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.ctr.controllers;

import hu.elte.ctr.entities.Visitor;
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
import hu.elte.ctr.repositories.VisitorRepository;

/**
 *
 * @author Betűmix
 */
@RestController
@RequestMapping("/visitors")
public class VisitorController {

    @Autowired
    private VisitorRepository visitorRepository;

    @GetMapping("")
    public ResponseEntity<Iterable<Visitor>> getAll() {
        return ResponseEntity.ok(visitorRepository.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Visitor> get(@PathVariable Integer id) {
        Optional<Visitor> visitor = visitorRepository.findById(id);
        if (visitor.isPresent()) {
            return ResponseEntity.ok(visitor.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("")
    public ResponseEntity<Visitor> post(@RequestBody Visitor visitor) {
        Visitor savedVisitor = visitorRepository.save(visitor);
        return ResponseEntity.ok(savedVisitor);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Visitor> put(@RequestBody Visitor visitor, @PathVariable Integer id) {
        Optional<Visitor> oVisitor = visitorRepository.findById(id);
        if (oVisitor.isPresent()) {
            visitor.setId(id);
            return ResponseEntity.ok(visitorRepository.save(visitor));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Visitor> oVisitor = visitorRepository.findById(id);
        if (oVisitor.isPresent()) {
            visitorRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}