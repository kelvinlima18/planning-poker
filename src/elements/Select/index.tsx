import React, { useState } from 'react';

import { Container, Options } from './styles';


const Select: React.FC = () => {
  const [openList, setOpenList] = useState(false);
  const [optionsList, setOptionsList] = useState([
    { option: 'Fibonacci', selected: false }
  ]);

  const optionSelected = optionsList.find(item => item.selected);

  const selectedOption = (option: string) => {
    setOptionsList(prev => prev.map(opt => {
      if (opt.option === option) {
        opt.selected = true;
      } else {
        opt.selected = false;
      }

      return opt;
    }));
  };
  
  return (
    <Container>
      <button 
        className="input-display"
        type="button"
        onClick={() => setOpenList(old => !old)}
      >
        {optionSelected ? optionSelected.option : 'Selecione um formato'}
      </button>

      {openList && (
        <Options open={openList}>
          {optionsList.map(item => (
            <button type="button" onClick={() => {
              selectedOption(item.option);
              setOpenList(false);
            }}>
              {item.option}
            </button>
          ))}
        </Options>
      )}
    </Container>
  );
}

export default Select;