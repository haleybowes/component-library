import React from 'react';
import { StyledButton } from './styles';
import PropTypes from 'prop-types'

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
	variant?: 'secondary' | 'primary' | 'danger';
	size?: 'small' | 'medium' | 'large';
	isFullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps & React.ComponentPropsWithoutRef<'button'>>(
	({ children, variant, size, isFullWidth, ...rest }, ref) => {
		return (
			<StyledButton
				variant={variant}
				size={size}
				isFullWidth={isFullWidth}
				type="button"
				ref={ref}
				{...rest}
			>
				{children}
			</StyledButton>
		);
	}
);

// Check proptypes at run time vs. typescript which checks at build time
Button.propTypes = {
	variant: PropTypes.oneOf(['secondary', 'primary', 'danger']),
	size: PropTypes.oneOf(['small', 'medium', 'large']),
	isFullWidth: PropTypes.bool,
}

Button.displayName = 'Button';
Button.defaultProps = {
	variant: 'secondary',
	size: 'medium',
	isFullWidth: false,
};
