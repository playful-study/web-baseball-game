package number.adapter.in.web.controller;

import jakarta.servlet.http.Cookie;
import lombok.RequiredArgsConstructor;
import number.adapter.dto.response.UserResponse;
import number.adapter.dto.request.LoginRequest;
import number.application.command.LoginCommand;
import number.application.port.in.LoginUseCase;
import number.application.port.in.LogoutUseCase;
import number.domain.User;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


import static number.adapter.in.web.WebConstant.URI_HOME;

@RequiredArgsConstructor
@RestController
public class LoginController {

    private final LoginUseCase loginUseCase;
    private final LogoutUseCase logoutUseCase;


    @PostMapping("/login")
    public ResponseEntity<Object> login(@RequestBody LoginRequest loginRequest) {

        LoginCommand loginCommand = new LoginCommand(loginRequest.nickname(), loginRequest.password());
        User user = loginUseCase.login(loginCommand);

        if (user == null) {
            return ResponseEntity.badRequest()
                    .header(HttpHeaders.LOCATION, URI_HOME + "/login")
                    .body("로그인 실패!");
        }
        UserResponse userResponse = UserResponse.from(user);
        Cookie cookie = createCookie(userResponse.nickname());

        return ResponseEntity.ok()
                .header(HttpHeaders.SET_COOKIE, cookie.toString())
                .body(userResponse);
    }

    private static Cookie createCookie(String nickname) {
        Cookie cookie = new Cookie("loginUser", nickname);
        cookie.setSecure(true);
        cookie.setHttpOnly(true);
        cookie.setMaxAge(-1);
        return cookie;
    }
}
