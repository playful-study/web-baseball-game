package number.application.command;

import number.adapter.in.dto.AddUserDTO;
import number.application.exception.CommandBindingException;


public record AddUserCommand(String nickname, String password, String checkPassword) {

    public static AddUserCommand from(AddUserDTO dto) {

        if (dto.password().equals(dto.checkPassword())) {
            return new AddUserCommand(dto.nickname(), dto.password(),
                    dto.checkPassword());
        }
        throw new CommandBindingException();
    }
}
