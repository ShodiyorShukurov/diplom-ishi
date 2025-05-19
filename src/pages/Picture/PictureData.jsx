import { Card, Row, Col, Image, Typography } from 'antd';
import usePicture from '../../hooks/usePicture';
import Customer from '../../components/Customer';

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const PictureData = () => {
  const { pictureData, getPictureById, getProductData } = usePicture();

  if (!pictureData) {
    return <Customer>Loading...</Customer>;
  }

  if (getProductData.length === 0) {
    return (
      <Customer>
        <Row gutter={[16, 16]}>
          {pictureData.map((item) => (
            <Col
              key={item.id}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              onClick={() => getPictureById(item.id)}
            >
              <Card
                hoverable
                cover={
                  <Image
                    src={item.image}
                    style={{ height: 200, objectFit: 'cover' }}
                  />
                }
              >
                <Meta title={item.name} />
              </Card>
            </Col>
          ))}
        </Row>
      </Customer>
    );
  }

  return (
     <Customer>
      <Row gutter={[16, 16]}>
        {getProductData.map((item) => (
          <Col key={item.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={
                <Image
                  alt={item.name}
                  src={item.image}
                  style={{ height: 200, objectFit: 'cover' }}
                />
              }
            >
              <Meta title={item.name} />
              <Paragraph style={{ marginTop: 8 }}>{item.text}</Paragraph>
              <Text strong>Price: ${Number(item.price).toLocaleString()}</Text>
              <br />
              <Text type="secondary">Category ID: {item.category}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </Customer>
  );
};

export default PictureData;
