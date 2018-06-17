const Obniz = require("obniz");

const obniz = new Obniz("1234-5678");//1234-5678は自分のobnizIDに書き換える
obniz.onconnect = async function () {
  obniz.display.clear();
  obniz.display.print("Hello Obniz!")
}