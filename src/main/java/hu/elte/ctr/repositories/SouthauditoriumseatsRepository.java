/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.ctr.repositories;

import hu.elte.ctr.entities.Southauditoriumseats;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author Betűmix
 */
@Repository
public interface SouthauditoriumseatsRepository extends CrudRepository<Southauditoriumseats, Integer> {
    
}
