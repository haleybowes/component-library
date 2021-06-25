import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import { FieldContext } from './FieldContext';
import { StyledTextArea } from './styles';

export interface TextAreaProps extends React.ComponentPropsWithRef<'textarea'> {
    isResizable?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ isResizable, ...props}, ref) => {
    const id = useContext(FieldContext);
    return <StyledTextArea isResizable={isResizable} id={id} ref={ref} {...props} />
});

TextArea.displayName = 'Field.Input';

TextArea.defaultProps = {
    isResizable: true,
}

TextArea.propTypes = {
    isResizable: PropTypes.bool,
}