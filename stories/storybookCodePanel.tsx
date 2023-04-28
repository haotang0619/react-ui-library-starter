export default (name: string) => {
  const fileName = `${name}.example.tsx`;
  return {
    files: [{ fileName, code: require(`!!raw-loader!./${fileName}`) }],
  };
};
