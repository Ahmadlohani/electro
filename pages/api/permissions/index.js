import WebPermissions from "@/models/WebPermissions";

export default async function handler(req, res) {
	const { method } = req;
	switch (method) {
		case "POST":
			try {
				const result = await WebPermissions.findAll();
				return res.json({
					success: true,
					message: "Data Loaded",
					data: result,
				});
			} catch (error) {
				return res.json({
					success: false,
					error,
				});
			}
			break;
		default:
			break;
	}
}
