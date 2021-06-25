import React, { forwardRef, useContext } from 'react';
import { FieldContext } from './FieldContext';
import { StyledLabel } from './styles';

export const Label = forwardRef<HTMLLabelElement, React.ComponentPropsWithRef<'label'>>((props, ref) => {
    const id = useContext(FieldContext);
    return <StyledLabel htmlFor={id} ref={ref} {...props} />
});

Label.displayName = 'Field.Label';