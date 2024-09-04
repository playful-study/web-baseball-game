package number.domain;


import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Chat {

    private String channelId;
    private String sender;
    private String content;
}
