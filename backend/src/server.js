import app from "./app.js";
import env from "./config/env.js";
import { connectDB } from "./config/db.js";

const PORT = env.PORT || 5000;
connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
