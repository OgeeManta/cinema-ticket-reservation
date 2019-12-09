/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.ctr.controllers;

import hu.elte.ctr.entities.Auditorium;
import hu.elte.ctr.entities.Movie;
import hu.elte.ctr.entities.Screening;
import hu.elte.ctr.repositories.AuditoriumRepository;
import hu.elte.ctr.repositories.MovieRepository;
import hu.elte.ctr.repositories.ReservationRepository;
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
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 *
 * @author Betűmix
 */
@CrossOrigin
@RestController
@RequestMapping("/screenings")
public class ScreeningController {

    @Autowired
    private ScreeningRepository screeningRepository;
    
    @Autowired
    private MovieRepository movieRepository;
    
    @Autowired
    private ReservationRepository reservationRepository;
    
    @Autowired
    private AuditoriumRepository auditoriumRepository;

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

    @PostMapping("/admin/{auditorium_id}/{movie_id}")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Screening> post(@PathVariable Integer auditorium_id, @PathVariable Integer movie_id, @RequestBody Screening screening) {
        Optional<Auditorium> oAuditorium = auditoriumRepository.findById(auditorium_id);
        Optional<Movie> oMovie = movieRepository.findById(movie_id);
        if (oAuditorium.isPresent() && oMovie.isPresent()) {
            Auditorium auditorium = oAuditorium.get();
            Movie movie = oMovie.get();
            screening.setAuditorium(auditorium);
            screening.setMovie(movie);
            return ResponseEntity.ok(screeningRepository.save(screening));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PutMapping("/admin/{id}")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Screening> put(@RequestBody Screening screening, @PathVariable Integer id) {
        Optional<Screening> oScreening = screeningRepository.findById(id);
        if (oScreening.isPresent()) {
            Auditorium auditorium = oScreening.get().getAuditorium();
            Movie movie = oScreening.get().getMovie();
            screening.setAuditorium(auditorium);
            screening.setMovie(movie);
            screening.setId(id);
            return ResponseEntity.ok(screeningRepository.save(screening));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/admin/{id}")
    @Secured({ "ROLE_ADMIN" })
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