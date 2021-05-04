import styled, { css } from "styled-components/macro"
import Sunset from '../images/Sunset.jpg'
import Standing from '../images/Standing.png'
import { Link } from "react-router-dom"

const Page = styled.body``

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(11, 1fr);
    grid-template-rows: repeat(9, 5vw);
    grid-gap: 3px;
    
    user-select: none;
    
`

const PortfolioItem = styled.div`
    grid-column-start: 1;
    grid-column-end: 12;
    grid-row-start: 1;
    grid-row-end: 6;
    user-select: none;
`

const PersonalItem  = styled.div`
    grid-column-start: 1;
    grid-column-end: 12;
    grid-row-start: 6;
    grid-row-end: 10;
    user-select: none;
`

const PortfolioOverlay = styled.div`
    grid-column-start: 1;
    grid-column-end: 12;
    grid-row-start: 1;
    grid-row-end: 6;

    user-select: none;
    z-index: 1;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 1s;
    backdrop-filter: blur(3px);

    &:hover {
        h1 {
            transform: translateY(0);
        }
        opacity: 1;
    }
`

const PersonalOverlay = styled.div`
    grid-column-start: 1;
    grid-column-end: 12;
    grid-row-start: 6;
    grid-row-end: 11;

    user-select: none;
    z-index: 1;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 1s;
    backdrop-filter: blur(3px);

    &:hover {
        h1 {
            transform: translateY(0);
        }
        opacity: 1;
    }
`

const link = css`
    color: #fff;
    transition: 0.3s;
    text-decoration: none;
    user-select: none;

    &:hover {
        color: #fefefa;
        transform: scale(1.02);
        opacity: 0.8;
    }
`

const TakeMeThere = styled(Link)`
    ${link}
`

const Header = styled.h1` 
    transform: translateY(40px);
    transition: transform 1s;
    user-select: none;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 2s ease;
    user-select: none;
    object-position: 60% 48%;

    &:hover {
        opacity: 0.8;
    }
`

const Home = () => {
    return (
        <Page>
            <Grid>
                <PortfolioOverlay>
                    <TakeMeThere to='./Portfolio'>
                        <Header>Portfolio</Header>
                    </TakeMeThere>
                </PortfolioOverlay>
                <PortfolioItem>
                    <Image src={Sunset} />
                </PortfolioItem>


                <PersonalOverlay>
                    <TakeMeThere to='./Fish'>
                        <Header>Finazzo Fishing</Header>
                    </TakeMeThere>
                </PersonalOverlay>
                <PersonalItem>
                    <Image src={Standing} />
                </PersonalItem>
            </Grid>
        </Page>
    );
}

export default Home