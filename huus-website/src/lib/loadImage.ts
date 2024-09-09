export default function loadImage(
  url: string,
  timeoutMs: number = 10000,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image();

    const timeout = setTimeout(() => {
      reject(2);
    }, timeoutMs);

    //event listeners
    img.onload = () => {
      clearTimeout(timeout);
      resolve(img.src);
    };

    img.onerror = (err) => {
      console.error("loadImage error: ", err);
      clearTimeout(timeout);
      reject(1);
    };

    img.src = url;

    //will auto reject if an attempt exceeds a specific specified timeout limit
  });
}
