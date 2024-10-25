package com/example/hotelmanagement.repositories;

import com/example/hotelmanagement.entities.Review;
import com/example/hotelmanagement.entities.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByHotel(Hotel hotel);
}
