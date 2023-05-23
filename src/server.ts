/**import express from "express" 
 * import "./database/index"
*/

import { http } from './http';
import './websocket/client';
import './websocket/admin';
import { request } from 'express';

/**yarn dev para iniciar o localhost */
/** */

http.listen(3333, () => console.log("Server is running on port 3333"));