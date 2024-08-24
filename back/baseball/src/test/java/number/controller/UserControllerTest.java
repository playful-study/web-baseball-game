package number.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.servlet.http.Cookie;
import number.adapter.in.dto.AddUserDTORequest;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

//
//@ExtendWith(SpringExtension.class)
//@ContextConfiguration(classes = TestAppConfig.class)
@AutoConfigureMockMvc
@SpringBootTest
//@WebMvcTest(controllers = UserController.class)
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;


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
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.nickname").value("khan"));
    }

    @DisplayName("랭크 탑10 까지 + 자기자신 랭크를 확인한다")
    @Test
    void getRankedUsers() throws Exception {
        // given
        Cookie myCookie = new Cookie("loginUser", "1");

        // when // then
        mockMvc.perform(MockMvcRequestBuilders.get("/users")
                        .cookie(myCookie))
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.user.nickname").value("khan"));
    }
}
