import styled from 'styled-components';

export const StyledHeader = styled.header`
	z-index: 1;
	position: absolute;
	top: 0;

	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	height: 10vh;
	padding: 10px 60px;

	background: linear-gradient(
			0deg,
			rgba(39, 177, 184, 0.2),
			rgba(39, 177, 184, 0.2)
		),
		var(--color-primary-blue);

	color: var(--color-white);

	.logo {
		font-family: 'Olim Futura', sans-serif;
	}

	.nav {
		display: flex;
		gap: 10px;
	}
`;
