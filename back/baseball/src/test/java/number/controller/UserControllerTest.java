package number.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import number.adapter.out.persistence.repository.UserRepository;
import number.config.TestAppConfig;
import number.adapter.in.dto.AddUserDTORequest;
import number.adapter.in.web.controller.UserController;
import number.adapter.out.persistence.entity.UserEntity;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
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

    @Autowired
    private UserRepository userRepository;


    @MockBean
    private UserEntity userEntity;

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
                .andExpect(MockMvcResultMatchers.status().isOk());
    }
}
