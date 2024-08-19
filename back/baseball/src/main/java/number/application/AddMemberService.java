package number.application;

import number.application.command.AddMemberCommand;
import number.application.port.in.AddMemberUseCase;

public class AddMemberService implements AddMemberUseCase {
    @Override
    public boolean addMember(AddMemberCommand addMemberCommand) {
        return false;
    }
}
