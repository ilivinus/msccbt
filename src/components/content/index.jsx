import { useCallback, useState } from "react";
import Aside from "../aside";
import Question from "../question";
import {
  ContentTitle,
  ContentTitleWrapper,
  ContentWrapper,
  PaginationArrayWrapper,
  QuestionPaginationWrapper,
  QuestionWrapper,
} from "./styles";

const Content = ({ currentPage,setCurrentPage, data }) => {
  // const [selecteQuestId, setSelectedQuestId] = useState(data.questions[0].id);

  const [sidePages, setSidePage] = useState(
    data.questions.reduce((a, m, indx) => {
      a[indx +1] = { id: m.id, page: indx+1, ans: false };
      return a;
    }, {})
  );

  const handlePageClick = (page, pageData) => () => {
    setCurrentPage(page);
    setSidePage((prev) => ({ ...prev, [pageData.page]: pageData }));
    
  };
  const onAnsSelect = useCallback(() =>{
   const answer =  {...sidePages[currentPage]}
   answer.ans = true;
    setSidePage(prv => ({ ...prv, [currentPage]: answer }));
  },[currentPage,sidePages])
  return (
    <ContentWrapper>
      <ContentTitleWrapper>
        <ContentTitle>{data.exam}</ContentTitle>
      </ContentTitleWrapper>
      <QuestionPaginationWrapper>
        <QuestionWrapper>
          <Question
            onAnsSelect={onAnsSelect}
            questionData={data.questions.find((m) => m.id === currentPage)}
          />
        </QuestionWrapper>
        <PaginationArrayWrapper>
          
          <Aside
            handlePageClick={handlePageClick}
            sidePages={sidePages}
            currentPage={currentPage}
          />
        </PaginationArrayWrapper>
      </QuestionPaginationWrapper>
    </ContentWrapper>
  );
};
export default Content;
