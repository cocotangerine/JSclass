Splitting();
const gnbList = $("#gnb .list > li"); // >: 바로 밑에 있는 자식만 선택
// const depth02 = $("#gnb .list >li .depth02"); //마우스 올렸을 때 부드럽게 내려감
// console.log(depth02);
gnbList.on("mouseenter", function () {
  //   console.log(this);
  // 선택자를 $(선택자) 형식으로 쓰는 것: '래핑(wrapping)한다' : 제이쿼리에서 제공하는 api(즉 거의 대부분의 메소드)를 사용하기 위함이다.
  const depth02 = $(this).find(".depth02"); //0.3초만에 내려온다
  // depth02.slideDown(300);
  $(this).find(".depth02").stop().slideDown(250); //위의 두줄과 같다 'Method chaining' 메서드 연결해서 쓰는
});
gnbList.on("mouseleave", function () {
  $(this).find(".depth02").stop().slideUp(250);
});
//this in JS: 누가 호출하느냐에 따라서 결정된다 (일반함수)
let person = {
  name: "yeji",
  age: 30,
  consoleThis: function () {
    console.log(this);
    console.log(this === person);
    console.log(this === window);
  },
};
console.log(person.consoleThis());
const printThis = person.consoleThis;
printThis(); // window를 가리킨다

const mainVisualSliser = new Swiper("#mainVisual", {
  loop: true,
  speed: 1000,
  // effect: "cube",
  navigation: {
    nextE1: "#mainvisual .btnNext",
    prevE1: "#mainvisual .btnprev",
  },
  pagination: {
    el: "#mainVisual .pagination .bullets",
    type: "bullets",
  },
});

const btnPause = $("#mainVisual .autoBox .pause");
const btnAuto = $("#mainVisual .autoBox .pause");
btnPause.on("click", function () {
  mainVisualSliser.autoplay.stop();
  btnPause.css({ display: "none" });
  btnAuto.css({ display: "block" });
});
btnAuto.on("click", function () {
  mainVisualSliser.autoplay.start();
  btnPause.css({ display: "block" });
  btnAuto.css({ display: "none" });
});
new Swiper("#news .listBox,", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  mousewheel: true,
});

const txt = "my name is .. yeji";
console.log(txt.split(" "));
// await.innerHTML="<li>fdsfd</li>" //태그로 인식하게 만든다.

const mainVisualTL = gsap.timeline();
mainVisualTL
  .from("mainVisual .slogan main .char", {
    y: 100,
    opacity: 0,
    stagger: 0.05,
    ease: "power4",
    duration: 1,
    delay:1
  })
  .from(
    "mainVisual .slogan main .char",
    {
      x: 100,
      opacity: 0,
      stagger: 0.02,
      ease: "power4",
      duration: 1,
    },
    "-=1"
  );
