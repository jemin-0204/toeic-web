function next1() {
    document.getElementById("image").src = "ETS 토익 정기시험 기출문제집 1000.jpg";
    document.getElementById("text").innerHTML = "ETS 토익 정기시험 기출문제집 1000";
    document.getElementById("text").href = "https://www.ybmbooks.com/book/book_view.asp?seq=2925&step_1=15&step_2=";

    document.getElementById("b2").setAttribute("onclick", "next2()");
}
function next2() {
    document.getElementById("image").src = "ETS 토익기출 파트별 VOCA.jpg";
    document.getElementById("text").innerHTML = "ETS 토익기출 파트별 VOCA";
    document.getElementById("text").href = "https://www.ybmbooks.com/book/book_view.asp?seq=2942&step_1=15&step_2=";

    document.getElementById("b2").setAttribute("onclick", "next3()");
}
function next3() {
    document.getElementById("image").src = "ETS 토익 단기공략 Part 7.jpg";
    document.getElementById("text").innerHTML = "ETS 토익 단기공략 Part 7";
    document.getElementById("text").href = "https://www.ybmbooks.com/book/book_view.asp?seq=2945&step_1=15&step_2=";
}
function reset() {
    document.getElementById("image").src = "해커스 토익 기출 보카.jpg";
    document.getElementById("text").innerHTML = "해커스 토익 기출 보카";
    document.getElementById("text").href = "https://www.hackers.co.kr/?m=bookmanager&quick=N&uid=614";

    document.getElementById("b2").setAttribute("onclick", "next1()");
}