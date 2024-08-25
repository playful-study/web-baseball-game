package number.adapter.out.persistence.adapter.jpa;

import lombok.RequiredArgsConstructor;
import number.adapter.out.persistence.entity.UserEntity;
import number.adapter.out.persistence.repository.UserJdbcRepository;
import number.adapter.out.persistence.repository.UserRepository;
import number.adapter.dto.response.RankedUsersResponse;
import number.adapter.dto.response.UserResponse;
import number.application.port.out.GetRankedUserPort;
import org.springframework.stereotype.Repository;

import java.util.List;

@RequiredArgsConstructor
@Repository
public class GetRankedUserAdapter implements GetRankedUserPort {

    private final UserRepository userRepository;
    private final UserJdbcRepository userJdbcRepository;

    @Override
    public RankedUsersResponse getRankedUsers(String nickname) {
        UserEntity userEntity = userRepository.findByNickname(nickname).orElse(null);
        List<UserEntity> rankedEntities = userJdbcRepository.findRankedUsers();


        UserResponse userResponse = UserResponse.from(userEntity);
        List<UserResponse> rankedUsersResponses = rankedEntities.stream()
                .map(UserResponse::from)
                .toList();

        return new RankedUsersResponse(userResponse, rankedUsersResponses);
    }
}
