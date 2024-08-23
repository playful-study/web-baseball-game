package number;

import com.fasterxml.jackson.databind.ObjectMapper;
import number.adapter.in.dto.AddUserDTORequest;
import number.adapter.in.web.controller.UserController;
import number.application.AddUserService;
import number.application.GetRankedUserService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

@WebMvcTest(controllers = UserController.class)
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private AddUserService addUserService;

    @MockBean
    private GetRankedUserService getRankedUserService;

    @DisplayName("회원을 등록한다")
    @Test
    void addUser() throws Exception {
        // given
        AddUserDTORequest request = AddUserDTORequest.builder().nickname("khan")
                .password("1234")
                .checkPassword("1234")
                .build();

        // when  // then
        mockMvc.perform(MockMvcRequestBuilders.post("/users")
                        .content(objectMapper.writeValueAsString(request))
                        .contentType(MediaType.APPLICATION_JSON)
        )
                .andExpect(MockMvcResultMatchers.status().isOk());
    }
}
