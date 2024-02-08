import React, { useState } from 'react';
import { Table } from 'antd';
import './AntdTable.css';

const columns = [
  {
    title: 'Services Type',
    dataIndex: 'ServicesType',
  },
  {
    title: 'Price Starts From(₹)',
    className: 'column-money',
    dataIndex: 'money',
  },
  {
    title: 'Savings',
    dataIndex: 'Savings',
  },
];

const data = [
  {
    key: '1',
    ServicesType: 'Car Inspection/Diagnostics',
    money: '499',
    Savings: '15%',
  },
  {
    key: '2',
    ServicesType: 'Inspection',
    money: '499',
    Savings: '25%',
  },
  {
    key: '3',
    ServicesType: 'Door Glass Replacement',
    money: '700',
    Savings: '30%',
  },
  {
    key: '4',
    ServicesType: 'Regular AC Service',
    money: '999',
    Savings: '20%',
  },
  {
    key: '5',
    ServicesType: 'Regular AC Service',
    money: '999',
    Savings: '20%',
  },
];

const AntdTable = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggleShow = () => {
    setShowAll(!showAll);
  };

  const visibleData = showAll ? data : data.slice(0, 3);

  return (
    <div className='w-[820px] ml-10 mb-5 mt-10'>
      <div className='w-28 h-[2px] bg-red-500'></div>
      <h1 className='text-3xl font-bold mb-5 mt-5 -tracking-wide'>Car Services Price list in Greater Noida‚ India 2024</h1>
      <Table
        columns={columns}
        dataSource={visibleData}
        pagination={false}
        className='custom-table'
      />
      {data.length > 3 && (
        <div className='float-right  cursor-pointer' onClick={handleToggleShow}>
          {showAll ? 'SEE LESS' : 'SEE MORE'}
        </div>
      )}
      <div className='text-xs font-mono mt-2 text-gray-400 -tracking-wider'>This data was last updated on 1/24/2024 </div>
    </div>
  );
};

export default AntdTable;
