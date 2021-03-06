import React from 'react';
import { Text, Tooltip, Icon, Pane } from '@cybercongress/gravity';
import { Card, ContainerCard } from '../../components';
import { formatNumber, formatCurrency } from '../../utils/utils';
import { AUCTION } from '../../utils/config';

const TextHeader = ({ children }) => (
  <Text
    fontSize="18px"
    color="#fff"
    textTransform="capitalize"
    lineHeight="25px"
  >
    {children}
  </Text>
);

const TextNumber = ({ children }) => (
  <Text fontSize="22px" color="#fff" lineHeight="30px">
    {children}
  </Text>
);

const BalancePane = ({ spendableBalance, balance, accounts, ...props }) => {
  const data = {
    total: balance,
    vested: balance - spendableBalance,
    available: spendableBalance,
  };

  const items = Object.keys(data).map(key => (
    <Card
      key={key}
      title={key}
      stylesContainer={{ padding: '35px 0', maxWidth: '250px' }}
      value={
        <Pane display="flex" alignItems="center">
          {formatCurrency(data[key])}
          <Tooltip
            position="bottom"
            content={`${formatNumber(parseFloat(data[key]))} ${
              AUCTION.TOKEN_NAME
            }`}
          >
            <Icon icon="info-sign" color="#3ab793d4" marginLeft={5} />
          </Tooltip>
        </Pane>
      }
    />
  ));

  return (
    <ContainerCard styles={{ gridGap: '25px' }} col={3}>
      {items}
    </ContainerCard>
  );
};

export default BalancePane;
