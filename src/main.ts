import getStream from 'get-stream';



window.setTimeout(async () => {


  const { body: readableStream } = await fetch('http://localhost:4200');
  if (!readableStream) {
    throw new Error('Failed to fetch');
  }
  console.log(await getStream(readableStream));
}, 0);