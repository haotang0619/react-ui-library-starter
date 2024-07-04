export default (name: string) => {
  const fileName = `${name}.example.tsx`;
  return {
    files: [{ code: require(`!!raw-loader!./${fileName}`), fileName }],
  };
};
