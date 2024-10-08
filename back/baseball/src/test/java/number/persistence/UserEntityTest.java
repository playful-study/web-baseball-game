package number.persistence;

import number.adapter.dto.request.AddUserDTORequest;
import number.adapter.dto.response.UserResponse;
import number.adapter.out.persistence.entity.UserEntity;
import number.adapter.out.persistence.repository.UserRepository;
import number.application.command.AddUserCommand;
import number.domain.User;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class UserEntityTest {

    @Autowired
    private UserRepository userRepository;



    @DisplayName("User -> UserEntity 변환 테스트")
    @Test
    void userEntityConvert() {
        AddUserCommand command = new AddUserCommand("khan", "1234");
        UserEntity userEntity = UserEntity.from(command);
        Assertions.assertThat(userEntity.getNickname()).isEqualTo("khan");  // userId = null 인 상태
    }

    @DisplayName("UserEntity -> UserRepository -> User 변환 테스트")
    @Test
    void userConvert() {
        UserEntity userEntity = new UserEntity(null, "khan", "1234", 0, 0, 0, 0L);
        userRepository.save(userEntity);
        User user = User.from(userEntity);
        Assertions.assertThat(user.getNickname()).isEqualTo("khan");
    }


}
