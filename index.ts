import { generateImage } from "./helpers";

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
    console.error('OPENAI_API_KEY is required');
    process.exit(1);
}


// generateImage('my girlfriend whos name is ellie and has blonde hair and blue eyes and does pilates');


// function readStreamOfImages(): Promise<any> {
//     const stream =
//     return Bun.read('images');
// }

// saveImageFromUrl('https://www.jsonline.com/gcdn/presto/2020/01/02/PMJS/4cbf91ff-57be-4b4c-9940-415efab0e881-CNI_bk_PUPPYPLAY8_0107_PZ_M.JPG?crop=2131,2131,x1,y0')

// const server = Bun.serve({
//     port: 3000,
//     fetch(req) {
//         const { pathname } = new URL(req.url, `http://${req.url}`);
//         if (pathname === '/') {
//             return new Response('Hello, world!');
//         } else {
//             return new Response('Not found', { status: 404, statusText: 'Not Found' });
//         }
//     }
// })
//
// console.log(`Listening on http://localhost:${server.port} ...`);
