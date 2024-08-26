package number.application.port.in;

import number.adapter.dto.response.RankedUsersResponse;
import number.application.command.GetRankedUserCommand;
import number.domain.User;

import java.util.List;

public interface GetRankedUserUseCase {
    List<User> getRankedUsers();
    User getMyRanking(GetRankedUserCommand command);

}
