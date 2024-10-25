package com/example/hotelmanagement.repositories;

import com/example/hotelmanagement.entities.Hotel;
import com/example/hotelmanagement.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface HotelRepository extends JpaRepository<Hotel, Long> {
    List<Hotel> findByOwner(User owner);
}
