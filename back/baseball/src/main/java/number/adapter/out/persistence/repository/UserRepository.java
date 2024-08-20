package number.adapter.out.persistence.repository;

import number.adapter.out.persistence.entity.UserEntity;
import number.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    @Query("select u.name, (u.win/(u.win + u.lose)) * 100 as rate from user u order by rate desc limit 15")
    List<User> findRankedUsers();
}
