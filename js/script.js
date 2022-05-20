const imageContainer = document.querySelector(".images");
const newImg = document.querySelectorAll(".newImage");
const getImage = async function () {
  Config.AccessKey = "jDGk0OkepP338y2Dc8SheBk77nQwws6ocCv1Bd9sjhY";

  const config = new Config("api/breeds/image/random", "Get", {
    // Authorization: Config.AccessKey,
    // "Accept-Version": "v1",
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
  return image;
  // const imgEl = document.createElement("img");
  // imgEl.classList.add("newImage");
  // imgEl.src = image.urls.small;
  // imageContainer.appendChild(imgEl);
};
const observer = new IntersectionObserver((entries) => {
  entries.map((entry) => {
    if (!entry.isIntersecting) return;
    else {
      loadNewImage().then((x) => (entry.target.src = x.message));
    }
  });
});
loadNewImage();
// observer.observe(imageContainer);
newImg.forEach((img) => observer.observe(img));
