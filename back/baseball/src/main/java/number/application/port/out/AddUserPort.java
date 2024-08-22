package number.application.port.out;

import number.domain.User;

public interface AddUserPort {
    User save(User user);
}
