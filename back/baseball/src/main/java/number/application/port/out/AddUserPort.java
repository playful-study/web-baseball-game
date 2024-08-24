package number.application.port.out;

import number.adapter.out.persistence.response.UserResponse;
import number.domain.User;

public interface AddUserPort {
    UserResponse save(User user);
}
