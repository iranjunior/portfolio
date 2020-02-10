import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 75%;
    margin: 50px;
    flex-direction: column;
    padding-right: 10px;
`;

export const Title = styled.h2`
    font-size: 30px;
    font-weight: 700;
    color: ${(props) => props.theme.colors.secondary};

    margin-top: 20px;
`;
export const Summary = styled.h3`
    font-size: 30px;
    font-weight: 500;
    color: #7a798c;
    line-height: 0.75;

`;
export const Name = styled.h1`
    font-size: 92px;
    font-weight: 800;
    color: ${(props) => props.theme.colors.secondary};
    line-height: 0.75;
    margin-top: 0px;
    margin-bottom: 20px;
`;
export const Description = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 1.85714;
    font-weight: 500;
    color: #838293;
    -webkit-font-smoothing: antialiased;
    -webkit-text-shadow: rgba(0,0,0,.01) 0 0 1px;
    text-shadow: rgba(0,0,0,.01) 0 0 1px;
    column-count: 2;


`;
export const WrapperSkills = styled.div`
    width: 100%;
    margin-top: 35px;
    column-count: 3;
`;
export const Skills = styled.div`
    width: 100%;
    margin-right: 50px;
    margin-bottom: 20px;
`;
export const Progress = styled.div`
    height: 20px;
    text-align: right;
    width: ${(props) => `${props.value}%`};
    overflow: hidden;
    border-radius: 10px;
    transition: all 500ms ease;
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
    font-weight: 700;

    
`;
export const WrapperProgress = styled.div`
    width: 100%;
    border-radius: 10px;
    background-color: #FFF;
    margin-top: 10px;
    height: 20px;

    ${Progress}:nth-child(1) {
        background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
    };
    ${Progress}:nth-child(2) {
        background: linear-gradient(90deg, rgba(223,52,22,1) 0%, rgba(121,75,9,1) 35%, rgba(0,255,25,1) 100%);
    };
    ${Progress}:nth-child(3) {
        background: linear-gradient(90deg, rgba(223,191,22,1) 0%, rgba(0,255,25,1) 100%);
    };
    ${Progress}:nth-child(4) {
        background: linear-gradient(90deg, rgba(223,191,22,1) 0%, rgba(0,52,255,1) 100%);
    };
    ${Progress}:nth-child(5) {
        background:  linear-gradient(90deg, rgba(223,22,90,1) 0%, rgba(154,0,255,1) 100%);
    };
    ${Progress}:nth-child(6) {
        background:  linear-gradient(90deg, rgba(223,22,90,1) 0%, rgba(154,0,255,1) 100%);
    };
`;
export const FutureSkillsContainer = styled.ul`
    display: flex;
    flex-direction: column;

`;
export const FutureSkills = styled.li`
    line-height: 2;
`;
