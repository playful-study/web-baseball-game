package number.adapter.out.persistence.adapter.jpa;

import lombok.RequiredArgsConstructor;
import number.adapter.out.persistence.entity.UserEntity;
import number.adapter.out.persistence.repository.UserJdbcRepository;
import number.adapter.out.persistence.repository.UserRepository;
import number.adapter.out.persistence.response.RankedUsersResponse;
import number.adapter.out.persistence.response.UserResponse;
import number.application.port.out.GetRankedUserPort;
import org.springframework.stereotype.Repository;

import java.util.List;

@RequiredArgsConstructor
@Repository
public class GetRankedUserAdapter implements GetRankedUserPort {

    private final UserRepository userRepository;
    private final UserJdbcRepository userJdbcRepository;

    @Override
    public RankedUsersResponse getRankedUsers(Long userId) {
        UserEntity userEntity = userRepository.findById(userId).orElse(null);
        List<UserEntity> rankedEntities = userJdbcRepository.findRankedUsers();


        UserResponse userResponse = UserResponse.from(userEntity);
        List<UserResponse> rankedUsersResponses = rankedEntities.stream()
                .map(UserResponse::from)
                .toList();

        return new RankedUsersResponse(userResponse, rankedUsersResponses);
    }
}
