import { cubicBezier, motion } from "framer-motion";

import animatedPage from "../components/animated-page";
import pageTitle from "../components/page-title";

import { ReactElement } from "react";
import IcRoundEmail from "~icons/ic/round-email";
import IcRoundOpenInNew from "~icons/ic/round-open-in-new";
import MaterialSymbolsLocationOn from "~icons/material-symbols/location-on";
import MaterialSymbolsPermPhoneMsgRounded from "~icons/material-symbols/perm-phone-msg-rounded";
import MdiClipboardText from "~icons/mdi/clipboard-text";
import MdiFacebook from "~icons/mdi/facebook";
import MdiGithub from "~icons/mdi/github";

function contactBlock(
	icon: ReactElement,
	contentEn: string,
	contentVn: string,
	messageEn: string = "",
	messageVn: string = "",
	type: "copy" | "open" | "none" = "none",
	target: string = ""
) {
	const textMotion = {
		rest: {
			opacity: 0,
			translateY: "-1rem",
		},
		hover: {
			opacity: 1,
			translateY: "-2rem",
		},
	};

	const copiedMotion = {
		rest: {
			opacity: 0,
			transition: {
				delay: 2,
			},
		},
		hover: {
			opacity: 0,
			transition: {
				delay: 2,
			},
		},
		copied: {
			opacity: 1,
			transition: {
				duration: 0.05,
			},
		},
	};

	let enClass = localStorage.getItem("lang") === "en" ? "" : "hidden";
	let vnClass = localStorage.getItem("lang") === "vn" ? "" : "hidden";

	if (type === "open") {
		return (
			<motion.div
				className="bg-l-bg-dark dark:bg-d-bg-dark dark:text-d-white drop-shadow-xl lg:p-8 lg:text-3xl md:p-6 md:text-2xl p-4 rounded-xl sm:text-xl text-l-black text-lg xl:text-4xl"
				initial="rest"
				whileHover="hover"
			>
				<div className="flex">
					{icon}
					&nbsp;&nbsp;&nbsp;
					<div className="relative w-full">
						<div className="flex justify-between">
							<div>
								<span lang="en" className={enClass}>
									{contentEn}
								</span>
								<span lang="vn" className={vnClass}>
									{contentVn}
								</span>
							</div>
							<motion.a
								className="cursor-pointer"
								href={target}
								target="_blank"
								whileHover={{
									scale: 1.2,
								}}
							>
								<IcRoundOpenInNew />
							</motion.a>
						</div>
						<motion.div className="absolute italic left-0 lg:text-xl md:text-base text-xs top-0 w-full" variants={textMotion}>
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
	} else if (type === "copy") {
		return (
			<motion.div
				className="bg-l-bg-dark dark:bg-d-bg-dark dark:text-d-white drop-shadow-xl lg:p-8 lg:text-3xl md:p-6 md:text-2xl p-4 rounded-xl sm:text-xl text-l-black text-lg xl:text-4xl"
				initial="rest"
				whileHover="hover"
				whileTap="copied"
				onClick={() => {
					navigator.clipboard.writeText(target);
				}}
			>
				<div className="flex">
					{icon}
					&nbsp;&nbsp;&nbsp;
					<div className="relative w-full">
						<div className="flex justify-between">
							<div>
								<span lang="en" className={enClass}>
									{contentEn}
								</span>
								<span lang="vn" className={vnClass}>
									{contentVn}
								</span>
							</div>
							<motion.div
								className="cursor-pointer"
								whileHover={{
									scale: 1.2,
								}}
								onTap={() => {
									navigator.clipboard.writeText(target);
								}}
							>
								<MdiClipboardText />
							</motion.div>
						</div>
						<motion.div className="absolute italic left-0 lg:text-xl md:text-base text-xs top-0 w-full" variants={textMotion}>
							<span lang="en" className={enClass}>
								{messageEn}
								<motion.span variants={copiedMotion}> - copied</motion.span>
							</span>
							<span lang="vn" className={vnClass}>
								{messageVn}
								<motion.span variants={copiedMotion}> - đã sao chép</motion.span>
							</span>
						</motion.div>
					</div>
				</div>
			</motion.div>
		);
	} else {
		return (
			<motion.div
				className="bg-l-bg-dark dark:bg-d-bg-dark dark:text-d-white drop-shadow-xl hover:cursor-pointer lg:p-8 lg:text-3xl md:p-6 md:text-2xl p-4 rounded-xl sm:text-xl text-l-black text-lg xl:text-4xl"
				initial="rest"
				whileHover="hover"
			>
				<div className="flex">
					{icon}
					&nbsp;&nbsp;&nbsp;
					<div className="relative w-full">
						<div>
							<span lang="en" className={enClass}>
								{contentEn}
							</span>
							<span lang="vn" className={vnClass}>
								{contentVn}
							</span>
						</div>
						<motion.div className="absolute italic left-0 lg:text-xl md:text-base text-xs top-0 w-full" variants={textMotion}>
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
}

function Contact() {
	return (
		<div className="flex justify-center w-full">
			<div className="flex flex-col justify-center md:w-5/6 w-11/12">
				{animatedPage("contact", [pageTitle("Contact", "Liên hệ")])}

				<div className="gap-6 grid grid-cols-2 m-auto md:w-11/12 w-full">
					<div className="col-span-2">
						{contactBlock(
							<IcRoundEmail />,
							"duc.dao.431+job@gmail.com",
							"duc.dao.431+job@gmail.com",
							"Send email",
							"Gửi email",
							"copy",
							"duc.dao.431+job@gmail.com"
						)}
					</div>
					{contactBlock(<MdiGithub />, "itsdmd", "itsdmd", "Visit", "Xem profile", "open", "https://github.com/itsdmd")}
					{contactBlock(<MdiFacebook />, "its.dmd", "its.dmd", "Visit", "Xem profile", "open", "https://facebook.com/its.dmd")}
					{contactBlock(
						<MaterialSymbolsPermPhoneMsgRounded />,
						"(+84) 932-074-921",
						"0932 074 921",
						"Call / Send SMS",
						"Gọi điện / Zalo",
						"copy",
						"+84932074921"
					)}
					{contactBlock(<MaterialSymbolsLocationOn />, "Ho Chi Minh City, Vietnam", "Quận 1, TP. Hồ Chí Minh", "", "Địa chỉ", "none")}
				</div>
			</div>
		</div>
	);
}

export default Contact;
