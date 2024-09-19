# Running Hi FrontEnd
<div align="center">
<h2>[2024] RunningHi - frontend 🎮</h2>
코드랩 AICC3기 1차 팀 프로젝트로 진행된 리액트 기반 웹 서비스 RunningHi의 Front 페이지입니다.<br> 사용자는 지도위에 마커를 등록해 러닝 코스를 만들고 다른사람들과 공유할 수 있습니다. 해당 서비스는 다음 프로젝트의 아이디어를 참고하여 제작하였습니다. Runnect[깃허브 링크:https://github.com/Runnect/Runnect-Android] 🍀
</div>

## 목차
  - [개요](#개요) 
  - [서비스 설명](#서비스-설명)
  - [주요 기능 설명](#주요-기능-설명)
  - [CI/CD FLOW CHART](#CI/CD-FLOW-CHART)
  - [Error report](#Error-report)
  - [레퍼런스](#레퍼런스)

## 개요
- 프로젝트 이름: RunningHi - frontend
- 프로젝트 지속기간: 2024.08.20 - 2024.09.20
- 개발 툴 및 언어: React & Javascript + PostgreSQL
- 멤버: 02 팀 [김민식(팀장), 강민주, 손주현]
- Demo Link : https://runningfront.siinat.com/

## 서비스 설명
|![image](https://github.com/Noveled/runninghi-frontend-cicd/blob/main/src/assets/images/Recommend_001.PNG)|![image](https://github.com/Noveled/runninghi-frontend-cicd/blob/main/src/assets/images/Recommend_001.PNG)|
|:---:|:---:|
|매인 화면|코스 등록 화면|

나만이 알고있는 일상속의 러닝 코스를 다른 사람들과 공유할 수 있는 서비스를 만들고자 했습니다.<br>
- 나만의 코스를 등록 ⚔️<br>
RunningHi에선 지도위에 코스를 그리고 설명을 등록할 수 있습니다. 관련있는 사진을 첨부하여 더 효과적으로 코스를 소개할 수 있고 다른사람들과 쉽게 공유할 수 있습니다. 
- 다양한 코스를 검색 🎯<br>
여러가지 카테고리별로 필터링하여 러닝 코스를 검색할 수 있습니다. 지역별 코스, 거리별 코스, 마라톤 코스 등 다양한 코스를 검색해보세요.
- 주변 시설 검색 🏄🏻<br>
러닝의 편의성을 높여주는 주변 시설들을 검색할 수 있습니다. 
- 코스 보관함 👶<br>
코스 보관함을 통해 내가 등록한 코스와 좋아요를 표시한 코스(추가 개발 예정)를 모아서 볼 수 있습니다.

## 주요 기능 설명
- 코스 등록 및 수정 삭제

|![image](https://github.com/Noveled/runninghi-frontend-cicd/blob/main/src/assets/images/Recommend_001.PNG)|![image](https://github.com/Noveled/runninghi-frontend-cicd/blob/main/src/assets/images/Recommend_001.PNG)|
|:---:|:---:|
|매인 화면|코스 등록 화면|

코스 등록 : 지도에 마커를 표시하고 버튼을 누르면 정보 입력창이 나오며 정보를 모두 입력하고 전송 버튼을 클릭하면 코스 등록이 완료 됩니다. 마커를 추가로 등록 할 때마다 거리가 누적되며 경로가 표시됩니다. 사용자는 자신이 원하는 이미지를 함께 등록 할 수 있습니다.

코스 수정 : 자신이 등록한 코스의 경우 코스 수정이 가능합니다. 사용자가 수정 버튼을 누르면 기존에 입력되었던 값이 미리 입력된 화면이 나오며 약간의 정보를 수정하고 등록 버튼을 누르면 코스 정보가 업데이트 됩니다.

코스 삭제 : 자신이 등록한 코스의 경우 코스 삭제가 가능합니다. 사용자가 삭제 버튼을 누르면 DB 상에서 visible 옵션이 false 로 변경되어 검색 등에선 노출되지 않지만, 이미 좋아요 등록을 해둔 경우 코스 확인이 가능합니다.

- 코스 검색

|Home|Forest|Store|Room|
|---|---|---|---|
|![image](https://user-images.githubusercontent.com/66003567/216816017-bfd18669-9f70-45c2-8561-bae648690602.png)|![image](https://user-images.githubusercontent.com/66003567/216815971-d8ed6ea8-1f92-45f8-9611-1cbe2b5e8db0.png)|![image](https://user-images.githubusercontent.com/66003567/216815991-88e0f4d6-3e5d-4c19-9eb9-97047b40c0d0.png)|![image](https://user-images.githubusercontent.com/66003567/216816002-4eca6510-4436-44f5-b949-347e75129ada.png)|
|옥수수 농사 가능|슈팅, 두더지 잡기, 낚시 미니게임 입장 가능|물품 판매 및 구매 가능|게임 저장 가능|

카테고리별로 필터링하여 코스 검색이 가능합니다. 각 카테고리에 대한 설명은 아래와 같습니다.

a : aaa

b : bbb

c : ccc

d : ddd

- 마이 페이지

|베이킹|슈팅|두더지 잡기|낚시|
|---|---|---|---|
|![image](https://user-images.githubusercontent.com/66003567/216816081-cf4a29c6-72f3-4b75-b01d-3dd6e3faabc5.png)|![image](https://user-images.githubusercontent.com/66003567/216816088-cd83d20a-e023-4af2-b406-98197af5ff35.png)|![image](https://user-images.githubusercontent.com/66003567/216816106-5a97f26e-565b-43a6-bfab-d22e36745f80.png)|![image](https://user-images.githubusercontent.com/66003567/216816119-fb22c507-f6c4-49a3-b4f0-28ecaae94f6c.png)|
|오븐 타이머 조절 성공시 빵 획득|나무 몬스터 제거시 코인 획득|일정 수 이상 두더지 잡기 성공시 코인 획득|찌를 올바른 위치에 멈추기 3회 성공시 선택한 난이도의 물고기 획득|

마이페이지에선 사용자의 여러 상태를 확인할 수 있습니다. 로그아웃 버튼이 위치합니다.

## CI/CD FLOW CHART
- 코스 등록 및 수정 삭제
플로우차트 이미지 영역
플로우차트 설명 영역

관련 설명 링크 연결 : 신나 티스토리 블로그 포스팅 필요

## Error report
- 해결 완료
- 쿠키 저장 방식 : 화면 전환이 이루어지면 지도를 화면마다 다시 그리기 때문에 맵 정보를 리덕스를 이용해 관리할 필요가 있었음. {} 를 통해 여러가지 변수를 한번에 담으면 무수히 많은 경고 출력 확인. 따로 나누어 저장하여 해결. (향후 리팩토링 할때 맵을 백그라운드에 하나만 그리고 위에 다른 컴포넌트를 그리는 방식으로 고치는것도 고려중)
- EC2 인스턴스 재부팅시 PublicIP 변경됨 : EC2 인스턴스를 재부팅하면 PublicIP가 변경되는 것을 확인. 이로 인해 연결했던 클라우드 프론트, https 등의 연결이 끊기는 것을 확인. 현재는 다시 연결해둔 상태지만 향후 편의를 위해 Elastic IP 할당 방식을 고려해야함.

- 해결 미완료
- 마커간 거리 계산 : 카카오 지도 API Docs 참고하면 수정 가능 (중요도가 낮아 밀리다 보니 프로젝트 말 까지 해결 불가하였음. 관련 Docs Link : )
- 코스 수정 시 이미 등록되었던 마커 제거 불가 현상 : 메모리 상에선 마커가 제거 되었으나 마커 이미지가 맵에 남아있는 현상 발생 -> 이유를 모르겠음..


## 레퍼런스
런넥트 : (링크)
참고한 블로그 : (링크)