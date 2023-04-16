import { motion } from "framer-motion";

import animatedPage from "../components/animated-page";
import pageTitle from "../components/page-title";

import { ReactElement } from "react";
import IcRoundEmail from "~icons/ic/round-email";
import MaterialSymbolsPermPhoneMsgRounded from "~icons/material-symbols/perm-phone-msg-rounded";
import MdiGithub from "~icons/mdi/github";
import MdiFacebook from "~icons/mdi/facebook";
import MaterialSymbolsLocationOn from "~icons/material-symbols/location-on";

function contactBlock(icon: ReactElement, contentEn: string, contentVn: string, url: string = "", messageEn: string = "", messageVn: string = "") {
	const textMotion = {
		rest: {
			translateY: -15,
			opacity: 0,
		},
		hover: {
			translateY: -30,
			opacity: 1,
		},
	};

	let enClass = localStorage.getItem("lang") === "en" ? "" : "hidden";
	let vnClass = localStorage.getItem("lang") === "vn" ? "" : "hidden";

	return (
		<motion.div
			className="bg-l-bg-dark hover:cursor-pointer xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl text-lg lg:p-8 md:p-6 p-4 rounded-xl"
			initial="rest"
			whileHover="hover"
		>
			<div className="flex">
				{icon}
				&nbsp;&nbsp;&nbsp;
				<div className="relative">
					<a href={url} target="_blank">
						<span lang="en" className={enClass}>
							{contentEn}
						</span>
						<span lang="vn" className={vnClass}>
							{contentVn}
						</span>
					</a>
					<motion.div className="absolute italic left-0 text-l-black text-xl top-0" variants={textMotion}>
						<span lang="en" className={enClass}>
							{messageEn}
						</span>
						<span lang="vn" className={vnClass}>
							{messageVn}
						</span>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}

function Contact() {
	return (
		<div className="flex justify-center w-full">
			<div className="flex flex-col justify-center md:w-5/6 w-11/12">
				{animatedPage("contact", [pageTitle("Contact", "Liên hệ")])}

				<div className="gap-6 grid grid-cols-2">
					<div className="col-span-2">
						{contactBlock(
							<IcRoundEmail />,
							"duc.dao.431+job@gmail.com",
							"duc.dao.431+job@gmail.com",
							"mailto:duc.dao.431+job@gmail.com",
							"Send email",
							"Gửi email"
						)}
					</div>
					{contactBlock(<MdiGithub />, "itsdmd", "itsdmd", "https://github.com/itsdmd", "Visit", "Xem profile")}
					{contactBlock(<MdiFacebook />, "its.dmd", "its.dmd", "https://facebook.com/its.dmd", "Visit", "Xem profile")}
					{contactBlock(
						<MaterialSymbolsPermPhoneMsgRounded />,
						"+84 932 074 921",
						"0932 074 921",
						"tel:84932074921",
						"Call / Send SMS",
						"Gọi điện / Zalo"
					)}
					{contactBlock(<MaterialSymbolsLocationOn />, "Ho Chi Minh City, Vietnam", "Quận 1, TP. Hồ Chí Minh", "#contact", "Location", "Địa chỉ")}
				</div>
			</div>
		</div>
	);
}

export default Contact;
