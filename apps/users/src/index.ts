import {serve} from '@hono/node-server'
import {Hono} from 'hono'
import add from "math"

const app = new Hono()

app.get('/', (c) => {
    return c.text(`Hello Hono 3! ${add(1, 2)}`)
})

app.get('/posts', (c) => {
    return c.text('Many posts')
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
    fetch: app.fetch,
    port
})

export default app