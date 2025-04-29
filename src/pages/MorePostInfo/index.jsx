import React, { useState } from 'react';
import Customer from '../../components/Customer';
import { useParams } from 'react-router-dom';
import Api from '../../api';
import { Card, Divider } from 'antd';

const MorePostInfo = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);

  const getCustomer = async () => {
    try {
      const res = await Api.get('post-detail/' + id + '/');

      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    getCustomer();
  }, []);
  console.log(data);
  return (
    <Customer>
      <Card
        title={`Buyurtma: ${data.text}`}
        bordered={false}
        style={{ borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
      >
        <p>
          <strong>Telefon:</strong> <a href={data.phone_number}>{data.phone_number}</a>
        </p>
        <p>
          <strong>Narx:</strong> ${data.price}
        </p>

        <Divider />

        <h4>Kommentlar:</h4>
        {data.comments && data.comments.length > 0 ? (
          data.comments.map((comment) => (
            <div
              key={comment.id}
              style={{
                marginBottom: '1rem',
                padding: '0.5rem',
                background: '#f9f9f9',
                borderRadius: '8px',
              }}
            >
              <p>{comment.text}</p>
              <p style={{ fontSize: '0.9rem', color: '#888' }}>
                — {comment.seller.fullname} (<a href={comment.seller.email}>{comment.seller.email}</a> )
              </p>
            </div>
          ))
        ) : (
          <p>Kommentlar yo'q</p>
        )}
      </Card>
    </Customer>
  );
};

export default MorePostInfo;
