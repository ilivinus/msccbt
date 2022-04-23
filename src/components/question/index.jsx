import {  useCallback, useEffect, useRef, useState } from "react";
import { QuestionOptionWrapper, Question, Options } from "./styles";

const QuestionAndOption = ({ questionData, onAnsSelect }) => {
  const [ans, setAns] = useState({});

  const onSelectAns =  useCallback((e) => {
    setAns((prv) => ({ ...prv, [e.target.name]: e.target.value }));
    onAnsSelect();
  },[onAnsSelect]);

  // const options = useMemo(
  //   () =>
  //      Object.keys(questionData.options).map((k) => (
  //       <div key={k}>
  //         <label htmlFor={k}>{k.toUpperCase()}</label>
  //         <input name={`option${questionData.id}`} id={k} type="radio" />
  //         <label htmlFor={k}>{questionData.options[k]}</label>
  //       </div>
  //     )),
  //   [questionData.options,questionData.id]
  // );
  return (
    <QuestionOptionWrapper>
      <Question id="question">{questionData.question}</Question>
      <Options id="options">
        {Object.keys(questionData.options).map((k) => (
          <div key={k}>
            <label htmlFor={k}>{k.toUpperCase()}</label>
            <input
              onChange={onSelectAns}
              value={k}
              id={k}
              checked={ans[questionData.id] === k}
              name={questionData.id}
              type="radio"
            />
            <label htmlFor={k}>{questionData.options[k]}</label>
          </div>
        ))}
      </Options>
    </QuestionOptionWrapper>
  );
};

export default QuestionAndOption;
