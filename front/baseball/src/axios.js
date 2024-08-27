import Axios from 'axios';

// axios 인스턴스를 생성합니다.
const axios = Axios.create({
  baseURL: 'http://localhost:8080',
//   headers: {
//     'Authorization': 'Bearer yourToken',
//     // 다른 공통 헤더 추가 가능
//   },
  // 다른 기본 설정 추가 가능
});

export default axios;