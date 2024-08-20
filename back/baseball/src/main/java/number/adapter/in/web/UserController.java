package number.adapter.in.web;

import lombok.RequiredArgsConstructor;
import number.adapter.in.dto.AddUserDTO;
import number.application.command.AddUserCommand;
import number.application.command.GetRankedUserCommand;
import number.application.port.in.AddUserUseCase;
import number.application.port.in.GetRankedUserUseCase;
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
    public void addMember(@RequestBody AddUserDTO addUserDTO) {

        AddUserCommand command = AddUserCommand.builder()
                .nickname(addUserDTO.getNickname())
                .password(addUserDTO.getPassword())
                .build();
        addUserUseCase.addUser(command);
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> getRankedMember() {
        GetRankedUserCommand command = new GetRankedUserCommand();
        List<User> rankedUsers = getRankedUserUseCase.getRankedUsers(command);
        return ResponseEntity.ok(rankedUsers);
    }
}
