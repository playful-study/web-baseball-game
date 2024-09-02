package number.adapter.in.web.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/room")
@RestController
public class ChatRoomController {

    @PostMapping("/create")
    public ResponseEntity createChatRoom() {

        return ResponseEntity.ok().build();
    }

    @GetMapping("/")
    public ResponseEntity getChatRoom() {

        return ResponseEntity.ok().build();
    }



}
