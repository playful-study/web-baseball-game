package number;

import number.domain.Member;
import number.stub.LoginStub;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

public class LoginTest {

    @Test
    @DisplayName("로그인 애노테이션 확인")
    public void loginAnnotationTest() {
        Member member = new Member(1L, "khan", "1234", 0, 0);
    }
}
