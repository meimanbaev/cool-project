import { Elysia } from 'elysia'

const app = new Elysia()
    .get('/', 'Hello World')
    .get('/test', 'Test Page')
    .listen(3000);
    
console.log(`Server is running at on port ${app.server?.port}`)