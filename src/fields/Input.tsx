import React, { forwardRef, useContext } from 'react';
import { FieldContext } from './FieldContext';
import { StyledInput } from './styles';

export const Input = forwardRef<
	HTMLInputElement,
	React.ComponentPropsWithRef<'input'>
>((props, ref) => {
	const id = useContext(FieldContext);
	return <StyledInput id={id} ref={ref} {...props} />;
});

Input.displayName = 'Field.Input';
