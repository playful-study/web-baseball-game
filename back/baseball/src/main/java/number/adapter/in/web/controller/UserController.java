package number.adapter.in.web.controller;

import lombok.RequiredArgsConstructor;
import number.adapter.in.dto.AddUserDTORequest;
import number.application.command.AddUserCommand;
import number.application.command.GetRankedUserCommand;
import number.application.port.in.AddUserUseCase;
import number.application.port.in.GetRankedUserUseCase;
import number.domain.User;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final AddUserUseCase addUserUseCase;
    private final GetRankedUserUseCase getRankedUserUseCase;

    @PostMapping("/users")
    public ResponseEntity<String> addUser(@RequestBody AddUserDTORequest addUserDTORequest) {
        AddUserCommand command = AddUserCommand.from(addUserDTORequest);
        User user = addUserUseCase.addUser(command);

        // 이 부분에서 user = null
        return ResponseEntity.ok(user.getNickname());
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getRankedUsers(@CookieValue("loginUser") String userId) {
        GetRankedUserCommand command = GetRankedUserCommand.from(userId);
        List<User> rankedUsers = getRankedUserUseCase.getRankedUsers(command);
        return ResponseEntity.ok(rankedUsers);
    }
}
