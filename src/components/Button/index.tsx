import { ReactNode } from 'react';
import { StyledButton } from './style';

interface iButtonProps {
	variant: 'header' | 'landing' | 'form';
	children: ReactNode;
}

export const Button = ({ variant, children }: iButtonProps) => {
	return <StyledButton variant={variant}>{children}</StyledButton>;
};
