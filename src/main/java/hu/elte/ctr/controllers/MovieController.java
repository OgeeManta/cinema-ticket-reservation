/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.ctr.controllers;

import hu.elte.ctr.entities.Movie;
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
import hu.elte.ctr.repositories.MovieRepository;
import hu.elte.ctr.repositories.ScreeningRepository;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 *
 * @author KeresztiKrisztián
 */
@CrossOrigin
@RestController
@RequestMapping("/movies")
public class MovieController {
    
  @Autowired
  private MovieRepository movieRepository;
  
  @GetMapping("")
  public ResponseEntity<Iterable<Movie>> getAll() {
    return ResponseEntity.ok(movieRepository.findAll());
  }

  @GetMapping("/{id}")
  public ResponseEntity<Movie> get(@PathVariable Integer id) {
    Optional<Movie> mov = movieRepository.findById(id);
    if (!mov.isPresent())
    {
      ResponseEntity.notFound();
    }
    
    return ResponseEntity.ok(mov.get());
  }

  @PostMapping("/admin")
  @Secured({ "ROLE_ADMIN" })
  public ResponseEntity<Movie> post(@RequestBody Movie mov) {
    Movie newMov = movieRepository.save(mov);
    return ResponseEntity.ok(newMov);
  }
  
  @DeleteMapping("/admin/{id}")
  @Secured({ "ROLE_ADMIN" })
  public ResponseEntity delete(@PathVariable Integer id) {
    Optional<Movie> mov = movieRepository.findById(id);
    if (!mov.isPresent())
    {
      ResponseEntity.notFound();
    }
    movieRepository.delete(mov.get());
    return ResponseEntity.ok().build();
  }

  @PutMapping("/admin/{id}")
  @Secured({ "ROLE_ADMIN" })
  public ResponseEntity<Movie> put(@PathVariable Integer id, @RequestBody Movie mov) {
    Optional<Movie> oldMov = movieRepository.findById(id);
    if (!oldMov.isPresent())
    {
      ResponseEntity.notFound();
    }
    mov.setId(id);
    return ResponseEntity.ok(movieRepository.save(mov));
  }
}