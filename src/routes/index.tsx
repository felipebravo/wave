import { Route, Routes } from 'react-router-dom';
import { LandingPage } from '../pages/Landing';

export const MainRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="*" element={<LandingPage />} />
		</Routes>
	);
};
