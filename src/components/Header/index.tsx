import { Button } from '../Button';
import { StyledHeader } from './style';

export const Header = () => {
	return (
		<StyledHeader>
			<div>
				<h1 className="logo">wave</h1>
			</div>
			<div className="nav">
				<Button variant="header">Cadastre-se</Button>
				<Button variant="header">Login</Button>
			</div>
		</StyledHeader>
	);
};
