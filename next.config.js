/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		MSSQL_HOST: "127.0.0.1",
		MSSQL_PORT: "1433",
		MSSQL_DATABASE: "JS_Billing",
		MSSQL_USER: "sa",
		MSSQL_PASSWORD: "root",
		NEXT_PUBLIC_API_URL: "http://localhost:3000",
	},
};

module.exports = nextConfig;
