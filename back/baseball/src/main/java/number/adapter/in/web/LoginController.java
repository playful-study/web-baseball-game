package number.adapter.in.web;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import number.adapter.in.dto.LoginDTO;
import number.application.LoginService;
import number.application.LogoutService;
import number.application.command.LoginCommand;
import number.application.port.in.LoginUseCase;
import number.application.port.in.LogoutUseCase;
import number.domain.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class LoginController {

    private final LoginUseCase loginUseCase;
    private final LogoutUseCase logoutUseCase;

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody LoginDTO loginDTO, HttpServletRequest req) {

        LoginCommand loginCommand = new LoginCommand("1","2");
        if (loginUseCase.login(loginCommand)) {
            HttpSession session = req.getSession(false);
            if (session != null) {
                User user = (User) session.getAttribute("loginUser");
                return ResponseEntity.ok(user);
            }

        }
        return ResponseEntity.ok(User.builder().build());
    }
}
