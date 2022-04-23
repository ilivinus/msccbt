
import Content from "./components/content";
import Footer from "./components/footer";
import { useEffect, useMemo, useState } from "react";
import questionData from "./assets/questions.json";
import {nextClickListener} from './lib/pageReader'

function App() {
  const cbtQuestions = useMemo(() => questionData, []);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(nextClickListener,[currentPage])
  return (
    <>
      <Content
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        data={cbtQuestions}
      />
      <Footer
        setCurrentPage={setCurrentPage}
        data={cbtQuestions}
        currentPage={currentPage}
      />
    </>
  );
}

export default App;
