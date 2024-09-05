package number.application.port.in;

import number.domain.PVERoom;

import java.util.List;

public interface GetPVERoomsUseCase {
    List<PVERoom> getPVERooms();
}
