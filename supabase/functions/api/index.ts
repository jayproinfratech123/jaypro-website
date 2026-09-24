import { createHandler } from './handler.js';

Deno.serve(createHandler({ env: Deno.env.toObject() }));
