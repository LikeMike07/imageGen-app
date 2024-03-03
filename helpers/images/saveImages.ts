
async function saveImageFromUrl(url: string, imageName: string): Promise<any> {
    const response = await fetch(url);
    // what does buffer do?
    // https://developer.mozilla.org/en-US/docs/Web/API/Body/arrayBuffer
    const buffer = await response.arrayBuffer();
    // https://developer.mozilla.org/en-US/docs/Web/API/Blob/Blob
    const blob = new Blob([buffer]);
    await Bun.write(`images/${imageName}`, blob);
}

export {saveImageFromUrl};