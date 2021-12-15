import { lazy, Suspense } from 'react';
import Header from './components/Header';
import LegalSection from './components/LegalSection';
import Divider from './components/Divider';
// import SectionCards from './components/Section/SectionCards';

const SectionComponent = lazy(() =>
	import('./components/Section/SectionCards')
);

const renderLoader = () => <p>Loading</p>;

function App() {
	return (
		<>
			<Header />
			<main>
				<Suspense fallback={renderLoader()}>
					<SectionComponent />
				</Suspense>
				<LegalSection />
			</main>
			<Divider />

			<footer></footer>
		</>
	);
}

export default App;
