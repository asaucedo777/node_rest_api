import { createConnection } from 'typeorm';

import app from './app/app';
import connectionOptions from './connectionOptions';

// Validate database connection
(
  async () => {
    try {
      const connection = await createConnection(connectionOptions);
      await connection.runMigrations();
    } catch (error) {
      console.log('Error while connecting to database: ', error);
      return error;
    }
  }
)();

// Start application
app.listen(app.get('port'), () => {
  console.log(
    '  App is running at http://localhost:%d in %s mode',
    app.get('port'),
    app.get('env'),
  );
  console.log('  Press CTRL-C to stop\n');
});
