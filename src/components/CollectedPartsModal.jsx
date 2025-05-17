import { Modal, List, Typography } from 'antd';
import { useEffect, useState } from 'react';

const { Text, Title } = Typography;

const CollectedPartsModal = ({ open, onClose }) => {
  const [parts, setParts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (open) {
      const collected = [];

      const selectedOption = JSON.parse(localStorage.getItem('selectedOption'));
      if (selectedOption) {
        collected.push({ name: `Kategoriya: ${selectedOption.name}`, price: 0 });
      }

      const cpu = JSON.parse(localStorage.getItem('selectedCpu'));
      if (cpu) {
        collected.push({ name: `CPU: ${cpu.name}`, price: cpu.price });
      }

      const board = JSON.parse(localStorage.getItem('selectedBoard'));
      if (board) {
        collected.push({ name: `Motherboard: ${board.name}`, price: board.price });
      }

      const storages = JSON.parse(localStorage.getItem('selectedStorages')) || [];
      storages.forEach((s) => {
        collected.push({ name: `${s.type.toUpperCase()}: ${s.name}`, price: s.price });
      });

      const power = JSON.parse(localStorage.getItem('selectedPowerSupply'));
      if (power) {
        collected.push({ name: `Power Supply: ${power.name}`, price: power.price });
      }

      const totalPrice = collected.reduce((sum, item) => sum + Number(item.price), 0);
      setParts(collected);
      setTotal(totalPrice);
    }
  }, [open]);

  return (
    <Modal
      title="Yig'ilgan qismlar"
      open={open}
      onCancel={onClose}
      onOk={onClose}
      okText="Yopish"
    >
      {parts.length === 0 ? (
        <Text>Hech qanday qism tanlanmagan.</Text>
      ) : (
        <>
          <List
            dataSource={parts}
            renderItem={(item) => (
              <List.Item>
                <Text>{item.name}</Text>
                <Text strong>${item.price}</Text>
              </List.Item>
            )}
          />
          <div className="mt-4 flex justify-between font-semibold text-lg">
            <span>Jami narxi:</span>
            <span>${total}</span>
          </div>
        </>
      )}
    </Modal>
  );
};

export default CollectedPartsModal;
