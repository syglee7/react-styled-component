import React, { Component } from 'react';
import styled, { createGlobalStyle, css, ThemeProvider } from 'styled-components';
import theme from './theme';

const GlobalStyle =  createGlobalStyle`
    body{
        padding:0;
        margin:0;
    }
`;

const awesomeCard = css`
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    background-color: white;
    border-radius: 10px;
    padding: 20px;
`;

const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: pink;
`;

const Card = styled.div`
    background-color: red;
`;

const Button = styled.button`
    border-radius: 30px;
    padding: 25px 15px;
    background-color: ${props => props.theme.successColor};
`;


class App extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Container>
                    <Form />
                </Container>
            </ThemeProvider>
        );
    }
}

const Form = () => (
    <Card><Button>Hello</Button></Card>
);



export default App;
