import { Combobox } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tab } from '@headlessui/react';

function MyTabs() {
  return (
    <Tab.Group>
      <Tab.List>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>Content 1</Tab.Panel>
        <Tab.Panel>Content 2</Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
const coinList = [
  {
    symbol: 'BTC',
    name: 'Bitcoin',
    img: 'https://app.whalemap.io/img/bitcoin.svg',
  },
  {
    symbol: 'PEPE',
    name: 'Pepe',
    img: 'https://app.whalemap.io/img/bitcoin.svg',
  },
  {
    symbol: 'LTC',
    name: 'Ltc',
    img: 'https://app.whalemap.io/img/bitcoin.svg',
  },
  {
    symbol: 'ETH',
    name: 'eth',
    img: 'https://app.whalemap.io/img/bitcoin.svg',
  },
  {
    symbol: 'DOGE',
    name: 'doge',
    img: 'https://app.whalemap.io/img/bitcoin.svg',
  },
];

const Sidebar = () => {
  const [selectedCoin, setSelectedCoin] = useState(coinList[0]);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const filteredCoin =
    query === ''
      ? coinList
      : coinList.filter((person) => {
          return person.name.toLowerCase().includes(query.toLowerCase());
        });

  useEffect(() => {
    navigate(`/${selectedCoin.symbol}`);
  }, [selectedCoin]);

  return (
    <div>
      <MyTabs />
      <Combobox value={selectedCoin} onChange={setSelectedCoin}>
        <Combobox.Input
          onChange={(event) => setQuery(event.target.value)}
          displayValue={(coin) => coin.name}
        />
        <Combobox.Options>
          {filteredCoin.map((coin) => (
            <Combobox.Option
              key={coin.id}
              value={coin}
              className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
            >
              {/* <CheckIcon className="hidden ui-selected:block" /> */}
              {coin.name}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};

export default Sidebar;
