import React, { useState } from 'react';
import { Card, Input, Button, message } from 'antd';
import Api from '../../../api';

const { TextArea } = Input;

const SellerData = ({ data }) => {
  const [comments, setComments] = useState({});

  const handleChange = (id, value) => {
    setComments((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (id) => {
    const comment = comments[id];
    if (!comment) return message.warning("Komment yozilmadi!");

    try {
      await Api.post('/create-comment/' + id +"/", {
        request_id: id,  
        text: comment,
      });

      message.success("Komment muvaffaqiyatli yuborildi!");
      setComments((prev) => ({ ...prev, [id]: '' })); 
    } catch (error) {
      message.error("Xatolik yuz berdi. Iltimos, qayta urinib ko‘ring.");
    }
  };

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item) => (
        <Card
          key={item.id}
          title={`${item.user.first_name} ${item.user.last_name}`}
          bordered={false}
          style={{ borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
        >
          <p><strong>Telefon:</strong> {item.phone_number}</p>
          <p><strong>Narx:</strong> ${item.price}</p>
          <p><strong>Izoh:</strong> {item.text}</p>

          <div style={{ marginTop: '1rem' }}>
            <TextArea
              rows={3}
              placeholder="Comment yozing..."
              value={comments[item.id] || ''}
              onChange={(e) => handleChange(item.id, e.target.value)}
            />
            <Button
              type="primary"
              style={{ marginTop: '0.5rem' }}
              onClick={() => handleSubmit(item.id)}
            >
              Yuborish
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default SellerData;
