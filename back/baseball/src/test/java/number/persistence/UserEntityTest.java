package number.persistence;

import number.adapter.in.dto.AddUserDTORequest;
import number.adapter.out.persistence.response.UserResponse;
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

    @DisplayName("AddUserCommand -> User 변환 테스트")
    @Test
    void userCommandConvert() {
        AddUserDTORequest dto = new AddUserDTORequest("khan", "1234", "1234");
        AddUserCommand command = AddUserCommand.from(dto);
        User user = User.from(command);

        Assertions.assertThat(user.getNickname()).isEqualTo("khan");
    }

    @DisplayName("User -> UserEntity 변환 테스트")
    @Test
    void userEntityConvert() {
        User user = new User(1L, "khan", "1234", 0, 0);
        UserEntity userEntity = UserEntity.from(user);
        Assertions.assertThat(userEntity.getNickname()).isEqualTo("khan");  // userId = null 인 상태
    }

    @DisplayName("UserEntity -> UserRepository -> User 변환 테스트")
    @Test
    void userConvert() {
        UserEntity userEntity = new UserEntity(null, "khan", "1234", 0, 0, 0, 0L);
        userRepository.save(userEntity);
        UserResponse userResponse = UserResponse.from(userEntity);
        Assertions.assertThat(userResponse.nickname()).isEqualTo("khan");
    }


}
