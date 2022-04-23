import { NextButton, PaginationWrapper, PrevButton, Timer } from "./styles";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//duration in seconds
const formatTimer = (duration) => {
  const hour = Math.floor(duration / 3600);
  const min = Math.floor(duration / 60);
  const sec = duration % 60;
  return hour > 0 ? `${hour}:${min}:${sec}` : `${min}:${sec}`;
};
const Pagination = ({ setCurrentPage, duration, currentPage, totalPage }) => {
  return (
    <PaginationWrapper>
      <PrevButton
        onClick={() => setCurrentPage((prv) => Number(prv) - 1)}
        disabled={currentPage === 1}
        id="previousButton"
      >
        <FontAwesomeIcon size="2x" icon={faArrowLeft} />
        <span>Prev</span>
      </PrevButton>
      <Timer warning>{formatTimer(duration)}</Timer>
      <NextButton
        onClick={() => setCurrentPage((prv) => Number(prv) + 1)}
        disabled={currentPage === totalPage}
        id="nextButton"
      >
        <span>Next</span>
        <FontAwesomeIcon size="2x" icon={faArrowRight} />
      </NextButton>
    </PaginationWrapper>
  );
};

export default Pagination;
