import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const ViewBasedAnimations = () => {
	const ref = useRef(null);
	const isInView = useInView(ref, {
		once: true,
	});

	return (
		<>
			<div className='h-[150vh]'></div>
			<motion.div
				className='w-full h-screen bg-black'
				initial={{ opacity: 0 }}
				whileInView={{
					opacity: 1,
					transition: {
						duration: 2,
					},
				}}
			></motion.div>
			<div
				ref={ref}
				className='h-screen transition-colors'
				style={{
					backgroundColor: isInView ? 'red' : 'blue',
					transition: '1s ease-in-out',
				}}
			></div>
		</>
	);
};
export default ViewBasedAnimations;
