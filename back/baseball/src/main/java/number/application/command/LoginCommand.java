package number.application.command;

import lombok.Getter;

public record LoginCommand(String nickname, String password) {

}
