const getImage = function () {
  Config.AccessKey = "HGXt8lN7WnaA2chkM1MfxXkLFFHDlxeyBPOSpR2xJM8";

  const config = new Config("photos/random", "Get", {
    Authorization: Config.AccessKey,
    "Accept-Version": "v1",
  });
  try {
    const result = config.createRequest();
    const imageData = result.then((response) => response.json());
    imageData.then((data) => console.log(data));
    // console.log(imageData);
  } catch (error) {
    console.log(error);
  }
};
getImage();
