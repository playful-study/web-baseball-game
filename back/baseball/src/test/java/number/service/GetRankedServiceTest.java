package number.service;

import number.adapter.out.persistence.response.RankedUsersResponse;
import number.adapter.out.persistence.response.UserResponse;
import number.application.command.AddUserCommand;
import number.application.command.GetRankedUserCommand;
import number.application.port.in.AddUserUseCase;
import number.application.port.in.GetRankedUserUseCase;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class GetRankedServiceTest {

    @Autowired
    private GetRankedUserUseCase getRankedUserUseCase;


    @DisplayName("Controller 가 Command 넘기면 Repository 에서 RankedUsersResponse 반환")
    @Test
    void transferCommand() {
        GetRankedUserCommand command = new GetRankedUserCommand(1L);
        RankedUsersResponse response = getRankedUserUseCase.getRankedUsers(command);
        Assertions.assertThat(response).isNotNull();
    }

}
