package number;

import number.adapter.in.dto.LoginDTO;
import number.adapter.in.web.controller.LoginController;
import number.adapter.in.web.login.Login;
import number.domain.User;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

public class LoginTest {

    @RestController
    static class TestController {

        @PostMapping("/login")
        User login(@Login LoginDTO loginDTO) {
            return;
        }
    }

    MockMvc mockMvc;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(new LoginController()).build();
    }

    @Nested
    @DisplayName("로그인 애노테이션 테스트")
    class loginAnnotationTest {

        @Test
        @DisplayName("애노테이션 작동 테스트")
        void annotationTest() {

        }
    }

}
