package number.adapter.in.web.controller;

import lombok.RequiredArgsConstructor;
import number.adapter.dto.response.PVERoomResponse;
import number.application.port.in.AddPVERoomUseCase;
import number.application.port.in.GetPVERoomsUseCase;
import number.domain.PVERoom;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/pve/room")
public class PVERoomController {

    // create, read, update, delete
    private final AddPVERoomUseCase addPVERoomUseCase;
    private final GetPVERoomsUseCase getPVERoomsUseCase;

    @PostMapping
    public ResponseEntity<PVERoomResponse> createGameRoom(@CookieValue("loginUser") String nickname) {
        PVERoom pveRoom = addPVERoomUseCase.addPVERoom(nickname);
        PVERoomResponse response = PVERoomResponse.builder().build();
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<PVERoomResponse>> getGameRooms() {
        List<PVERoom> pveRooms = getPVERoomsUseCase.getPVERooms();
        List<PVERoomResponse> responses = pveRooms.stream()
                .map(r -> PVERoomResponse.builder().build())
                .toList();
        return ResponseEntity.ok(responses);
    }



}
