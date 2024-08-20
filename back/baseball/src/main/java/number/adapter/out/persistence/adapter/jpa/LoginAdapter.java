package number.adapter.out.persistence.adapter.jpa;

import lombok.RequiredArgsConstructor;
import number.adapter.out.persistence.repository.UserRepository;
import number.application.port.out.LoginPort;
import number.domain.User;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class LoginAdapter implements LoginPort {

    private final UserRepository userRepository;

    @Override
    public User getUserByNickname(String nickname) {
        return null;
    }
}
