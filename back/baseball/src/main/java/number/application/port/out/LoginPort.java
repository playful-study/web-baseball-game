package number.application.port.out;

import number.domain.User;

public interface LoginPort {

    User getUserByNickname(String nickname);
}
