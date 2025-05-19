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
  setGpuDataId,
  gpuData,
  ramData,
  setRamDataId,
  memoriesData,
  getMemories,
  setCollerDataId,
  collerData,
  setKeysDataId,
  keysData,
  powerunit,
  getPowerUnit,
  monitorData,
  getMonitor,
  setIsModalOpen,
  wifiData,
  getWifi,
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
  const [selectedItems, setSelectedItems] = useState(null);

  const handleOtherSelect = (item) => {
    setSelectedItems(item.id);
    localStorage.setItem('selectedGpus', JSON.stringify(item));
  };

  // Ram
  const [selectedRamId, setSelectedRamId] = useState(null);

  const handleRamSelect = (item) => {
    setSelectedRamId(item.id);
    localStorage.setItem('selectedRam', JSON.stringify(item));
  };

  // Memory
  const [selectedMemoryId, setSelectedMemoryId] = useState(null);
  const handleMemorySelect = (item) => {
    setSelectedMemoryId(item.id);
    localStorage.setItem('selectedMemory', JSON.stringify(item));
  };

  // Coller
  const [selectedCollerId, setSelectedCollerId] = useState(null);
  const handleCollerSelect = (item) => {
    setSelectedCollerId(item.id);
    localStorage.setItem('selectedColler', JSON.stringify(item));
  };

  // Keys
  const [selectedKeysId, setSelectedKeysId] = useState(null);
  const handleKeysSelect = (item) => {
    setSelectedKeysId(item.id);
    localStorage.setItem('selectedKeys', JSON.stringify(item));
  };

  // PowerBlock
  const [powerBlock, setPowerBlock] = useState(null);

  const handlePowerSelect = (item) => {
    setPowerBlock(item);
    localStorage.setItem('selectedPowerSupply', JSON.stringify(item));
  };

  // Monitor
  const [selectedMonitorId, setSelectedMonitorId] = useState(null);
  const handleMonitorSelect = (item) => {
    setSelectedMonitorId(item.id);
    localStorage.setItem('selectedMonitor', JSON.stringify(item));
  };

  // Wifi
  const [selectedWifiId, setSelectedWifiId] = useState(null);
  const handleWifiSelect = (item) => {
    setSelectedWifiId(item.id);
    localStorage.setItem('selectedWifi', JSON.stringify(item));
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

  if (gpuData.length === 0) {
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
              setGpuDataId(selectedId);
            }}
          >
            Keyingi
          </Button>
        </div>
      </div>
    );
  }

  if (ramData.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Gpu tanlang</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gpuData.map((item) => (
            <Card
              key={item.id}
              className={`transition-all duration-300 shadow-md hover:shadow-lg rounded-2xl border-2`}
              style={{
                border:
                  selectedItems === item.id ? '2px solid #1890ff' : 'none',
                borderRadius: '16px',
              }}
              title={item.name}
              onClick={() => handleOtherSelect(item)}
            >
              <p>
                <strong>Nomi:</strong>
                {item.name}
              </p>
              <p>
                <strong>Narxi:</strong> ${item.price}
              </p>
              <p>
                <strong>Quvvati:</strong> {item.power} W
              </p>
              <p>
                <strong>Category Id:</strong> {item.category}
              </p>
            </Card>
          ))}
        </div>
        <Button
          style={{ marginTop: '20px' }}
          disabled={!selectedItems}
          type="primary"
          onClick={() => {
            const selectedOption = JSON.parse(
              localStorage.getItem('selectedOption')
            );
            const selectedId = selectedOption?.id;
            setRamDataId(selectedId);
          }}
        >
          Keyingi
        </Button>
      </div>
    );
  }

  if (memoriesData.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">Ram tanlang</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ramData.map((item) => (
            <Card
              key={item.id}
              className={`transition-all duration-300 shadow-md hover:shadow-lg rounded-2xl border-2`}
              style={{
                border:
                  selectedRamId === item.id ? '2px solid #1890ff' : 'none',
                borderRadius: '16px',
              }}
              title={item.name}
              onClick={() => handleRamSelect(item)}
            >
              <p>
                <strong>Nomi:</strong>
                {item.name}
              </p>
              <p>
                <strong>Narxi:</strong> ${item.price}
              </p>
              <p>
                <strong>Quvvati:</strong> {item.power} W
              </p>

              <p>
                <strong>Type:</strong> {item.type}
              </p>
              <p>
                <strong>Category Id:</strong> {item.category}
              </p>
            </Card>
          ))}
        </div>
        <Button
          style={{ marginTop: '20px' }}
          disabled={!selectedRamId}
          type="primary"
          onClick={() => {
            getMemories();
          }}
        >
          Keyingi
        </Button>
      </div>
    );
  }

  if (collerData.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Xotira tanlang
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {memoriesData.map((item) => (
            <Card
              key={item.id}
              className={`transition-all duration-300 shadow-md hover:shadow-lg rounded-2xl border-2`}
              style={{
                border:
                  selectedMemoryId === item.id ? '2px solid #1890ff' : 'none',
                borderRadius: '16px',
              }}
              title={item.name}
              onClick={() => handleMemorySelect(item)}
            >
              <p>
                <strong>Nomi:</strong>
                {item.name}
              </p>
              <p>
                <strong>Narxi:</strong> ${item.price}
              </p>
            </Card>
          ))}
        </div>
        <Button
          style={{ marginTop: '20px' }}
          disabled={!selectedMemoryId}
          type="primary"
          onClick={() => {
            const selectedOption = JSON.parse(
              localStorage.getItem('selectedOption')
            );
            const selectedId = selectedOption?.id;
            setCollerDataId(selectedId);
          }}
        >
          Keyingi
        </Button>
      </div>
    );
  }

  if (keysData.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Coller tanlang
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {collerData.map((item) => (
            <Card
              key={item.id}
              className={`transition-all duration-300 shadow-md hover:shadow-lg rounded-2xl border-2`}
              style={{
                border:
                  selectedCollerId === item.id ? '2px solid #1890ff' : 'none',
                borderRadius: '16px',
              }}
              title={item.name}
              onClick={() => handleCollerSelect(item)}
            >
              <p>
                <strong>Nomi:</strong>
                {item.name}
              </p>
              <p>
                <strong>Narxi:</strong> ${item.price}
              </p>
              <p>
                <strong>Category:</strong>
                {item.category}
              </p>
            </Card>
          ))}
        </div>
        <Button
          style={{ marginTop: '20px' }}
          disabled={!selectedCollerId}
          type="primary"
          onClick={() => {
            const selectedOption = JSON.parse(
              localStorage.getItem('selectedOption')
            );
            const selectedId = selectedOption?.id;
            setKeysDataId(selectedId);
          }}
        >
          Keyingi
        </Button>
      </div>
    );
  }

  if (powerunit.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Keys tanlang
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {keysData.map((item) => (
            <Card
              key={item.id}
              className={`transition-all duration-300 shadow-md hover:shadow-lg rounded-2xl border-2`}
              style={{
                border:
                  selectedKeysId === item.id ? '2px solid #1890ff' : 'none',
                borderRadius: '16px',
              }}
              title={item.name}
              onClick={() => handleKeysSelect(item)}
            >
              <p>
                <strong>Nomi:</strong>
                {item.name}
              </p>
              <p>
                <strong>Narxi:</strong> ${item.price}
              </p>
              <p>
                <strong>Category:</strong>
                {item.category}
              </p>
            </Card>
          ))}
        </div>
        <Button
          style={{ marginTop: '20px' }}
          disabled={!selectedKeysId}
          type="primary"
          onClick={() => {
            const selectedOption = JSON.parse(
              localStorage.getItem('selectedCpu')
            );

            const selectedOption2 = JSON.parse(
              localStorage.getItem('selectedGpus')
            );
            const powerCpu = selectedOption?.power;
            const powerGpu = selectedOption2?.power;
            getPowerUnit(powerCpu, powerGpu);
          }}
        >
          Keyingi
        </Button>
      </div>
    );
  }

  if (monitorData.length === 0) {
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
          style={{ marginTop: '20px' }}
          type="primary"
          disabled={!powerBlock}
          onClick={() => getMonitor()}
        >
          Keyingi
        </Button>
      </div>
    );
  }

  if (wifiData.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Monitor tanlang
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {monitorData.map((item) => (
            <Card
              key={item.id}
              title={item.name}
              className={`transition-all duration-300 shadow-md hover:shadow-lg rounded-2xl border-2 ${
                selectedMonitorId === item.id
                  ? 'border-green-500'
                  : 'border-gray-200'
              }`}
              extra={
                selectedMonitorId === item.id ? (
                  <CheckCircleOutlined className="text-green-500 text-xl" />
                ) : null
              }
              style={{ borderRadius: '16px' }}
            >
              <p>
                <strong>Nomi:</strong> {item.name}
              </p>

              <p>
                <strong>Pixel:</strong> {item.pixel}
              </p>
              <p>
                <strong>Narxi:</strong> ${item.price}
              </p>
              <Button
                type={selectedMonitorId === item.id ? 'primary' : 'default'}
                block
                className="mt-4 rounded-xl"
                onClick={() => handleMonitorSelect(item)}
              >
                {selectedMonitorId === item.id ? 'Tanlangan' : 'Tanlash'}
              </Button>
            </Card>
          ))}
        </div>
        <Button
          style={{ marginTop: '20px' }}
          type="primary"
          disabled={!selectedMonitorId}
          onClick={() =>{
            getWifi();
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
          Wifi tanlang
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wifiData.map((item) => (
            <Card
              key={item.id}
              title={item.name}
              className={`transition-all duration-300 shadow-md hover:shadow-lg rounded-2xl border-2 ${
                selectedWifiId === item.id
                  ? 'border-green-500'
                  : 'border-gray-200'
              }`}
              extra={
                selectedWifiId === item.id ? (
                  <CheckCircleOutlined className="text-green-500 text-xl" />
                ) : null
              }
              style={{ borderRadius: '16px' }}
            >
              <p>
                <strong>Nomi:</strong> {item.name}
              </p>
              <p>
                <strong>Narxi:</strong> ${item.price}
              </p>
              <Button
                type={selectedWifiId === item.id ? 'primary' : 'default'}
                block
                className="mt-4 rounded-xl"
                onClick={() => handleWifiSelect(item)}
              >
                {selectedWifiId === item.id ? 'Tanlangan' : 'Tanlash'}
              </Button>
            </Card>
          ))}
        </div>
        <Button
          style={{ marginTop: '20px' }}
          type="primary"
          onClick={() => setIsModalOpen(true)}
        >
          Yig'ilgan narsalarni ko'rish
        </Button>
      </div>
    );
};

export default CompyuterPageData;
