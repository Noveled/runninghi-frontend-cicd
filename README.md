# Running Hi FrontEnd
<div align="center">
<h2>[2024] RunningHi - Frontend </h2>
</div>

코드랩 AICC 3기 1차 팀 프로젝트로 진행된 리액트 기반 웹 서비스 RunningHi의 프론트엔드 페이지입니다. 다른 팀으로 부터 `Runnect`와 같은 서비스를 만들어달란 요청을 받았으며 이를 기반으로 기능을 구성했습니다. 사용자는 지도 위에 마커를 등록하여 러닝 코스를 만들고, 다른 사람들과 공유할 수 있는 기능을 제공합니다.<br>
이 프로젝트는 [Runnect](https://github.com/Runnect/Runnect-Android) 프로젝트를 참고하여 제작되었습니다. <br>
RunningHi의 Backend가 궁금하다면?
- **Backend Repository**: [RunningHi Backend](https://github.com/Noveled/runninghi-backend-cicd)

## 목차
- [프로젝트 개요](#프로젝트-개요)
- [기능 설명](#기능-설명)
- [주요 기능 설명](#주요-기능-설명)
- [CI/CD 플로우 차트](#ci-cd-플로우-차트)
- [오류 보고](#오류-보고)
- [레퍼런스](#레퍼런스)

---

## 프로젝트 개요
https://github.com/user-attachments/assets/b0589d2b-3431-4736-846e-cd77446f92f5

- **프로젝트 이름**: RunningHi - Frontend
- **프로젝트 기간**: 2024.08.20 - 2024.09.20
- **사용 기술**: `React` `Redux` `Javascript` `PostgreSQL` `Public API`
- **팀 구성**: 김민식(팀장), 강민주, 손주현

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Noveled">
        <img src="https://github.com/Noveled.png" width="100px;" alt="김민식"/><br />
        <sub><b>김민식</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/mjk2024-dementia">
        <img src="https://github.com/mjk2024-dementia.png" width="100px;" alt="강민주"/><br />
        <sub><b>강민주</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/sonjuhyeon">
        <img src="https://github.com/sonjuhyeon.png" width="100px;" alt="손주현"/><br />
        <sub><b>손주현</b></sub>
      </a>
    </td>
  </tr>
</table>

- **Demo Link**: [RunningHi Frontend](https://runningfront.siinat.com/)
**아이폰 12 pro 디바이스 화면을 기준으로 제작되었습니다. 크롬 설정창을 이용해 설정을 바꿔주세요!**
---

## 기능 설명
RunningHi 프론트엔드에서는 다음과 같은 주요 기능들을 제공합니다:

1. **사용자 인증**: 로그인 및 회원가입 기능을 통해 사용자가 서비스를 이용할 수 있습니다.
2. **코스 관리**: 사용자는 지도 위에 마커를 등록하고, 등록된 코스를 수정하거나 삭제할 수 있습니다.
3. **편의시설 검색 및 필터링**: 주변 편의시설을 지도에서 조회하고, 필터링 기능을 통해 원하는 시설을 검색할 수 있습니다.
4. **상태 관리**: Redux를 통해 사용자 정보, 지도 API 데이터, 인증 상태 등을 전역적으로 관리합니다.

---

## 주요 기능 설명

|https://github.com/user-attachments/assets/56a57ca7-08c4-4c03-946d-18a4f052834b|https://github.com/user-attachments/assets/31a9302d-cf67-4f6c-86a4-9b6bdecf26c3|
|:---:|:---:|
|**코스 등록 화면**|**코스정보 수정 화면**|

- **코스 등록**: 지도에 마커를 표시하고, 정보를 입력하여 러닝 코스를 등록할 수 있습니다. 사용자가 코스를 등록할 때, 마커를 추가할 때마다 경로가 누적되며 지도에 표시됩니다.
- **코스 수정**: 등록한 코스를 수정할 수 있습니다. 기존 정보를 미리 보여주고 필요한 부분만 업데이트합니다.
- **코스 삭제**: 등록된 코스를 삭제할 수 있으며, 삭제된 코스는 DB에서 검색되지 않지만 좋아요 등을 등록한 사용자는 확인이 가능합니다.

### 편의시설 검색 및 필터링
https://github.com/user-attachments/assets/be17ebb1-8e54-4bc5-8fc6-de62580d6cfb
주변 편의시설을 지도에서 조회하고, 필터링 기능을 통해 원하는 시설을 검색할 수 있습니다.

- **버튼 클릭시 애니메이션** : 모바일기기 특성 상 호버 액션을 사용할 수 없어서 클릭 효과를 주기 위해 애니메이션을 추가하였습니다.
|https://github.com/user-attachments/assets/1c1fb456-e88e-4f08-831d-68568ceed4bc|https://github.com/user-attachments/assets/92d2dfa7-369e-486b-9f4a-9f37a8231939|
|:---:|:---:|
|**네비게이션 바 애니메이션**|**버튼 클릭 애니메이션**|

---

## CI/CD 플로우 차트

|![CI/CD Flowchart](https://github.com/Noveled/runninghi-frontend-cicd/blob/main/docs/images/rinninghi_cicd01.PNG)|![CI/CD Flowchart 2](https://github.com/Noveled/runninghi-frontend-cicd/blob/main/docs/images/rinninghi_cicd02.PNG)|
|:---:|:---:|
|**CI/CD Flowchart**|**CI/CD Flowchart 2**|

GitHub Actions와 AWS EC2를 사용하여 CI/CD를 관리하며, 자동 배포 및 테스트를 수행합니다. 자세한 과정은 [신나 티스토리 블로그](#)에서 확인할 수 있습니다.

---

## 오류 보고

### 해결 완료
- **화면전환 시 맵 정보 초기화 현상**: 지도 정보를 Redux로 관리하여 화면 전환 시 지도가 다시 그려지지 않도록 수정하였습니다. 향후 리팩토링을 진행한다면 하나의 맵 위에 다른 컴포넌트를 덮어 그리는 식으로 수정할 예정입니다.
- **코스 수정 시 마커 제거 불가 문제**: 메모리 상에서는 마커가 제거되었지만, 실제 맵 상에서 이미지가 남아있는 문제가 지속되었습니다.

### 해결 미완료
- **마커 간 거리 계산 문제**: 카카오 지도 API Docs를 참고하여 수정 가능성을 확인하였으나, 우선순위에서 밀려 프로젝트 말기까지 해결되지 않았습니다.
- **EC2 인스턴스 재부팅 시 Public IP 변경 문제**: Elastic IP 할당 방식을 고려하여 문제를 해결할 예정입니다.

---

## 레퍼런스
- **Runnect**: [링크](https://github.com/Runnect/Runnect-Android)
- **React 이미지 업로드**: [링크](https://velog.io/@wns2252/React-%EB%A1%9C-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C-%ED%95%98%EA%B8%B0)
