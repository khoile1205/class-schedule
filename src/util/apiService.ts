import { getCookie } from "cookies-next";

class ApiService {
	constructor() {}

	private getHeaders(token?: string): Headers {
		const headers = new Headers();
		const BearerToken = getCookie("a_t");
		headers.append("Content-Type", "application/json");
		headers.append("Authorization", `Bearer ${token ? token : BearerToken}`);
		return headers;
	}

	private getHeadersFormData(): Headers {
		const headers = new Headers();
		const BearerToken = getCookie("a_t");
		headers.append("Authorization", `Bearer ${BearerToken}`);
		return headers;
	}

	async get(url: string, token?: string): Promise<Response> {
		try {
			return await fetch(`${process.env.NEXT_PUBLIC_API}${url}`, {
				next: { revalidate: 0 },
				method: "GET",
				headers: this.getHeaders(token),
			});
		} catch (error) {
			console.error("Error:", error);
			throw error;
		}
	}

	async post(url: string, data: any, token?: string): Promise<Response> {
		try {
			return await fetch(`${process.env.NEXT_PUBLIC_API}${url}`, {
				next: { revalidate: 0 },
				method: "POST",
				headers: this.getHeaders(token),
				body: JSON.stringify(data),
			});
		} catch (error) {
			console.error("Error:", error);
			throw error;
		}
	}

	async patch(url: string, data: any, token?: string): Promise<Response> {
		try {
			return await fetch(`${process.env.NEXT_PUBLIC_API}${url}`, {
				next: { revalidate: 0 },
				method: "PATCH",
				headers: this.getHeaders(token),
				body: JSON.stringify(data),
			});
		} catch (error) {
			console.error("Error:", error);
			throw error;
		}
	}

	async put(url: string, data: any, token?: string): Promise<Response> {
		try {
			return await fetch(`${process.env.NEXT_PUBLIC_API}${url}`, {
				next: { revalidate: 0 },
				method: "PUT",
				headers: this.getHeaders(token),
				body: JSON.stringify(data),
			});
		} catch (error) {
			console.error("Error:", error);
			throw error;
		}
	}

	async delete(url: string): Promise<Response> {
		try {
			return await fetch(`${process.env.NEXT_PUBLIC_API}${url}`, {
				next: { revalidate: 0 },
				method: "DELETE",
				headers: this.getHeaders(),
			});
		} catch (error) {
			console.error("Error:", error);
			throw error;
		}
	}

	async uploadImages(url: string, imageFiles: File[], imageFieldName: string): Promise<Response> {
		try {
			const formData = new FormData();
			imageFiles.forEach((imageFile) => {
				formData.append(imageFieldName, imageFile);
			});

			return await fetch(`${process.env.NEXT_PUBLIC_API}${url}`, {
				method: "POST",
				headers: this.getHeadersFormData(),
				body: formData,
			});
		} catch (error) {
			console.error("Error:", error);
			throw error;
		}
	}
}

const apiService = new ApiService();
export default apiService;
