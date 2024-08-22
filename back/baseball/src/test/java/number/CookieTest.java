package number;

import jakarta.servlet.http.Cookie;
import number.domain.User;
import org.assertj.core.api.Assertions;
import org.hamcrest.Condition;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.mock.web.MockHttpServletResponse;

import java.util.Arrays;

import static number.adapter.in.web.WebConstant.COOKIE_NAME;

public class CookieTest {

    MockHttpServletRequest req;
    MockHttpServletResponse resp;
    User user;
    Cookie cookie;

    @BeforeEach
    public void setUp() {
        req = new MockHttpServletRequest();
        resp = new MockHttpServletResponse();
        user = new User(1L, "khan", "1234");
        req.setCookies(new Cookie(COOKIE_NAME, user.getNickname())); //name, value 둘다 String

        cookie = Arrays.stream(req.getCookies())
                .filter(c -> c.getValue().equals("khan"))
                .findAny()
                .orElse(null);
    }


    @Test
    @DisplayName("Cookie 인식 테스트")
    public void cookieTest() {
        Cookie cookie = Arrays.stream(req.getCookies())
                .filter(c -> c.getValue().equals("khan"))
                .findAny()
                .orElse(null);

        Assertions.assertThat(cookie.getName()).isEqualTo(COOKIE_NAME);
    }

    @Test
    @DisplayName("로그인 Cookie 테스트")
    public void loginCookieTest() {
        resp.addCookie(cookie);
    }

    @Test
    @DisplayName("로그아웃 Cookie 테스트")
    public void logoutCookieTest() {
        Cookie cookie = new Cookie(COOKIE_NAME, "logout");
        cookie.setMaxAge(0);
        System.out.println(cookie.getName());

    }
}
