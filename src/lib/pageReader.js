import { QUESTEXT } from "../shared/constants";
const { ipcRenderer } = window.require("electron");

export const nextClickListener = () => {
  const questionAndAns = { question: "", option: {}, ttsTool: "" };
  questionAndAns.question = document.getElementById("question").innerText;
  const options = document.getElementById("options").childNodes;
  const ttsTool = document.getElementById("tool").value;
  questionAndAns["ttsTool"] = ttsTool;
  options.forEach((v) => {
    questionAndAns.option[v.textContent[0]] = v.textContent.substring(
      1,
      v.textContent.length
    );
  });
  ipcRenderer.send(QUESTEXT, questionAndAns);
};
