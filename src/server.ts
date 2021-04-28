import app from "./app";
import { PORT } from "./constants/settings.constants";

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

export { app }
