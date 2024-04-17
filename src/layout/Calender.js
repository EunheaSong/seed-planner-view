import React, {useState} from "react";
import '../style/Calender.css';

export default function Calendar() {
    const currentDate = new Date();
    const [selectDay, setSelectDay] = useState(currentDate);

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    // 해당 월의 첫 번째 날을 가져오기
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    // 해당 월의 마지막 날을 가져오기
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    // 각 요일에 해당하는 날짜를 배열에 채움
    const daysInMonth = [];
    let day = new Date(firstDayOfMonth);

    // 해당 월의 첫 번째 날 이전의 공백을 채움
    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
        daysInMonth.push('');
    }
    // 해당 월의 날짜를 채움
    while (day <= lastDayOfMonth) {
        daysInMonth.push(new Date(day).getDate());
        day.setDate(day.getDate() + 1);
    }

    // 배열을 크기별로 나누는 함수
    function chunkArray() {
        const chunkedArray = [];
        for (let i = 0; i < daysInMonth.length; i += 7) {
            chunkedArray.push(daysInMonth.slice(i, i + 7));
        }
        return chunkedArray;
    };

    return (
        <div className="container">
            <div className="calendar">
                <p>{`${selectDay.getFullYear()}년 ${selectDay.getMonth() + 1}월`}</p>
                <table>
                    <thead>
                    <tr>
                        <th>일</th>
                        <th>월</th>
                        <th>화</th>
                        <th>수</th>
                        <th>목</th>
                        <th>금</th>
                        <th>토</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        chunkArray().map((week, index) => (
                            <tr key={index}>
                                {week.map((date, idx) => (
                                    <Day day={date} key={idx}/>
                                ))}
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
}

// function Week({firstDay}) {
//     console.log(firstDay);
//     console.log(firstDay.getDay());
//
//     return <tr>
//         {Array.from({length: 7}, (_, i) => i).map((i) => (
//                 <Day day={firstDay.getDate() + i} key={firstDay.getDate() + i}/>
//             )
//         )}
//     </tr>;
// }

function Day({day, idx}) {
    return (
        <td key={idx}>
            <div className="day-box" role="button"
                // onMouseOver={}
                 onClick={() => alert("tttt")}
            >
                {day}
            </div>
        </td>
    );
}