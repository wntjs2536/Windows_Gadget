# windows gadget
Html, Javascript를 활용해서 만든 바탕화면 정리 가젯입니다.


혹시나 사용하실 분이 있으시다면 자유롭게 이용하셔도 됩니다.

## 기능
  - 지정 폴더 무결성 검사
  - 카테고리별 폴더 분류
  - 사용자 로그인 기록 생성        -----> 가젯이 켜졌을 때 기준
  - 작업관리자, 인터넷 익스플로러, 메모장 등 사용자에게 도움 될 수 있는 퀵런처
  - 동적 사용자 아이디 값 이용     ----->  고정값이 아니므로 다른 사용자명을 가진 컴퓨터에서도 사용 가능

## 문제점
- 메모리 누수 문제 ------> 버튼 클릭 시 메모리 사용량이 미세하게 증가함
- 테이블 형식 지정으로 해상도에 따른 동적 변경 불가능
- 페이지 뒤로 가기 기능 먹통 ------> 시도는 했으나 가젯에서 사용이 안 되므로 해당 기능 제거
- 일반적인 방법으로 Windows Sidebar 폴더의 접근이 불가능   -----> AppData 폴더에서 찾을 수 없으나 경로지정으로 통한 접근은 가능함
- 기타 확인되지 않은 버그

## 설치법

윈도우 8 이상 운영체제에서는 8 gadget pack 과 넷프레임워크 3.5가 필요합니다. 윈도우 7 사용자는 3번으로 가주세요

1. https://8gadgetpack.net/ -----> 8 gadget pack 


2. https://www.microsoft.com/ko-kr/download/details.aspx?id=25150  ------> 넷프레임워크 3.5


3. 다운로드 받은 Launcher·gadget 파일을 실행 시켜주세요


4. 바탕화면에서 마우스 우클릭 후 바탕화면 정리 앱을 실행, 원하는 위치에 가젯을 놓아주세요


5. 아이콘 크기 변경은 
C:\Users\%USERNAME%\Pictures 폴더를 열고 보기탭에서 보기형식 지정 - 폴더 옵션 - 보기 탭 - 모든 폴더에 적용 - 가젯 아이콘 표시 영역에 우클릭 - 속성 - 사용자 지정 탭 - 다음에 대해 이 폴더 최적화 - 사진 선택 후 적용버튼 클릭

(추후 방식 수정 할 예정입니다.)

## Fix_Log

2021-05-30
- 파일 무결성 기능 무반응 수정 (잘못 된 온로드 설정 변경)