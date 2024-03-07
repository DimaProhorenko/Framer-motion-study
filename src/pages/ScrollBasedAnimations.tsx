import { useScroll, motion } from 'framer-motion';

const ScrollBasedAnimations = () => {
	const { scrollYProgress } = useScroll();
	return (
		<>
			<motion.div
				className='h-1 w-full bg-purple-400 sticky top-0 left-0 origin-left'
				style={{
					scaleX: scrollYProgress,
				}}
				initial={{ scaleX: 0 }}
			></motion.div>

			<div className='max-w-2xl mx-auto text-center space-y-4 p-4'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veritatis saepe maxime blanditiis fugiat dolorum iusto, eius
					eum porro facilis aliquid, fuga distinctio cupiditate iste
					hic perferendis, possimus voluptatum beatae sit dolorem
					minus nulla aspernatur. Odit nesciunt, fugit commodi quo
					amet natus. Deserunt voluptatum recusandae dolore. Tenetur
					qui hic expedita beatae nostrum voluptatem, sunt quia
					doloremque non! Unde maxime eos tenetur qui dicta nam
					consequatur optio ipsa odio impedit? Architecto error
					doloribus eveniet nostrum voluptatem nemo delectus quidem ab
					laborum qui minus, neque quas possimus dignissimos placeat.
					Voluptatibus deleniti corporis debitis deserunt non enim
					vero sunt ipsa harum delectus mollitia officia laborum quam
					at beatae libero, distinctio, autem dicta repellendus odio.
					Iure ut quibusdam necessitatibus vel velit iste consectetur
					ipsa cumque facilis! Magnam totam reiciendis eos cupiditate
					molestias eius exercitationem optio distinctio praesentium
					rem repudiandae non consectetur accusamus placeat, sint unde
					officiis eaque! Est exercitationem atque sapiente explicabo
					voluptate sed commodi!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veritatis saepe maxime blanditiis fugiat dolorum iusto, eius
					eum porro facilis aliquid, fuga distinctio cupiditate iste
					hic perferendis, possimus voluptatum beatae sit dolorem
					minus nulla aspernatur. Odit nesciunt, fugit commodi quo
					amet natus. Deserunt voluptatum recusandae dolore. Tenetur
					qui hic expedita beatae nostrum voluptatem, sunt quia
					doloremque non! Unde maxime eos tenetur qui dicta nam
					consequatur optio ipsa odio impedit? Architecto error
					doloribus eveniet nostrum voluptatem nemo delectus quidem ab
					laborum qui minus, neque quas possimus dignissimos placeat.
					Voluptatibus deleniti corporis debitis deserunt non enim
					vero sunt ipsa harum delectus mollitia officia laborum quam
					at beatae libero, distinctio, autem dicta repellendus odio.
					Iure ut quibusdam necessitatibus vel velit iste consectetur
					ipsa cumque facilis! Magnam totam reiciendis eos cupiditate
					molestias eius exercitationem optio distinctio praesentium
					rem repudiandae non consectetur accusamus placeat, sint unde
					officiis eaque! Est exercitationem atque sapiente explicabo
					voluptate sed commodi!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veritatis saepe maxime blanditiis fugiat dolorum iusto, eius
					eum porro facilis aliquid, fuga distinctio cupiditate iste
					hic perferendis, possimus voluptatum beatae sit dolorem
					minus nulla aspernatur. Odit nesciunt, fugit commodi quo
					amet natus. Deserunt voluptatum recusandae dolore. Tenetur
					qui hic expedita beatae nostrum voluptatem, sunt quia
					doloremque non! Unde maxime eos tenetur qui dicta nam
					consequatur optio ipsa odio impedit? Architecto error
					doloribus eveniet nostrum voluptatem nemo delectus quidem ab
					laborum qui minus, neque quas possimus dignissimos placeat.
					Voluptatibus deleniti corporis debitis deserunt non enim
					vero sunt ipsa harum delectus mollitia officia laborum quam
					at beatae libero, distinctio, autem dicta repellendus odio.
					Iure ut quibusdam necessitatibus vel velit iste consectetur
					ipsa cumque facilis! Magnam totam reiciendis eos cupiditate
					molestias eius exercitationem optio distinctio praesentium
					rem repudiandae non consectetur accusamus placeat, sint unde
					officiis eaque! Est exercitationem atque sapiente explicabo
					voluptate sed commodi!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veritatis saepe maxime blanditiis fugiat dolorum iusto, eius
					eum porro facilis aliquid, fuga distinctio cupiditate iste
					hic perferendis, possimus voluptatum beatae sit dolorem
					minus nulla aspernatur. Odit nesciunt, fugit commodi quo
					amet natus. Deserunt voluptatum recusandae dolore. Tenetur
					qui hic expedita beatae nostrum voluptatem, sunt quia
					doloremque non! Unde maxime eos tenetur qui dicta nam
					consequatur optio ipsa odio impedit? Architecto error
					doloribus eveniet nostrum voluptatem nemo delectus quidem ab
					laborum qui minus, neque quas possimus dignissimos placeat.
					Voluptatibus deleniti corporis debitis deserunt non enim
					vero sunt ipsa harum delectus mollitia officia laborum quam
					at beatae libero, distinctio, autem dicta repellendus odio.
					Iure ut quibusdam necessitatibus vel velit iste consectetur
					ipsa cumque facilis! Magnam totam reiciendis eos cupiditate
					molestias eius exercitationem optio distinctio praesentium
					rem repudiandae non consectetur accusamus placeat, sint unde
					officiis eaque! Est exercitationem atque sapiente explicabo
					voluptate sed commodi!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veritatis saepe maxime blanditiis fugiat dolorum iusto, eius
					eum porro facilis aliquid, fuga distinctio cupiditate iste
					hic perferendis, possimus voluptatum beatae sit dolorem
					minus nulla aspernatur. Odit nesciunt, fugit commodi quo
					amet natus. Deserunt voluptatum recusandae dolore. Tenetur
					qui hic expedita beatae nostrum voluptatem, sunt quia
					doloremque non! Unde maxime eos tenetur qui dicta nam
					consequatur optio ipsa odio impedit? Architecto error
					doloribus eveniet nostrum voluptatem nemo delectus quidem ab
					laborum qui minus, neque quas possimus dignissimos placeat.
					Voluptatibus deleniti corporis debitis deserunt non enim
					vero sunt ipsa harum delectus mollitia officia laborum quam
					at beatae libero, distinctio, autem dicta repellendus odio.
					Iure ut quibusdam necessitatibus vel velit iste consectetur
					ipsa cumque facilis! Magnam totam reiciendis eos cupiditate
					molestias eius exercitationem optio distinctio praesentium
					rem repudiandae non consectetur accusamus placeat, sint unde
					officiis eaque! Est exercitationem atque sapiente explicabo
					voluptate sed commodi!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veritatis saepe maxime blanditiis fugiat dolorum iusto, eius
					eum porro facilis aliquid, fuga distinctio cupiditate iste
					hic perferendis, possimus voluptatum beatae sit dolorem
					minus nulla aspernatur. Odit nesciunt, fugit commodi quo
					amet natus. Deserunt voluptatum recusandae dolore. Tenetur
					qui hic expedita beatae nostrum voluptatem, sunt quia
					doloremque non! Unde maxime eos tenetur qui dicta nam
					consequatur optio ipsa odio impedit? Architecto error
					doloribus eveniet nostrum voluptatem nemo delectus quidem ab
					laborum qui minus, neque quas possimus dignissimos placeat.
					Voluptatibus deleniti corporis debitis deserunt non enim
					vero sunt ipsa harum delectus mollitia officia laborum quam
					at beatae libero, distinctio, autem dicta repellendus odio.
					Iure ut quibusdam necessitatibus vel velit iste consectetur
					ipsa cumque facilis! Magnam totam reiciendis eos cupiditate
					molestias eius exercitationem optio distinctio praesentium
					rem repudiandae non consectetur accusamus placeat, sint unde
					officiis eaque! Est exercitationem atque sapiente explicabo
					voluptate sed commodi!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veritatis saepe maxime blanditiis fugiat dolorum iusto, eius
					eum porro facilis aliquid, fuga distinctio cupiditate iste
					hic perferendis, possimus voluptatum beatae sit dolorem
					minus nulla aspernatur. Odit nesciunt, fugit commodi quo
					amet natus. Deserunt voluptatum recusandae dolore. Tenetur
					qui hic expedita beatae nostrum voluptatem, sunt quia
					doloremque non! Unde maxime eos tenetur qui dicta nam
					consequatur optio ipsa odio impedit? Architecto error
					doloribus eveniet nostrum voluptatem nemo delectus quidem ab
					laborum qui minus, neque quas possimus dignissimos placeat.
					Voluptatibus deleniti corporis debitis deserunt non enim
					vero sunt ipsa harum delectus mollitia officia laborum quam
					at beatae libero, distinctio, autem dicta repellendus odio.
					Iure ut quibusdam necessitatibus vel velit iste consectetur
					ipsa cumque facilis! Magnam totam reiciendis eos cupiditate
					molestias eius exercitationem optio distinctio praesentium
					rem repudiandae non consectetur accusamus placeat, sint unde
					officiis eaque! Est exercitationem atque sapiente explicabo
					voluptate sed commodi!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veritatis saepe maxime blanditiis fugiat dolorum iusto, eius
					eum porro facilis aliquid, fuga distinctio cupiditate iste
					hic perferendis, possimus voluptatum beatae sit dolorem
					minus nulla aspernatur. Odit nesciunt, fugit commodi quo
					amet natus. Deserunt voluptatum recusandae dolore. Tenetur
					qui hic expedita beatae nostrum voluptatem, sunt quia
					doloremque non! Unde maxime eos tenetur qui dicta nam
					consequatur optio ipsa odio impedit? Architecto error
					doloribus eveniet nostrum voluptatem nemo delectus quidem ab
					laborum qui minus, neque quas possimus dignissimos placeat.
					Voluptatibus deleniti corporis debitis deserunt non enim
					vero sunt ipsa harum delectus mollitia officia laborum quam
					at beatae libero, distinctio, autem dicta repellendus odio.
					Iure ut quibusdam necessitatibus vel velit iste consectetur
					ipsa cumque facilis! Magnam totam reiciendis eos cupiditate
					molestias eius exercitationem optio distinctio praesentium
					rem repudiandae non consectetur accusamus placeat, sint unde
					officiis eaque! Est exercitationem atque sapiente explicabo
					voluptate sed commodi!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veritatis saepe maxime blanditiis fugiat dolorum iusto, eius
					eum porro facilis aliquid, fuga distinctio cupiditate iste
					hic perferendis, possimus voluptatum beatae sit dolorem
					minus nulla aspernatur. Odit nesciunt, fugit commodi quo
					amet natus. Deserunt voluptatum recusandae dolore. Tenetur
					qui hic expedita beatae nostrum voluptatem, sunt quia
					doloremque non! Unde maxime eos tenetur qui dicta nam
					consequatur optio ipsa odio impedit? Architecto error
					doloribus eveniet nostrum voluptatem nemo delectus quidem ab
					laborum qui minus, neque quas possimus dignissimos placeat.
					Voluptatibus deleniti corporis debitis deserunt non enim
					vero sunt ipsa harum delectus mollitia officia laborum quam
					at beatae libero, distinctio, autem dicta repellendus odio.
					Iure ut quibusdam necessitatibus vel velit iste consectetur
					ipsa cumque facilis! Magnam totam reiciendis eos cupiditate
					molestias eius exercitationem optio distinctio praesentium
					rem repudiandae non consectetur accusamus placeat, sint unde
					officiis eaque! Est exercitationem atque sapiente explicabo
					voluptate sed commodi!
				</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veritatis saepe maxime blanditiis fugiat dolorum iusto, eius
					eum porro facilis aliquid, fuga distinctio cupiditate iste
					hic perferendis, possimus voluptatum beatae sit dolorem
					minus nulla aspernatur. Odit nesciunt, fugit commodi quo
					amet natus. Deserunt voluptatum recusandae dolore. Tenetur
					qui hic expedita beatae nostrum voluptatem, sunt quia
					doloremque non! Unde maxime eos tenetur qui dicta nam
					consequatur optio ipsa odio impedit? Architecto error
					doloribus eveniet nostrum voluptatem nemo delectus quidem ab
					laborum qui minus, neque quas possimus dignissimos placeat.
					Voluptatibus deleniti corporis debitis deserunt non enim
					vero sunt ipsa harum delectus mollitia officia laborum quam
					at beatae libero, distinctio, autem dicta repellendus odio.
					Iure ut quibusdam necessitatibus vel velit iste consectetur
					ipsa cumque facilis! Magnam totam reiciendis eos cupiditate
					molestias eius exercitationem optio distinctio praesentium
					rem repudiandae non consectetur accusamus placeat, sint unde
					officiis eaque! Est exercitationem atque sapiente explicabo
					voluptate sed commodi!
				</p>
			</div>
		</>
	);
};
export default ScrollBasedAnimations;
