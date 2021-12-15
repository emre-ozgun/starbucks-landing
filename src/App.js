import { lazy, Suspense } from 'react';
import Header from './components/Header';
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
			</main>
			<footer></footer>
		</>
	);
}

export default App;
