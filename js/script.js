const imageContainer = document.querySelector(".images");
const getImage = async function () {
  Config.AccessKey = "HGXt8lN7WnaA2chkM1MfxXkLFFHDlxeyBPOSpR2xJM8";

  const config = new Config("photos/random", "Get", {
    Authorization: Config.AccessKey,
    "Accept-Version": "v1",
  });
  try {
    const result = config.createRequest();
    // const imageData = result.then((response) => response.json());
    return (await result).json();
  } catch (error) {
    console.log(error);
  }
};
const loadNewImage = async function () {
  const image = await getImage();
  const imgEl = document.createElement("img");
  imgEl.src = image.urls.small;
  imageContainer.appendChild(imgEl);
};
const observer = new IntersectionObserver((entries) => {
  const lastImage = entries[0];
  if (!lastImage.isIntersecting) return;
  loadNewImage();
});
loadNewImage();
