package number.stub;

import number.adapter.in.web.login.Login;
import number.domain.User;

public class LoginStub {

    public static User login(@Login User loginUser) {
        return loginUser;
    }
}