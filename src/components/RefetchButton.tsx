import { RefreshCwIcon } from "lucide-react";
import { Button } from "./shadcnui/button";

const RefetchButton = () => {
	return (
		<Button className="cursor-pointer bg-blue-400 text-white hover:bg-blue-500 dark:bg-fuchsia-400 hover:dark:bg-fuchsia-500">
			<RefreshCwIcon /> Refetch
		</Button>
	);
};

export default RefetchButton;
