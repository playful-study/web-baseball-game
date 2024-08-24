package number.application.port.in;

import number.adapter.dto.response.RankedUsersResponse;
import number.application.command.GetRankedUserCommand;

public interface GetRankedUserUseCase {
    RankedUsersResponse getRankedUsers(GetRankedUserCommand command);

}
