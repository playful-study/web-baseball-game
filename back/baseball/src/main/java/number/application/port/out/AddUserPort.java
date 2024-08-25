package number.application.port.out;

import number.adapter.dto.response.UserResponse;
import number.application.command.AddUserCommand;
import number.domain.User;

public interface AddUserPort {
    User save(AddUserCommand command);
}
