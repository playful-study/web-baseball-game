package number.adapter.in.web.controller;

import lombok.RequiredArgsConstructor;
import number.domain.Chat;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class PVEGameController {

    private final SimpMessageSendingOperations operations;

    @MessageMapping("/")
    public void sendMessage(@Payload Chat chat) {

        operations.convertAndSend("/sub/channel" + chat.getChannelId(), chat);
    }
}
