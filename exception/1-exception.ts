{
  // Java: Exception
  // JavaScript: Error

  const array = new Array(100000000000000000000000000000000);

  // Error(Exception) Handling: try -> catch -> finally
  function readFile(fileName: string): string {
    if (fileName === 'not exist') {
      throw new Error(`File not exist! ${fileName}`);
    }

    return `File content: ${fileName}`;
  }

  function closeFile(fileName: string) {}

  const run = () => {
    const fileName = 'file';

    try {
      console.log(readFile(fileName));
    } catch (err) {
      console.log(`Catched error`);
    } finally {
      closeFile(fileName);
      console.log('Finally');
    }
  };

  console.log('keep going');
}
