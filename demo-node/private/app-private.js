const Obniz = require("obniz");

const obniz = new Obniz("1234-5678", { access_token:"BR7dzjGKsd4n3uKvAx9iiqG88uocEVV2LewI0t88YbiJvUVb--Hct20wu3mOtHBxVmRIRyngfThBwlf1ie$$sGEtqUP1-h8y20UK_yXbFliQ$3AezSx0Rh0AV_L3EBI3" })
  //1234-5678は自分のobnizIDに、access_tokenは設定したトークンに書き換える
obniz.onconnect = async function () {
  obniz.display.clear();
  obniz.display.print("Hello Secret!")
}