import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const Basics = () => {
	const [isVisible, setIsVisible] = useState(true);
	const handleClick = () => {
		setIsVisible((prevState) => !prevState);
	};
	return (
		<div className='flex items-center gap-10'>
			<motion.button layout className='btn' onClick={handleClick}>
				Click me
			</motion.button>
			<AnimatePresence>
				{isVisible && (
					<motion.div
						initial={{ rotate: 0, scale: 0 }}
						animate={{ rotate: 180, scale: 1 }}
						exit={{
							rotate: 0,
							scale: 0,
						}}
						transition={{
							duration: 1,
							ease: 'backInOut',
						}}
						className='w-40 h-40 bg-black'
					></motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
export default Basics;
