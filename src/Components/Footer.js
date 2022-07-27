import Card from "react-bootstrap/Card";

function ImgOverlayExample() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img
        src="https://colorlib.com/cdn-cgi/image/width=1200,height=412,fit=crop,quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/sites/2/minimal-social-media-buttons.jpg"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title>FS14-Contact US</Card.Title>
        <Card.Text>Почти все на бутстрапе</Card.Text>
        <Card.Text>Последнее обновление 3 минуты назад</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ImgOverlayExample;
