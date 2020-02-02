import 'module-alias/register';
import server from '@app/config/server';

server.listen(3000, () => {
  console.log(`[SERVER] Running at http://localhost:3000`);
});