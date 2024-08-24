package number.service;

import number.adapter.out.persistence.adapter.jpa.AddUserAdapter;
import number.application.AddUserService;
import number.application.command.AddUserCommand;
import number.application.port.in.AddUserUseCase;
import number.domain.User;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AddUserServiceTest {

    @Autowired
    private AddUserUseCase addUserUseCase;


    @DisplayName("Controller 가 Command 넘기면 Repository 에서 User 반환")
    @Test
    void transferCommand() {
        AddUserCommand command = new AddUserCommand("khan", "1234");  // 나중에 이거 private 으로 막자
        User user = addUserUseCase.addUser(command);
        Assertions.assertThat(user).isNotNull();
    }

}
