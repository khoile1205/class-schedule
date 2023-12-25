import { toast } from "react-toastify";

type statusToast = "success" | "error" | "loading" | "info" | "warning";

export const openToast = (status: statusToast, message: string) => {
	switch (status) {
		case "success":
			toast.success(message);
			break;
		case "error":
			toast.error(message);
			break;
		case "loading":
			toast.loading(message, {});
			break;
		case "info":
			toast.info(message, {});
			break;
		case "warning":
			toast.warning(message, {});
			break;
		default:
			break;
	}
};
