import axios from 'axios';

import { host, port } from '../../json-server.json';

const api = axios.create({
  baseURL: `http://${host}:${port}`,
});

export { api };
