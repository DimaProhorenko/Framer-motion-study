import { NavLink } from 'react-router-dom';
import {
	ANIMATION_CONTROLS,
	GESTURES,
	HOME,
	SCROLL_BASED_ANIMATIONS,
	VIEW_BASED_ANIMATIONS,
} from '../routes';

type INavLink = {
	id: number;
	label: string;
	path: string;
};

const navLinks = [
	{
		id: 0,
		label: 'Basics',
		path: HOME,
	},
	{
		id: 1,
		label: 'Gestures',
		path: GESTURES,
	},
	{
		id: 2,
		label: 'Animation Controls',
		path: ANIMATION_CONTROLS,
	},
	{
		id: 3,
		label: 'View Based Animations',
		path: VIEW_BASED_ANIMATIONS,
	},
	{
		id: 4,
		label: 'Scroll Based Animations',
		path: SCROLL_BASED_ANIMATIONS,
	},
];

const Nav = () => {
	return (
		<nav className='py-4'>
			<ul className='flex gap-3 justify-center items-center'>
				{navLinks.map((link: INavLink) => (
					<li key={link.id}>
						<NavLink to={link.path}>{link.label}</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
export default Nav;
