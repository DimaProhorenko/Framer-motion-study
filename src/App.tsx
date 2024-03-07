import { Routes, Route } from 'react-router-dom';
import {
	ANIMATION_CONTROLS,
	GESTURES,
	HOME,
	SCROLL_BASED_ANIMATIONS,
	VIEW_BASED_ANIMATIONS,
} from './routes';
import {
	AnimationControls,
	Basics,
	Gestures,
	Root,
	ScrollBasedAnimations,
	ViewBasedAnimations,
} from './pages';

const App = () => {
	return (
		<Routes>
			<Route element={<Root />}>
				<Route path={HOME} element={<Basics />} />
				<Route path={GESTURES} element={<Gestures />} />
				<Route
					path={ANIMATION_CONTROLS}
					element={<AnimationControls />}
				/>
				<Route
					path={VIEW_BASED_ANIMATIONS}
					element={<ViewBasedAnimations />}
				/>
				<Route
					path={SCROLL_BASED_ANIMATIONS}
					element={<ScrollBasedAnimations />}
				/>
			</Route>
		</Routes>
	);
};
export default App;
