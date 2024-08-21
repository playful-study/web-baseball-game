package number.adapter.out.persistence.adapter.jpa;

import lombok.RequiredArgsConstructor;
import number.adapter.out.persistence.entity.UserEntity;
import number.adapter.out.persistence.repository.UserRepository;
import number.application.command.AddUserCommand;
import number.application.port.out.AddUserPort;
import number.domain.User;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class AddUserAdapter implements AddUserPort {

    private final UserRepository userRepository;

    @Override
    public User save(User user) {
        UserEntity userEntity = UserEntity.from(user);
        userRepository.save(userEntity);
        return User.from(userEntity);
    }
}
