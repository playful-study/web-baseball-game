package number.adapter.dto.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChatRequest implements Serializable {

    private static final long serialVersionUID = 1L;

    private String message;
    private String sender;
    private String roomId;
}
