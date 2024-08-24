package number.application.command;

import number.application.exception.CommandBindingException;

public record GetRankedUserCommand(Long userId) {

    public static GetRankedUserCommand from(String userId) {

        try {
            Long id = Long.parseLong(userId);
            return new GetRankedUserCommand(id);
        } catch (NumberFormatException e) {
            e.printStackTrace();
            throw new CommandBindingException();
        }
    }
}
