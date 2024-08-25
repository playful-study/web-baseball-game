package number.service;

import number.adapter.dto.response.RankedUsersResponse;
import number.application.command.GetRankedUserCommand;
import number.application.port.in.GetRankedUserUseCase;
import number.domain.User;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class GetRankedServiceTest {

    @Autowired
    private GetRankedUserUseCase getRankedUserUseCase;


    @DisplayName("Controller 가 Command 넘기면 Repository 에서 RankedUsersResponse 반환")
    @Test
    void transferCommand() {
        GetRankedUserCommand command = new GetRankedUserCommand("khan");
        User user = getRankedUserUseCase.getMyRanking(command);
        List<User> rankedUsers = getRankedUserUseCase.getRankedUsers();
        RankedUsersResponse response = new RankedUsersResponse(user, rankedUsers);
        Assertions.assertThat(response).isNotNull();
    }

}
