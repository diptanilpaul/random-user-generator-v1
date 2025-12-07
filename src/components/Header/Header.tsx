import Link from "next/link";
import { AuroraText } from "../magicui/aurora-text";
import RefetchButton from "../RefetchButton";
import ThemeToggleButton from "../ThemeToggleButton";

const Header = () => {
	return (
		<header
			className="fixed right-0 left-0 border-b shadow"
			aria-label="app-header">
			<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
				<nav className="flex items-center gap-2">
					<Link href={"/"}>
						<AuroraText
							className="text-2xl font-semibold"
							aria-label="App Name">
							Random User
						</AuroraText>
					</Link>
					<div className="mt-1.5">
						<ThemeToggleButton />
					</div>
				</nav>
				<RefetchButton />
			</div>
		</header>
	);
};

export default Header;
