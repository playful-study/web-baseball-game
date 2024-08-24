package number.application.port.in;

import number.adapter.out.persistence.response.RankedUsersResponse;
import number.adapter.out.persistence.response.UserResponse;
import number.application.command.GetRankedUserCommand;
import number.domain.User;

import java.util.List;

public interface GetRankedUserUseCase {
    RankedUsersResponse getRankedUsers(GetRankedUserCommand command);

}
