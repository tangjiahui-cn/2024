const name = "tjh";
const age = 24;
const sex = "男";

function templateString(str) {
  // 匹配所有 ${express} 格式并替换为表达式结果
  return str.replace(/\$\{(.)*?\}/g, function (matched) {
    const reg = /(?<=\{)(.+?)(?=\})/g; // 匹配并执行表达式
    const code = matched.match(reg)?.[0];
    return code ? eval(code) : "";
  });
}

console.log(
  templateString(
    "hello, myName is ${name}, age is ${ age}, sex is ${(() => sex)()}"
  )
);
