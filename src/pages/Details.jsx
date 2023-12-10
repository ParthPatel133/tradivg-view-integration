import { useParams } from 'react-router-dom';

import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets';

const Details = () => {
  const { symbol } = useParams();
  return (
    <div>
      details page - {symbol}
      <AdvancedRealTimeChart
        symbol={symbol}
        theme="dark"
        autosize
        allow_symbol_change={false}
        
      ></AdvancedRealTimeChart>
    </div>
  );
};

export default Details;
