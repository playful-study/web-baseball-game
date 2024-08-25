package number.adapter.out.persistence.adapter.jpa;

import lombok.RequiredArgsConstructor;
import number.adapter.out.persistence.entity.UserEntity;
import number.adapter.out.persistence.repository.UserJdbcRepository;
import number.adapter.out.persistence.repository.UserRepository;
import number.adapter.dto.response.RankedUsersResponse;
import number.adapter.dto.response.UserResponse;
import number.application.port.out.GetRankedUserPort;
import number.domain.User;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.stream.Stream;

@RequiredArgsConstructor
@Repository
public class GetRankedUserAdapter implements GetRankedUserPort {

    private final UserRepository userRepository;
    private final UserJdbcRepository userJdbcRepository;

    @Override
    public List<User> getRankedUsers() {
        List<UserEntity> rankedEntities = userJdbcRepository.findRankedUsers();
        return rankedEntities.stream().map(User::from).toList();
    }


    @Override
    public User getMyRanking(String nickname) {
        UserEntity userEntity = userRepository.findByNickname(nickname).orElse(null);
        if (userEntity == null) {
            return null;
        }
        return User.from(userEntity);
    }
}
