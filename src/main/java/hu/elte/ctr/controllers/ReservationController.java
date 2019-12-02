/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.ctr.controllers;

import hu.elte.ctr.entities.Reservation;
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
import hu.elte.ctr.repositories.ReservationRepository;
import hu.elte.ctr.repositories.ScreeningRepository;
import org.springframework.security.access.annotation.Secured;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 *
 * @author Betűmix
 */
@CrossOrigin
@RestController
@RequestMapping("/reservation")
public class ReservationController {

    @Autowired
    private ReservationRepository reservationRepository;
    
    @Autowired
    private ScreeningRepository screeningRepository;

    @GetMapping("")
    //@Secured({ "ROLE_USER", "ROLE_ADMIN" })
    public ResponseEntity<Iterable<Reservation>> getAll() {
        return ResponseEntity.ok(reservationRepository.findAll());
    }
    
    @PostMapping("/{screening_id}")
    public ResponseEntity<Reservation> post(@RequestBody Reservation reservation, @PathVariable Integer screening_id) {
        Optional<Screening> screening = screeningRepository.findById(screening_id);
        reservation.setScreening(screening.get());
        Reservation savedReservation = reservationRepository.save(reservation);
        return ResponseEntity.ok(savedReservation);
    }

    @GetMapping("/admin/{id}")
    //@Secured({"ROLE_ADMIN" })
    public ResponseEntity<Reservation> get(@PathVariable Integer id) {
        Optional<Reservation> reservation = reservationRepository.findById(id);
        if (reservation.isPresent()) {
            return ResponseEntity.ok(reservation.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
/*
    @PostMapping("/admin")
    @Secured({ "ROLE_ADMIN" })
    public ResponseEntity<Reservation> post(@RequestBody Reservation reservation) {
        Reservation savedReservation = reservationRepository.save(reservation);
        return ResponseEntity.ok(savedReservation);
    }
*/
    @DeleteMapping("/admin/{id}")
    //@Secured({ "ROLE_ADMIN" })
    public ResponseEntity delete(@PathVariable Integer id) {
        Optional<Reservation> oReservation = reservationRepository.findById(id);
        if (oReservation.isPresent()) {
            reservationRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}