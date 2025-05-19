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

    const gpus = JSON.parse(localStorage.getItem('selectedGpus'));
    if (gpus) {
      collected.push({ name: `GPU: ${gpus.name}`, price: gpus.price });
    }

    const ram = JSON.parse(localStorage.getItem('selectedRam'));
    if (ram) {
      collected.push({ name: `RAM: ${ram.name}`, price: ram.price });
    }

    const memory = JSON.parse(localStorage.getItem('selectedMemory'));
    if (memory) {
      collected.push({ name: `Memory: ${memory.name}`, price: memory.price });
    }

    const coller = JSON.parse(localStorage.getItem('selectedColler'));
    if (coller) {
      collected.push({ name: `Cooler: ${coller.name}`, price: coller.price });
    }

    const keys = JSON.parse(localStorage.getItem('selectedKeys'));
    if (keys) {
      collected.push({ name: `Keys: ${keys.name}`, price: keys.price });
    }

    const power = JSON.parse(localStorage.getItem('selectedPowerSupply'));
    if (power) {
      collected.push({ name: `Power Supply: ${power.name}`, price: power.price });
    }

    const monitor = JSON.parse(localStorage.getItem('selectedMonitor'));
    if (monitor) {
      collected.push({ name: `Monitor: ${monitor.name}`, price: monitor.price });
    }

    const wifi = JSON.parse(localStorage.getItem('selectedWifi'));
    if (wifi) {
      collected.push({ name: `Wi-Fi Adapter: ${wifi.name}`, price: wifi.price });
    }

    const storages = JSON.parse(localStorage.getItem('selectedStorages')) || [];
    storages.forEach((s) => {
      collected.push({ name: `${s.type.toUpperCase()}: ${s.name}`, price: s.price });
    });

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
