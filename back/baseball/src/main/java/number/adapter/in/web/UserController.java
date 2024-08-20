package number.adapter.in.web;

import lombok.RequiredArgsConstructor;
import number.application.port.in.AddUserUseCase;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final AddUserUseCase addUserUseCase;

    @PostMapping("/users")
    public void addMember() {

    }

    @GetMapping("/users")
    public void getRankedMember() {

    }
}
