import { useMemo } from "react";
import { AsideWrapper, PageButton } from "./styles";

const Aside = ({
  currentPage,
  handlePageClick,
  sidePages
}) => {

  const aside = useMemo(() => {
    
    return Object.keys(sidePages).map((key) => (
      <PageButton
        onClick={handlePageClick(Number(key), sidePages[key])}
        active={Number(key) === currentPage}
        key={key}
        answered={sidePages[key].ans}
      >
        {key}
      </PageButton>
    ));
  }, [sidePages,handlePageClick, currentPage]);
  return <AsideWrapper id="pageNumbers">{aside}</AsideWrapper>;
};

export default Aside;
