const humanItem = document.querySelectorAll("#human ul li");
const comItem = document.querySelectorAll("#computer ul li");

document.querySelector("#computer").classList.add("hidden");

let comChoiceNum;
const randomChoice = function () {
  comItem[0].style.display = "none";
  comItem[1].style.display = "none";
  comItem[2].style.display = "none";
  const selected = Math.floor(Math.random() * 3);
  comChoiceNum = selected;
  comItem[comChoiceNum].style.display = "block";
};

const comChoiceStop = setInterval(randomChoice, 30);

for (let i = 0; i < 3; i++) {
  humanItem[i].addEventListener("click", function () {
    clearInterval(comChoiceStop);
    if (i === comChoiceNum) {
      console.log("DRAW");
    } else if (i === 0 && comChoiceNum === 1) {
      console.log("I lost");
    } else if (i === 1 && comChoiceNum === 2) {
      console.log("I lost");
    } else if (i === 2 && comChoiceNum === 1) {
      console.log("I lost");
    } else {
      console.log("I win");
    }
  });
}

humanItem[0].addEventListener("click", function () {
  console.log("rock");
});
humanItem[1].addEventListener("click", function () {
  console.log("scissors");
});
humanItem[2].addEventListener("click", function () {
  console.log("paper");
});

// function test() {
//   console.log("Hello!");
// }
// setInterval(test, 3000); 계속 반복실행.
//clearInterval(tId);
//주의: delay time을 0으로 설정해도 바로 실행되지 않음. 현재 실행중인 스크립트 종료 이후 함수 실행되므로

function showName(name) {
  console.log(name);
}
const tid = setTimeout(showName, 3000, "Mary");
//clearTimeout: 예정된 작업을 중지
tid;
clearTimeout(tid); //3초 지난 후 코드 실행되므로 아무일도 일어나지 않는다

// let timerId = setInterval(() => alert("째깍"), 2000);
//5초 후에 정지
// setTimeout(() => {
//   clearInterval(timerId);
//   alert("정지");
// }, 5000);

// let num = 0;
// function showTime() {
//   console.log(`접속하신 지 ${num++}초가 지났습니다.`);
//   if (num > 3) {
//     clearInterval(tId);
//   }
// }
// const tId = setInterval(showTime, 1000);
