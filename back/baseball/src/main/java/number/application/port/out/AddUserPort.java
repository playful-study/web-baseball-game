package number.application.port.out;

import number.domain.User;

public interface AddUserPort {
    void save(User user);
}
