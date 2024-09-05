package number.application;

import lombok.RequiredArgsConstructor;
import number.application.port.in.AddPVERoomUseCase;
import number.application.port.in.GetPVERoomsUseCase;
import number.application.port.out.PVERoomPort;
import number.domain.PVERoom;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PVERoomService implements AddPVERoomUseCase, GetPVERoomsUseCase {

//    private final PVERoomPort pveRoomPort;

    @Override
    public PVERoom addPVERoom(String userName) {
//        return pveRoomPort.add(userName);
        return new PVERoom();
    }

    @Override
    public List<PVERoom> getPVERooms() {
//        return pveRoomPort.getPVERooms();
        return List.of();
    }
}
