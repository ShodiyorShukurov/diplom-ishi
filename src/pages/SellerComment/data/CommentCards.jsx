import React, { useState } from 'react';
import { Card, Button, Space, message, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import Api from '../../../api';

const CommentCards = ({ commentData, getCommentsData }) => {
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedText, setEditedText] = useState('');

  const handleEdit = async (id, text) => {
    try {
      await Api.put('edit-comment/' + id + '/', {
        text: text,
      });
      message.success('Muvaffaqiyatli tahrirlandi');
      getCommentsData()
    } catch (error) {
      console.log(error);
      message.error("Nimadir xato bo'ldi iltimos qayta urinib ko'ring!");
    }
    setEditingCommentId(null); 
    setEditedText('');
  };

  const handleDelete = async (id) => {
    try {
      await Api.delete('delete-comment/' + id + '/');

      getCommentsData();
      message.success("Muvaffaqiyatli o'chirildi");
    } catch (error) {
      console.log(error);
      message.error("Nimadir xato bo'ldi iltimos qayta urinib ko'ring!");
    }
  };

  const handleStartEdit = (item) => {
    setEditingCommentId(item.id);
    setEditedText(item.text);
  };

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {commentData.map((item) => (
        <Card
          key={item.id}
          style={{
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          }}
        >
          <p>
            <strong>Post:</strong> {item.post.text}
          </p>
          <p>
            <strong>Telefon:</strong> {item.post.phone_number}
          </p>
          <p>
            <strong>Narx:</strong> ${item.post.price}
          </p>
          <hr />

          {editingCommentId === item.id ? (
            <>
              <TextArea
                style={{ marginTop: '16px' }}
                rows={3}
                placeholder="Comment yozing..."
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <Button
                style={{ marginTop: '16px' }}
                type="primary"
                icon={<EditOutlined />}
                onClick={() => handleEdit(item.id, editedText)}
              >
                Saqlash
              </Button>
            </>
          ) : (
            <>
              <p>
                <strong>Comment:</strong> {item.text}
              </p>
              <Space style={{ marginTop: '1rem' }}>
                <Button
                  type="primary"
                  icon={<EditOutlined />}
                  onClick={() => handleStartEdit(item)}
                >
                  Edit
                </Button>
                <Popconfirm
                  title="Delete the task"
                  description="Are you sure to delete this task?"
                  onConfirm={() => handleDelete(item.id)}
                  // onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button danger icon={<DeleteOutlined />}>
                    Delete
                  </Button>
                </Popconfirm>
              </Space>
            </>
          )}
        </Card>
      ))}
    </div>
  );
};

export default CommentCards;
