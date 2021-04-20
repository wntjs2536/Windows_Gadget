# windows gadget

Html, javascript를 활용해서 만든 바탕화면 정리 가젯입니다. 

혹시나 사용하실 분이 있으시다면 자유롭게 이용하셔도 됩니다.

○ 기능
  - 지정폴더 무결성 검사
  - 카테고리별 폴더 분류   ---- 코드 수정으로 수정가능
  - 사용자 로그인 기록 생성        ----- 가젯이 켜졌을 때 기준
  - 작업관리자, 인터넷 익스플로어, 메모장 등 사용자에게 도움 될수 있는 퀵런처  ----- 코드 수정으로 수정가능
  - 동적 유저 아이디 값 이용     -----  고정값이 아니기 때문에 다른 유저명을 가진 컴퓨터에서도 사용가능

○ 문제점
- 메모리 누수문제 ------ 버튼 클릭 시 메모리 사용량이 계속해서 증가함
- 테이블 형식 지정으로 해상도에 따른 동적 변경 불가능
- 페이지 뒤로가기 버튼 없음
- 일반적인 방법으로 Windows Sidebar 폴더의 접근이 불가능   ---- AppData 폴더에서 찾을 수 없으나 경로지정으로 통한 접근은 가능함
- 기타 확인되지 않은 버그

※ 필독

윈도우 8 이상 운영체제에서는 8gadgetpack 과 넷프레임워크 3.5가 필요합니다.

https://8gadgetpack.net/ - 8gadgetpack 


https://www.microsoft.com/ko-kr/download/details.aspx?id=25150  - 넷프레임워크 3.5


다운로드 받은 Launcher.gadget.zip 파일의 확장자를 gadget로 변경해주세요
