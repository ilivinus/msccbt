import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    height: 60vh;
`
const Home = ()=>{
    return (
        <HomeWrapper>
            <h1>Welcome to</h1>
            <h2> NLP-driven CBT Guide for Visually Impaired Students</h2>
            <Link to="/protected">Login Page</Link>
        </HomeWrapper>
    )
}


export default Home