//헤더 푸터는 글로벌적으로 적용.
//캘린더
//오늘 일정 , TODO : todo
//사이드 바 -> 마이페이지 - 계정 정보 , 참여자, 카테고리, TODO : todo, app info(앱 일 경우), 통계 ...
import Calender from "../layout/Calender";

export default function Main() {
  return (
    <body
      style={{
        margin: "0",
        padding: "0",
        height: "100%",
        flexDirection: "row",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "20%",
          backgroundColor: "green",
          top: "0",
          bottom: "0",
        }}
      >
        사이드바~~~~~~~~
      </div>
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <Calender />
        <div
          style={{
            width: "100%",
            height: "200px",
            margin: "20px 0 10px 0",
            padding: "20px 0 20px 0",
            display: "grid",
            placeItems: "center",
            backgroundColor: "yellow",
          }}
        >
          <div
            style={{
              width: "80%",
              height: "200px",
              backgroundColor: "#fff",
            }}
          >
            일정 요약보기
          </div>
        </div>
      </div>
    </body>
  );
}
