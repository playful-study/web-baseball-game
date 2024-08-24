package number.adapter.out.persistence.repository;

import number.adapter.in.dto.AddUserDTOResponse;
import number.adapter.out.persistence.entity.UserEntity;
import number.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {

    @Query(value = "select u.nickname, (u.win/(u.win + u.lose)) * 100 as rate from user_entity u order by rate desc limit 15", nativeQuery = true)
    List<AddUserDTOResponse> findRankedUsers();

    UserEntity findByNickname(String nickname);
}
