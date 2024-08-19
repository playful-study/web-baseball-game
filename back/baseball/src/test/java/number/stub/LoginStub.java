package number.stub;

import number.adapter.in.web.login.Login;
import number.domain.Member;

public class LoginStub {

    public static Member login(@Login Member loginMember) {
        return loginMember;
    }
}