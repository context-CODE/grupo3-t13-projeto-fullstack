import app from './app';
import AppDataSource from './data-source';
(async () => {
  await AppDataSource.initialize()
    .then(() => {
      console.log('database connected');
    })
    .catch((error) => {
      console.log('failed to connect to database❌', error);
    });

  const PORT = 3001;
  app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT} 🚀`);
  });
})();
