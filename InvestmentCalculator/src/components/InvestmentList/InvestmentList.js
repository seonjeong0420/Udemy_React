import React from 'react';
import styled from 'styled-components';
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

const ResultTable = styled.table`
  max-width: 50rem;
  margin: 2rem auto;
  padding: 1rem;
  table-layout: fixed;
  border-spacing: 1rem;
  text-align: right;
  thead {
    font-size: 0.7rem;
    color: #83e6c0;
  }
  tbody {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 0.85rem;
    color: #c2e9e0;
  }
`;

const InvestmentList = (props) => {
  return (
    <ResultTable>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map(item => (
          <tr key={item.year}>
            <td>{item.year}</td>
            <td>{formatter.format(item.savingsEndOfYear)}</td>
            <td>{formatter.format(item.yearlyInterest)}</td>
            <td>{formatter.format(item.savingsEndOfYear - props.initialInvestment - item.yearlyContribution * item.year)}</td>
            <td>{formatter.format(props.initialInvestment + item.yearlyContribution * item.year)}</td>
          </tr>
        ))}
      </tbody>
    </ResultTable>
  )
}

export default InvestmentList