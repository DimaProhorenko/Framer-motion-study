import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

const Root = () => {
	return (
		<>
			<Nav />
			<div className='grid grid-cols-1 place-content-center min-h-screen'>
				<Outlet />
			</div>
		</>
	);
};
export default Root;
