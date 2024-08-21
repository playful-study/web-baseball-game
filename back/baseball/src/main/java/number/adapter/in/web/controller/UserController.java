package number.adapter.in.web.controller;

import lombok.RequiredArgsConstructor;
import number.adapter.in.dto.AddUserDTO;
import number.application.command.AddUserCommand;
import number.application.command.GetRankedUserCommand;
import number.application.port.in.AddUserUseCase;
import number.application.port.in.GetRankedUserUseCase;
import number.application.response.UserResponse;
import number.domain.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final AddUserUseCase addUserUseCase;
    private final GetRankedUserUseCase getRankedUserUseCase;

    @PostMapping("/users")
    public ResponseEntity<String> addUser(@RequestBody AddUserDTO addUserDTO) {

        AddUserCommand command = AddUserCommand.from(addUserDTO);
        User user = addUserUseCase.addUser(command);
        return ResponseEntity.ok(user.getNickname());
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getRankedMember() {

        GetRankedUserCommand command = new GetRankedUserCommand();
        List<User> rankedUsers = getRankedUserUseCase.getRankedUsers(command);
        return ResponseEntity.ok(rankedUsers);
    }
}
