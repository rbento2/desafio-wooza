import React from 'react'
import styled from 'styled-components'
import image from '../assets/img/profile.jpg'

const Card = styled.div`
    align-items: center;
    background-color: #444a53;
    border: 2px solid #dedede;
    color: #e98a2f;
    display: flex;
    flex 1;
    flex-direction: row;
    height: auto;
    justify-content: space-around;
    margin: 1% 1% 1% 0;
    max-width: 30%;
    min-width: 30%;
    padding: 10px;
    @media only screen and (max-width: 1024px) {
        align-items: baseline;
        flex-direction: column;
        margin: 1%;
        max-width: 100%
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 24px;
    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        padding: 10px;
    }`
const Img = styled.img`
    width: 35%;
    height: 100%;
    @media only screen and (max-width: 1024px) {
        width: 100%;
        height: auto; 
    }
`

const ContainerInfo = styled.div`
    max-width: 70%;
    & > span {
        color: #fff;
    }

    & > h3 {
        margin: 10px 0;
    }
    @media only screen and (max-width: 1024px) {
        margin-top: 20px;
        max-width: 100%;
    }
`

export default class ComponentCard extends React.Component {

    render(){
        return(
            <Container>
                { this.props.worker.map((child,i)=>(
                    <Card key={'card-'+i}>
                        <Img src={image} /> 
                        <ContainerInfo>
                            <span>Nome Funcionário</span>
                            <h3>{child.name}</h3>
                            <hr/>
                            <span>Cargo</span>
                            <h3>{child.office}</h3>
                        </ContainerInfo>
                    </Card>
                ))}
            </Container>
        )
    }
}