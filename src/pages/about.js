import React from "react";
import AboutYogo from "../img/MainPage/AboutYogo.JPG";

const About = () => {
  return (
    <div className="aboutUs">
    <h2>關於Ching Active</h2><br></br>

    <p>在香港這個細小的空間裏，你下班後流汗訓練及健康飲食的背後，
      都承載着工作以外的目標和堅持，你值得使用高端環保服飾。努力運動嘅同時，
      減少使用塑膠，減少對環境造成的破壞，每日進步一點點，銳變成一個更好的你！#你的美你自己定義</p><br></br>

    <p>這幾年，感受到香港社會動盪不安，面對已經不再美好的香港，大家經常感到絕望。
    店主Ching希望分享希望及力量，發揮香港人精神。可以失望，但不能絕望!

    Ching Active深信，運動作為工作與生活的調劑，讓身心更加平衡；和我們一起活在當下，前往未來! </p>
    <img className="AboutYogo" src={AboutYogo} alt="AboutYogo" />
    </div>
  );
};

export default About;
