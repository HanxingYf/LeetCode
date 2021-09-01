var str =
  '<p><br></p ><p><span style="color: rgb(102,163,224);">123123</span></p ><p><br></p ><p><span style="color: rgb(102,163,225);">123123</span></p ><p>一个文本<span style="color: blue;">组件</span></p ><p><br></p ><p><span style="color: rgb(102,163,226);">123123</span></p >';

let replaceArrText = {
  blue: "rgb(233,455,000)",
  red: "rgb(76,00,98)",
};

let replaceArrRgb = {
  "rgb(102,163,224)": "rgb(233,455,111)",
  "rgb(102,163,225)": "rgb(233,455,112)",
  "rgb(102,163,226)": "rgb(233,455,113)",
  "rgb(0,1,0)": "rgb(42,24,98)",
};

function helpFn(str) {
  str = str.replace(/blue/g, replaceArrText.blue);
  str = str.replace(/red/g, replaceArrText.red);
  // console.log(str);
  for (let item in replaceArrRgb) {
    console.log(item, replaceArrRgb[item]);
    let reg = "/" + item + "/ig";
    str = str.replace(eval(reg), replaceArrRgb[item]);
    console.log(str);
  }
  return str;
}
{
  /* <p><br></p ><p><span style="color: rgb(102,163,224);">123123</span></p >
<p><br></p ><p><span style="color: rgb(102,163,225);">123123</span></p >
<p>一个文本<span style="color: rgb(233,455,000);">组件</span></p ><p><br></p >
<p><span style="color: rgb(102,163,226);">123123</span></p > */
}

// console.log(helpFn(str));

var ch = "aaa";
var reg = "/"+ch+"/ig";
var str = "aaa bbb ccc aaa aaa";
str = str.replace(eval(reg),"");
console.log(str);
//<p><br></p ><p><span style=\"color: rgb(233,455,111);\">123123</span></p >
//<p><br></p ><p><span style=\"color: rgb(233,455,112);\">123123</span></p >
//<p>一个文本<span style=\"color: rgb(233,455,000);\">组件</span></p ><p><br></p >
//<p><span style=\"color: rgb(233,455,113);\">123123</span></p >

{
  /* <p><br></p ><p><span style="color: rgb(102,163,224);">123123</span></p >
<p><br></p ><p><span style="color: rgb(102,163,225);">123123</span></p >
<p>一个文本<span style="color: rgb(233,455,000);">组件</span></p ><p><br></p >
<p><span style="color: rgb(102,163,226);">123123</span></p > */
}

//<p><br></p ><p><span style="color: rgb(102,163,224);">123123</span></p >
//<p><br></p ><p><span style="color: rgb(102,163,225);">123123</span></p >
//<p>一个文本<span style="color: blue;">组件</span></p ><p><br></p >
//<p><span style="color: rgb(102,163,226);">123123</span></p >
