import React, { useState } from 'react';
import InvestmentForm from './components/InvestmentForm/InvestmentForm';
import InvestmentList from './components/InvestmentList/InvestmentList';
import Header from './components/Header/Header';

function App() {
  const [userInput, setUserInput] = useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = []; // per-year results
  if(userInput) {
    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest, // 1년 동안의 이자
        savingsEndOfYear: currentSavings, // 저죽액
        yearlyContribution: yearlyContribution, // 추가된 기여액
      });
    }
  }

  return (
    <div>
      <Header />

      <InvestmentForm onCalculate={calculateHandler} />

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {!userInput && <p style={{textAlign: 'center'}}>No investment calculated yet.</p>}
      {userInput && <InvestmentList items={yearlyData} initialInvestment={userInput['current-savings']} />}

    </div>
  );
}

export default App;
