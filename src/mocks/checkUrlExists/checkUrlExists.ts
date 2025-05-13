const checkUrlExists = (apiUrl: string | undefined): void => {
  if (!apiUrl) {
    throw new Error("URL not found for the test");
  }
};

export default checkUrlExists;
