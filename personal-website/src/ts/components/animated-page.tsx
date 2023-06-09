import { motion } from "framer-motion";

const animatedPage = (name: string = "", element: JSX.Element[] | undefined) => {
	return (
		<motion.div id={name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }} exit={{ opacity: 0 }}>
			{element}
		</motion.div>
	);
};

export default animatedPage;
