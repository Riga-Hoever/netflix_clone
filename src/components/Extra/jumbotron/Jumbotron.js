import React from "react";
import { Container, Inner, Item, Pane, Title, SubTitle } from "./Styles/Jubotron_style";

// COMPOUND COMPONENT!!!! 

export default function Jumbotron({children, direction="row",...restProps}) {
  return (
    
      <Item direction={direction}>
          <Inner>
              {children}
              </Inner>
          </Item>

  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
    return (
        <Container {...restProps}> { children }</Container>);
}

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
    return (
        <Pane {...restProps}> { children }</Pane>);
}

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
    return (
        <Title {...restProps}> { children }</Title>);
}
Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
    return (
        <SubTitle {...restProps}> { children }</SubTitle>);
}

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
    return (
        <image alt="" {...restProps}></image>
    )
}



// Dit zijn je imports voor als je Jumbo wilt gebruiken

// <Jumbotron.Container>
// {jumboData.map((item) => (
//   <Jumbotron key={item.id} direction={item.direction}>
//     <Jumbotron.Pane>
//       <Jumbotron.Title>
//         <p>{item.title}</p>
//       </Jumbotron.Title>
//       <Jumbotron.SubTitle>
//         <p>{item.subTitle}</p>
//       </Jumbotron.SubTitle>
//     </Jumbotron.Pane>
//     <Jumbotron.Pane>
//       <Jumbotron.Image src={item.image} alt={item.alt} />
  
//     </Jumbotron.Pane>
//   </Jumbotron>
// ))}
// </Jumbotron.Container>