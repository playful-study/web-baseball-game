package number.application.port.out;

import number.adapter.dto.response.UserResponse;
import number.domain.User;

public interface AddUserPort {
    UserResponse save(User user);
}
