import app from './app';
import { ensureConnection } from './ngrok';
import { PORT } from './constants/settings.constants';

app.listen(PORT, async () => {
  console.log(`Listening on port ${PORT}`);
  if (process.env.NODE_ENV === 'development') {
    await ensureConnection((url) => {
      console.log(`Listening to ${url}`);
    });
  }
});

export { app };
