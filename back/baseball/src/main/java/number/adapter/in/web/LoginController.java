package number.adapter.in.web;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import number.adapter.in.dto.LoginDTO;
import number.application.command.LoginCommand;
import number.application.port.in.LoginUseCase;
import number.application.port.in.LogoutUseCase;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class LoginController {

    private final LoginUseCase loginUseCase;
    private final LogoutUseCase logoutUseCase;


    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginDTO loginDTO, HttpServletResponse resp) {

        LoginCommand loginCommand = new LoginCommand(loginDTO.nickname(), loginDTO.password());
        if (loginUseCase.login(loginCommand)) {
            Cookie cookie = new Cookie("loginUser", loginDTO.nickname());
            resp.addCookie(cookie);
            return ResponseEntity.ok(loginDTO);
        }
        return ResponseEntity.
    }
}
