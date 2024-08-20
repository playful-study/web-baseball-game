package number.adapter.out.persistence.adapter.jpa;

import lombok.RequiredArgsConstructor;
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
    public void save(User user) {
        UserEntity userEntity = UserEntity.builder()
                .id(null)
                .nickname(user.getNickname())
                .password(user.getPassword())
                .win(user.getWin())
                .lose(user.getLose())
                .build();
        userRepository.save(userEntity);
    }
}
