import postgres from "postgres";
import env from "./env.js";

const connectionString = env.DATABASE_URL;

// create client
const sql = postgres(connectionString, {
    ssl: "require", // required for Supabase
});

// test connection
export const connectDB = async () => {
    try {
        await sql`SELECT 1`;
        console.log("✅ Database connected");
    } catch (err) {
        console.error("❌ Database connection failed:", err.message);
        process.exit(1);
    }
};

export default sql;
