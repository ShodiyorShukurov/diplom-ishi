import { useState, useEffect } from 'react';
import { Button, Typography, Space, Card, Empty } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

const { Title } = Typography;

const CompyuterPageData = ({
  categoriesData,
  setCategoryId,
  cpuData,
  setMotherBoardId,
  motherBoardData,
  setOtherDataId,
  otherData,
  powerunit,
  getPowerUnit,
  setIsModalOpen,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    localStorage.setItem('selectedOption', JSON.stringify(option));
  };

  // CPU
  const [selectedCpuId, setSelectedCpuId] = useState(null);

  const handleCardClick = (cpu) => {
    setSelectedCpuId(cpu.id);

    localStorage.setItem('selectedCpu', JSON.stringify(cpu));
  };

  // MotherBoard
  const [selectedBoardId, setSelectedBoradId] = useState(null);

  const handleBoardClick = (cpu) => {
    setSelectedBoradId(cpu.id);

    localStorage.setItem('selectedBoard', JSON.stringify(cpu));
  };

  //Other data
  const [selectedItems, setSelectedItems] = useState([]);

  const type = selectedItems.filter((type) => type.type == 'video_card');

  const handleOtherSelect = (item) => {
    const alreadySelected = selectedItems.some((s) => s.id === item.id);
    let updated;

    if (alreadySelected) {
      updated = selectedItems.filter((s) => s.id !== item.id);
    } else {
      updated = [...selectedItems, item];
    }

    setSelectedItems(updated);
    localStorage.setItem('selectedStorages', JSON.stringify(updated));
  };

  const isSelected = (id) => selectedItems.some((item) => item.id === id);

  // PowerBlock
  const [powerBlock, setPowerBlock] = useState(null);

  const handlePowerSelect = (item) => {
    setPowerBlock(item);
    localStorage.setItem('selectedPowerSupply', JSON.stringify(item));
  };

  if (cpuData.length === 0) {
    return (
      <div>
        <Title level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
          Qanday kompyuter yig‘moqchisiz?
        </Title>
        <Space wrap className="button-group">
          {categoriesData.map((option) => (
            <Button
              key={option.id}
              type={selectedOption?.id === option.id ? 'primary' : 'default'}
              size="large"
              onClick={() => {
                handleOptionClick(option);
              }}
              style={{
                borderRadius: '10px',
                padding: '0 30px',
                height: '50px',
                fontSize: '1.2em',
              }}
            >
              {option.name.charAt(0).toUpperCase() + option.name.slice(1)}
            </Button>
          ))}
        </Space>
        <Button
          type="primary"
          size="large"
          disabled={!selectedOption}
          onClick={() => {
            setCategoryId(selectedOption.id);
          }}
          style={{
            display: 'block',
            marginTop: '30px',
            borderRadius: '10px',
            padding: '0 40px',
            height: '50px',
            fontSize: '1.2em',
          }}
        >
          Keyingi
        </Button>
      </div>
    );
  }

  if (motherBoardData.length === 0) {
    return (
      <>
        <div className="flex flex-wrap gap-5 p-5">
          {cpuData.length > 0 ? (
            cpuData.map((cpu) => (
              <Card
                key={cpu.id}
                title={cpu.name}
                className={`w-[300px] rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-all`}
                style={{
                  border:
                    selectedCpuId === cpu.id ? '2px solid #1890ff' : 'none',
                }}
                onClick={() => handleCardClick(cpu)}
              >
                <p className="text-gray-700">
                  <strong>Narxi:</strong> ${cpu.price}
                </p>
                <p className="text-gray-700">
                  <strong>Quvvati:</strong> {cpu.power}W
                </p>
                <p className="text-gray-700">
                  <strong>Soket:</strong> {cpu.soket}
                </p>
              </Card>
            ))
          ) : (
            <Text className="block mt-8 text-gray-500">
              Ma’lumot topilmadi yoki kategoriya tanlanmagan.
            </Text>
          )}
        </div>

        {/* Next Button */}
        <div className="mt-5">
          <Button
            type="primary"
            disabled={!selectedCpuId}
            className={`px-6 py-2 text-white font-semibold rounded-md ${
              selectedCpuId
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            onClick={() => {
              setMotherBoardId(selectedCpuId);
            }}
          >
            Keyingi
          </Button>
        </div>
      </>
    );
  }

  if (otherData.length === 0) {
    return (
      <div className="min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          MotherBoardlar Ro'yxati
        </h1>
        {motherBoardData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            {motherBoardData.map((product) => (
              <Card
                key={product.id}
                hoverable
                className="shadow-lg rounded-lg"
                style={{
                  border:
                    selectedBoardId === product.id
                      ? '2px solid #1890ff'
                      : 'none',
                }}
                onClick={() => handleBoardClick(product)}
              >
                <Card.Meta
                  title={
                    <span className="text-lg font-semibold">
                      {product.name}
                    </span>
                  }
                  description={
                    <div className="space-y-2">
                      <p className="text-gray-600">
                        <span className="font-medium">Narxi:</span> $
                        {product.price}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Soket:</span>{' '}
                        {product.soket_name}
                      </p>
                    </div>
                  }
                />
              </Card>
            ))}
          </div>
        ) : (
          <Empty
            description={
              <span className="text-lg text-gray-500">Hech nima yo'q</span>
            }
            className="mt-10"
          />
        )}

        <div className="mt-5">
          <Button
            type="primary"
            disabled={!selectedBoardId}
            className={`px-6 py-2 text-white font-semibold rounded-md ${
              selectedBoardId
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            onClick={() => {
              const selectedOption = JSON.parse(
                localStorage.getItem('selectedOption')
              );
              const selectedId = selectedOption?.id;
              setOtherDataId(selectedId);
            }}
          >
            Keyingi
          </Button>
        </div>
      </div>
    );
  }

  if (powerunit.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Qurilmalarni tanlang
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherData.map((item) => (
            <Card
              key={item.id}
              className={`transition-all duration-300 shadow-md hover:shadow-lg rounded-2xl border-2 ${
                isSelected(item.id) ? 'border-blue-500' : 'border-gray-200'
              }`}
              title={item.name}
              extra={
                isSelected(item.id) ? (
                  <CheckCircleOutlined className="text-blue-500 text-xl" />
                ) : null
              }
              style={{ borderRadius: '16px' }}
            >
              <p>
                <strong>Narxi:</strong> ${item.price}
              </p>
              <p>
                <strong>Turi:</strong> {item.type.toUpperCase()}
              </p>
              <p>
                <strong>Quvvati:</strong> {item.power} W
              </p>
              <Button
                type={isSelected(item.id) ? 'primary' : 'default'}
                block
                className="mt-4 rounded-xl"
                onClick={() => handleOtherSelect(item)}
              >
                {isSelected(item.id) ? 'Tanlangan' : 'Tanlash'}
              </Button>
            </Card>
          ))}
        </div>
        <Button
          className="mt-5"
          disabled={!selectedItems}
          type="primary"
          onClick={() => {
            const selectedOption = JSON.parse(
              localStorage.getItem('selectedCpu')
            );
            const selectedId = selectedOption?.power;
            getPowerUnit(selectedId, type[0]?.power);
          }}
        >
          Keyingi
        </Button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Quvvat manbaini tanlang
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {powerunit.map((item) => (
          <Card
            key={item.id}
            title={item.name}
            className={`transition-all duration-300 shadow-md hover:shadow-lg rounded-2xl border-2 ${
              powerBlock?.id === item.id
                ? 'border-green-500'
                : 'border-gray-200'
            }`}
            extra={
              powerBlock?.id === item.id ? (
                <CheckCircleOutlined className="text-green-500 text-xl" />
              ) : null
            }
            style={{ borderRadius: '16px' }}
          >
            <p>
              <strong>Quvvati:</strong> {item.power}W
            </p>
            <p>
              <strong>Narxi:</strong> ${item.price}
            </p>
            <Button
              type={powerBlock?.id === item.id ? 'primary' : 'default'}
              block
              className="mt-4 rounded-xl"
              onClick={() => handlePowerSelect(item)}
            >
              {powerBlock?.id === item.id ? 'Tanlangan' : 'Tanlash'}
            </Button>
          </Card>
        ))}
      </div>
      <Button
      style={{marginTop: "20px"}}
        type="primary"
        onClick={() => setIsModalOpen(true)}
      >
        Yig'ilgan narsalarni ko'rish
      </Button>
    </div>
  );
};

export default CompyuterPageData;
