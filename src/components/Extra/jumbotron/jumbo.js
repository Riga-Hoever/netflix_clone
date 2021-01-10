<Jumbotron.Container>
{jumboData.map((item) => (
  <Jumbotron key={item.id} direction={item.direction}>
    <Jumbotron.Pane>
      <Jumbotron.Title>
        <p>{item.title}</p>
      </Jumbotron.Title>
      <Jumbotron.SubTitle>
        <p>{item.subTitle}</p>
      </Jumbotron.SubTitle>
    </Jumbotron.Pane>
    <Jumbotron.Pane>
      <Jumbotron.Image src={item.image} alt={item.alt} />
  
    </Jumbotron.Pane>
  </Jumbotron>
))}
</Jumbotron.Container>
