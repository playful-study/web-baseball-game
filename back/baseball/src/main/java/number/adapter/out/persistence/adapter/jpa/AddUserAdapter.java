package number.adapter.out.persistence.adapter.jpa;

import lombok.RequiredArgsConstructor;
import number.adapter.out.persistence.response.UserResponse;
import number.adapter.out.persistence.entity.UserEntity;
import number.adapter.out.persistence.repository.UserRepository;
import number.application.port.out.AddUserPort;
import number.domain.User;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class AddUserAdapter implements AddUserPort {

    private final UserRepository userRepository;

    @Override
    public UserResponse save(User user) {
        UserEntity userEntity = UserEntity.from(user);
        userRepository.save(userEntity);
        return UserResponse.from(userEntity);
    }
}
