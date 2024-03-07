import { motion, MotionConfig } from 'framer-motion';

const Gestures = () => {
	return (
		<MotionConfig
			transition={{
				duration: 0.125,
				ease: 'easeInOut',
			}}
		>
			<motion.button
				whileHover={{ scale: 1.05 }}
				whileTap={{
					scale: 1.5,
					rotate: '2.5deg',
				}}
				className='btn'
			>
				Click me
			</motion.button>
		</MotionConfig>
	);
};
export default Gestures;
