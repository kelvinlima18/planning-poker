import { useField } from '@unform/core';
import React, { ComponentType, InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { IconBaseProps } from 'react-icons';

import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon: ComponentType<IconBaseProps>;
}

export const InputForm: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const { fieldName, registerField, error } = useField(name);

  const handleIsFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value;
      }
    })
  }, [fieldName, registerField]);
  
  return (
    <>
      <Container isFilled={isFilled} isFocused={isFocused}>
        {Icon && <Icon />}
        <input 
          onFocus={handleIsFocus}
          onBlur={handleInputBlur}
          type="text"
          name={name}
          ref={inputRef}
          {...rest} 
          />
      </Container>
      <Error>
        {error}
      </Error>
    </>
  );
}
