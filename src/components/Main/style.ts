import styled from 'styled-components';

export const StyledMain = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;

	width: 100%;
	height: 100vh;

	background: linear-gradient(
			to bottom,
			var(--color-primary-blue1),
			var(--color-primary-blue1),
			var(--color-primary-blue1),
			var(--color-primary-blue)
		),
		var(--color-primary-blue);

	.banner {
		width: 100%;
	}
`;

export const StyledSection = styled.section`
	position: absolute;
	bottom: 16%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;

	width: 80%;
	height: fit-content;

	color: var(--color-white);

	text-align: center;

	.title {
		font-family: 'Olim Futura', sans-serif;
		font-size: 32px;
		font-weight: 500;
	}

	.paragraph {
		width: 50%;
	}
`;
