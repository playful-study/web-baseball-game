package number.adapter.in.web.controller;

import lombok.RequiredArgsConstructor;
import number.adapter.in.dto.AddUserDTORequest;
import number.adapter.out.persistence.response.RankedUsersResponse;
import number.adapter.out.persistence.response.UserResponse;
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
        UserResponse userResponse = addUserUseCase.addUser(command);

        return ResponseEntity.ok(userResponse);
    }

    @GetMapping("/users")
    public ResponseEntity<RankedUsersResponse> getRankedUsers(@CookieValue("loginUser") String userId) {
        GetRankedUserCommand command = GetRankedUserCommand.from(userId);
        RankedUsersResponse rankedResponses = getRankedUserUseCase.getRankedUsers(command);

        return ResponseEntity.ok(rankedResponses);
    }
}
