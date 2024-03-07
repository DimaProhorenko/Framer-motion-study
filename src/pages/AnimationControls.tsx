import { motion, useAnimationControls } from 'framer-motion';

const AnimationControls = () => {
	const controls = useAnimationControls();

	const handleClick = () => {
		controls.start('flip');
	};

	return (
		<div className='flex items-center gap-10'>
			<button className='btn' onClick={handleClick}>
				Click me
			</button>
			<motion.div
				variants={{
					initial: {
						rotate: 0,
					},
					flip: {
						rotate: 360,
					},
				}}
				initial='initial'
				animate={controls}
				className='w-40 h-40 bg-black'
			></motion.div>
		</div>
	);
};
export default AnimationControls;
