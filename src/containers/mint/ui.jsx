import React from 'react';
import { Tab, Pane } from '@cybercongress/gravity';
import {
  trimString,
  formatNumber,
  getDecimal,
  formatCurrencyNumber,
} from '../../utils/utils';

const Btn = ({ onSelect, checkedSwitch, text, disabledBtn, ...props }) => (
  <Tab
    isSelected={checkedSwitch}
    onSelect={onSelect}
    color="#36d6ae"
    boxShadow="0px 0px 10px #36d6ae"
    minWidth="100px"
    marginX={0}
    paddingX={10}
    paddingY={10}
    fontSize="18px"
    height={42}
    {...props}
  >
    {text}
  </Tab>
);

const FormatNumber = ({
  number,
  fontSizeDecimal,
  currency = 'BOOT',
  ...props
}) => {
  const formatNumberCurrency = formatCurrencyNumber(number, currency);
  const decimal = getDecimal(formatNumberCurrency.number);

  return (
    <Pane display="flex" alignItems="baseline" {...props}>
      <Pane display="flex" alignItems="baseline" marginRight={5}>
        <span style={{ fontSize: '20px' }}>
          {formatNumber(Math.floor(formatNumberCurrency.number))}
        </span>
        {decimal > 0 && (
          <>
            .
            <div style={{ fontSize: `${fontSizeDecimal || 14}px` }}>
              {getDecimal(formatNumberCurrency.number)}
            </div>
          </>
        )}
      </Pane>
      <div>{formatNumberCurrency.currency}</div>
    </Pane>
  );
};

const ItemBalance = ({ text, amount }) => {
  return (
    <Pane marginBottom={15}>
      <Pane color="#979797" fontSize="16px">
        {text}
      </Pane>
      <FormatNumber number={amount} />
    </Pane>
  );
};

export { Btn, FormatNumber, ItemBalance };