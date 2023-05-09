import { StyledMain, StyledSection } from './style';
import banner from '../../assets/WAVE-banner.svg';
import { Button } from '../Button';

export const Main = () => {
	return (
		<StyledMain>
			<picture>
				<img src={banner} alt="Banner image" className="banner" />
			</picture>
			<StyledSection>
				<h2 className="title">Converse de forma fácil e divertida</h2>
				<p className="paragraph">
					Chega de mensagens chatas e burocráticas. Com o Wave, você
					pode conversar com seus amigos e colegas de forma fácil e
					divertida, como se estivessem em uma sala de bate-papo. Crie
					canais para assuntos específicos, envie emojis e GIFs
					engraçados, faça videochamadas em grupo e compartilhe
					arquivos sem complicação. O Wave é a ferramenta perfeita
					para quem quer se comunicar de forma descomplicada e
					descontraída. Experimente agora e comece a se divertir com
					seus amigos no Wave!
				</p>
				<Button variant="landing">Abra no seu navegador</Button>
			</StyledSection>
		</StyledMain>
	);
};
