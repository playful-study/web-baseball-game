package number.application.response;

import number.application.command.AddUserCommand;

public record UserResponse(String nickname, String password) {

    public static UserResponse from(AddUserCommand command) {
        return new UserResponse(command.nickname(), command.password());
    }
}
