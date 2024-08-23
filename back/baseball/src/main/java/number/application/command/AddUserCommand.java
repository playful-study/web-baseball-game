package number.application.command;

import number.adapter.in.dto.AddUserDTORequest;
import number.application.exception.CommandBindingException;


public record AddUserCommand(String nickname, String password) {

    public static AddUserCommand from(AddUserDTORequest dto) {

        if (dto.password().equals(dto.checkPassword())) {
            return new AddUserCommand(dto.nickname(), dto.password());
        }
        throw new CommandBindingException();
    }
}
