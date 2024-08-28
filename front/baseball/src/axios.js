import Axios from 'axios';

// axios 인스턴스를 생성합니다.
const axios = Axios.create({
  baseURL: 'http://localhost:8080', // 서버의 기본 URL을 지정
  withCredentials: true, // 쿠키를 포함해서 요청을 보냄
  headers: {
    // 공통으로 사용할 헤더를 설정
    // 예를 들어 Authorization 헤더를 설정하려면 아래를 사용:
    // 'Authorization': 'Bearer yourToken',
    // 다른 공통 헤더 추가 가능
  },
  // 다른 기본 설정 추가 가능
  //
});

export default axios;
