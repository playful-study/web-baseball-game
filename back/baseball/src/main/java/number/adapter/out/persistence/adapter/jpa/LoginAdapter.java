package number.adapter.out.persistence.adapter.jpa;

import lombok.RequiredArgsConstructor;
import number.adapter.dto.response.UserResponse;
import number.adapter.out.persistence.entity.UserEntity;
import number.adapter.out.persistence.repository.UserRepository;
import number.application.command.LoginCommand;
import number.application.port.out.LoginPort;
import number.domain.User;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class LoginAdapter implements LoginPort {

    private final UserRepository userRepository;

    @Override
    public UserResponse loginByNickname(LoginCommand command) {
        String nickname = command.nickname();
        String password = command.password();

        UserEntity userEntity = userRepository.findByNickname(nickname)
                .filter(u -> u.getPassword().equals(password))
                .orElse(null);

        return UserResponse.from(userEntity);

    }
}
