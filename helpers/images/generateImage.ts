import {saveImageFromUrl} from './saveImages.ts';

const baseUrl = 'https://api.openai.com/v1/images/generations';
const openaiApiKey = process.env.OPENAI_API_KEY;
async function generateImage(prompt: string): Promise<any> {
    const response = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openaiApiKey}`
    },
        body: JSON.stringify({
            model: 'dall-e-3',
            prompt: prompt,
        })
    });

    const {data} = await response.json();

    data.forEach((image: any, index: number) => {
        const timestamp = new Date().toISOString().replace(/[^0-9]/g, '');
        const imageName = `${prompt.replace(/\s/g, '-').toLowerCase()}-${timestamp}-${index}.png`;
        saveImageFromUrl(image.url, imageName);
    });
}

export {generateImage};