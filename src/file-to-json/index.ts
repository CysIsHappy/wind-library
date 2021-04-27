export default function fileToJson(file: File) {
  const fileReader = new FileReader();
  fileReader.readAsText(file);
  return new Promise((resolve, reject) => {
    fileReader.onload = () => {
      const result = fileReader.result;
      try {
        const json = JSON.parse(result as string);
        resolve(json);
      } catch (e) {
        reject('JSON Error: ' + e);
      }
    };
  });
}
