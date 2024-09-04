package number.adapter;

import lombok.RequiredArgsConstructor;
import number.adapter.dto.request.ChatRequest;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class ChatPublisher {

    private final RedisTemplate<String, Object> template;


    public void publish(ChannelTopic topic, ChatRequest chatRequest) {
        template.convertAndSend(topic.getTopic(), chatRequest);
    }

    public void publish(ChannelTopic topic, String message) {
        template.convertAndSend(topic.getTopic(), message);
    }

}
