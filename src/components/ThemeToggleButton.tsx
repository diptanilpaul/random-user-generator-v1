"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggleButton = () => {
	const { theme, setTheme } = useTheme();

	return (
		<button
			aria-label="ThemeToggleButton"
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className="flex cursor-pointer items-center">
			<Sun
				size={20}
				className="-rotate-90 text-blue-400 opacity-100 transition-all duration-300 dark:rotate-0 dark:opacity-0"
			/>

			<MoonStar
				size={20}
				className="absolute -rotate-90 text-fuchsia-400 opacity-0 transition-all duration-300 dark:rotate-0 dark:opacity-100"
			/>
		</button>
	);
};

export default ThemeToggleButton;
