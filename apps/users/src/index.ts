import {serve} from '@hono/node-server'
import {Context, Hono} from 'hono'
import add from "@magnuswahlstrand/math"

const app = new Hono()

app.get('/', (c: Context) => {
    return c.text(`Hello Hono 3! ${add(1, 2)}`)
})

app.get('/posts', (c: Context) => {
    return c.text('Many posts')
})

const port = 3000

serve({
    fetch: app.fetch,
    port
})

export default app