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

const createImageElement = function (image) {
  const imgEl = document.createElement("img");
  imgEl.classList.add("newImage");
  imgEl.src = image.message;
  imgEl.style.height = "600px";
  imgEl.style.width = "600px";
  imageContainer.insertAdjacentElement("beforeend", imgEl);
};

const loadNewImage = async function () {
  const image = await getImage();
  return image;
};
const lastImageObserver = new IntersectionObserver((entries, observer) => {
  const lastImage = entries[0];
  if (!lastImage.isIntersecting) return;
  else {
    const image = loadNewImage();
    image.then((img) => {
      createImageElement(img);
      lastImage.target.src = img.message;
      lastImageObserver.unobserve(lastImage.target);
      lastImageObserver.observe(document.querySelector(".newImage:last-child"));
    });
  }
});
lastImageObserver.observe(document.querySelector(".newImage:last-child"));
