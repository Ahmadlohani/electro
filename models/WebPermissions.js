import database from "@/lib/db";
import { DataTypes } from "sequelize";
var WebPermissions = database.define("webpermissions", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true,
	},
	user_role: DataTypes.STRING,
	company: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	floor: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	customer: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	user: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	role: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	graph: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	billing: {
		type: DataTypes.STRING,
		allowNull: false,
	},
});
export default WebPermissions;
