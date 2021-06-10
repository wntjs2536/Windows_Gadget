var WshShell = new ActiveXObject("WScript.Shell"); //엑티브 x 오브젝트	
var UserName = WshShell.ExpandEnvironmentStrings("%USERNAME%"); //유저이름 동적 할당
var Address = []; //전체 경로

var FolderNm = [];
	FolderNm[0] = "C:/sun2_Luncher";
	FolderNm[1] = "C:/sun2_Luncher/Document";
	FolderNm[2] = "C:/sun2_Luncher/Game";
	FolderNm[3] = "C:/sun2_Luncher/Pc_management";
	FolderNm[4] = "C:/sun2_Luncher/Programming";
	FolderNm[5] = "C:/sun2_Luncher/Picture";
	FolderNm[6] = "C:/sun2_Luncher/Log";

//------------------------------------- 컴퓨터 로그인 로그생성 --------------------------------------
function Write_log(name, today){
	
	var fileObject = new ActiveXObject("Scripting.FileSystemObject");
	var name = "computer_start_log.txt";	//파일명
	var today = new Date(); //현재 시간
	
	if(name == "") return false;
	var defaultpath = FolderNm[6]; // 로그파일 생성 경로
	var fullpath = defaultpath+"\\"+name;

 // 파일이 생성되어있지 않으면 새로 만들고 기록
	if(!fileObject.FileExists(fullpath)){
		var fWrite = fileObject.CreateTextFile(fullpath,false);
		fWrite.write("\n" +today.toLocaleString()+ " 접속유저명:" +UserName);
		fWrite.close();
		
	}else{
// 파일이 이미 생성되어 있으면 appending 모드로 파일 열고 기록
		var fWrite = fileObject.OpenTextFile(fullpath, 8);
		fWrite.write("\n" +today.toLocaleString()+ " 접속유저명:" +UserName);
		fWrite.close();
	}
}


//------------------------------------- 폴더 무결성 --------------------------------------	
	
function Foder_Integrity() {	
	File_Handler = new ActiveXObject("Scripting.FileSystemObject");
	
	for(var i=0; i<= 6; i++) {
		var FolderChk = File_Handler.FolderExists(FolderNm[i]);
		if(FolderChk == false){
			File_Handler.CreateFolder(FolderNm[i]);
		}
	}
}

//------------------------------------- 주소창에서 입력한 경로 이동--------------------------------------
function File_Address_Input() {
	var Set_Address = document.getElementById("output").value;

		if(event.keyCode == 13){ 
			document.getElementById("link").src = Set_Address;	
		}else{
			Set_Address.close();
		}
}

function Address_Output(){
	document.getElementById("output").value = document.getElementById("link").src;
}

//------------------------------------- 버튼 액션 --------------------------------------	

function Task() {
	WshShell.Run("taskmgr.exe /7", 1, false);
}

function Explorer() {
	WshShell.Run("iexplore.exe", 1, false);
}

function NotePad() {
	WshShell.Run("notepad.exe", 1, false);
}

function Mspaint() {
	WshShell.Run("mspaint.exe", 1, false);
}

function SndVol() {
	WshShell.Run("SndVol.exe", 1, false);
}

function Cmd() {
	WshShell.Run("cmd.exe", 1, false);
}

function Main(){
	Address = document.getElementById("link").src = "C:/Users/"+UserName+"/Desktop";
}

function Document(){
	Address = document.getElementById("link").src = FolderNm[1];
}

function Game(){
	Address = document.getElementById("link").src = FolderNm[2];
}

function Pc_Management(){
	Address = document.getElementById("link").src = FolderNm[3];
}
	  
function Programming(){
	Address = document.getElementById("link").src = FolderNm[4];
}

function Picture() {
	Address = document.getElementById("link").src = FolderNm[5];
}

function Download(){
	Address = document.getElementById("link").src ="C:/Users/"+UserName+"/Downloads";
}

function Gadget_Folder(){
	Address = document.getElementById("link").src;
	location.href ("C:/Users/"+UserName+"/AppData/Local/Microsoft/Windows Sidebar/Gadgets/Launcher.gadget");
}

function Home_Folder(){
	location.href(FolderNm[0]);
}

function Check_log(){
	WshShell.Run(FolderNm[6]+"/computer_start_log.txt", 1, false);
}