import styled, { css } from 'styled-components';

interface iButtonTypeVariationsProps {
	variant?: 'header' | 'landing' | 'form';
}

const ButtonTypeVariations = {
	header: css`
		width: fit-content;
		height: 44px;
		padding: 4px 12px;

		border-radius: 8px;

		border: 1px solid var(--color-white);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

		background-color: var(--color-primary-blue);

		font-family: 'Olim Futura', sans-serif;
		font-style: normal;
		font-weight: 400;
		font-size: 32px;
		line-height: 32px;

		color: var(--color-white);

		opacity: 0.8;

		&:hover {
			transition: 0.5s;

			box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.25);

			opacity: 1;
		}
	`,
	landing: css`
		width: fit-content;
		height: 44px;
		padding: 4px 24px;

		border-radius: 8px;

		border: 1px solid var(--color-primary-yellow);
		box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

		background-color: var(--color-primary-yellow);

		font-style: normal;
		font-weight: 600;
		font-size: 16px;
		line-height: 24px;

		opacity: 0.8;

		&:hover {
			transition: 0.5s;

			box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.25);

			opacity: 1;
		}
	`,
	form: css``,
};

export const StyledButton = styled.button<iButtonTypeVariationsProps>`
	${({ variant }) => ButtonTypeVariations[variant || 'form']}
`;
