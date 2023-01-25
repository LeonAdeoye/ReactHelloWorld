import {rest} from 'msw'

export const handlers = [
    rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) =>
    {
        return res(
            ctx.status(200),
            ctx.json([{
                id: 1,
                title: "Horatio is 10 years old."
            },
            {
                id: 2,
                title: "Harper is 6 years old.",
            }])
        )
    }),
    rest.post('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) =>
    {
        return res(
            ctx.status(200),
        )
    })
];

