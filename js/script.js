'use strict';

const menuBtn = document.querySelector('#menu-btn');

const gnavi = document.querySelector('#gnavi');

//menu-btnをクリックしたとき、#gnaviにクラス名の「open」がついていなければ追加
//menu-btnをクリックしたとき、#menu-btnにクラス名の「close」がついていなければ追加
menuBtn.addEventListener('click', (evt) => {
    gnavi.classList.toggle('open');
    evt.currentTarget.classList.toggle('close');
});

//上から３００以上スクロールしたら#page-topにopenを追加
const pageTop = document.querySelector('#page-top');
const getScrollY = () => {
    const scrolled = window.scrollY;
    if (scrollY >= 300) {
        pageTop.classList.add('open');
    } else {
        pageTop.classList.remove('open');
    }
};

window.addEventListener('scroll', getScrollY);

//【課題01】
//formの取得
const whatDay = document.querySelector('#what-day');

//送信イベント
const aA = document.querySelector('#A-01');

const aAA = document.querySelector('#A-02');

whatDay.addEventListener('submit', (evt) => {
    //初期動作のキャンセル
    evt.preventDefault();
    //入力内容の取得
    const year = whatDay.year.value;
    const month = whatDay.month.value;
    const date = whatDay.date.value;

    //日時
    const now = new Date(year, month - 1, date);

    //曜日
    const dayList = ['日', '月', '火', '水', '木', '金', '土', ];
    const day = now.getDay();

    //A-01に表示
    document.querySelector('#A-01').textContent = `${year}年${month}月${date}日`;

    document.querySelector('#A-02').textContent = `${dayList[day]}曜日`;

    console.log(now);
});

//【課題02】

//formのIDを取得してsubmitイベントを設定
const whatBmi = document.querySelector('#what-bmi');

whatBmi.addEventListener('submit', (evt) => {
    //初期動作のキャンセル
    evt.preventDefault();

    //入力内容を取得
    const m = (whatBmi.cm.value) / 100;
    const kg = whatBmi.kg.value;

    //計算
    const bmi = Math.floor((kg / (m * m)) * 10) / 10;

    //計算結果から表示するメッセージを作成

    let message = ''; //メッセージの入れ物

    //25以上 肥満気味・18.5～24.9 標準・18.5未満 痩せすぎ

    if (bmi >= 25) {
        message = '肥満気味';
    } else if (bmi >= 18.5) {
        message = '標準';
    } else {
        message = '痩せすぎ';
    }

    //spanタグにそれぞれの結果を表示
    document.querySelector('#A-03').textContent = bmi;
    document.querySelector('#A-04').textContent = message;

    console.log(bmi);
});

//【課題03】
// Vanilla JSの場合
//const tabs = document.querySelectorAll('.tab-link');
//const sections = document.querySelectorAll('.tab-sec');

//tabs.forEach((tab) => {
    //tab.addEventListener('click', (evt) => {
        //全てのsectionから.openを外す
        //sections.forEach((sec) => {
            //sec.classList.remove('open');
        //});

        //全てのtabから.openを外す
        //tabs.forEach((tab2) => {
            //tab2.classList.remove('open');
        //});

        //sectionに.openをつける
        //const tabData = evt.target.dataset.tab;

        //document.querySelector(`#${tabData}`).classList.add('open');

        //tabに.openをつける
        //evt.target.classList.add('open');
   // });
//});

//jQueryの場合

$('.tab-link').on('click' , (evt) => {
    $('.tab-link, .tab-sec').removeClass('open');

    const tabTarget = $(evt.target);
    tabTarget.addClass('open');
    $(`#${tabTarget.data('tab')}`).addClass('open');

});

//【課題04】
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,//隙間の余白
      centeredSlides: true,//スライドの中央揃え
      autoplay: {
        delay: 2000,//再生時間
        disableOnInteraction: false,
      },
      slidesPerView: 5,
  });