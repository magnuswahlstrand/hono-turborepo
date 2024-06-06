import { test, describe } from 'node:test';
import assert from 'node:assert';
import app from "@repo/apps/users/src";
describe('Example', () => {
    test('GET /posts', async () => {
        const res = await app.request('/posts');
        assert.equal(res.status, 200);
        // expect(await res.text()).toBe('Many posts')
    });
});
