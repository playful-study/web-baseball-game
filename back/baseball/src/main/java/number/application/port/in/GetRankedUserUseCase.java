package number.application.port.in;

import number.application.command.GetRankedUserCommand;
import number.domain.User;

import java.util.List;

public interface GetRankedUserUseCase {
    List<User> getRankedUsers(GetRankedUserCommand command);

}
