package number.application.port.in;

import number.application.command.AddMemberCommand;

public interface AddMemberUseCase {

    boolean addMember(AddMemberCommand addMemberCommand);
}
