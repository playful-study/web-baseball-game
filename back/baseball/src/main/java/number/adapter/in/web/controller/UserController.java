package number.adapter.in.web.controller;

import lombok.RequiredArgsConstructor;
import number.adapter.dto.request.AddUserDTORequest;
import number.adapter.dto.response.RankedUsersResponse;
import number.adapter.dto.response.UserResponse;
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
    public ResponseEntity<UserResponse> addUser(@RequestBody AddUserDTORequest addUserDTORequest) {
        AddUserCommand command = AddUserCommand.from(addUserDTORequest);
        User user = addUserUseCase.addUser(command);
        UserResponse response = UserResponse.from(user);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/users")
    public ResponseEntity<RankedUsersResponse> getRankedUsers(@CookieValue("loginUser") String nickname) {
        GetRankedUserCommand command = GetRankedUserCommand.from(nickname);
        User user = getRankedUserUseCase.getMyRanking(command);
        List<User> rankedUsers = getRankedUserUseCase.getRankedUsers();

        RankedUsersResponse rankedResponses = new RankedUsersResponse(user, rankedUsers);
        return ResponseEntity.ok(rankedResponses);
    }
}
