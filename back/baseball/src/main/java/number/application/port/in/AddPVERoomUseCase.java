package number.application.port.in;

import number.application.command.AddPVERoomCommand;
import number.domain.PVERoom;

public interface AddPVERoomUseCase {
    PVERoom addPVERoom(String userName);
}
