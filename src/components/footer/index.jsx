import { useState,useEffect, useRef } from "react";
import Pagination from "../pagination";
import { FooterWrapper } from "./styles";

const Footer = ({setCurrentPage,currentPage,data})=>{
    const [duration, setDuration] = useState();
    const timer = useRef(data.duration);
    const [refreshTimer, setRefreshTimer] = useState(true);
    useEffect(() => {
      const interval = setInterval(() => {
        timer.current = timer.current - 1;
        setDuration(timer.current);
        if (timer.current === 0) {
          clearInterval(interval);
        }
      }, 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, [refreshTimer]);
    return (
        <FooterWrapper>
            <Pagination {...{duration,setCurrentPage,currentPage,totalPage: data.questions.length}} />
        </FooterWrapper>
    )
}
export default Footer;