const fuckUp = true;

if (fuckUp) {
  const a = "f",
    e = "p",
    c = "c",
    b = "u",
    f = "s",
    g = "y",
    d = "k";

  const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  const method = randomNum(1, 9);
  console.log(method);

  switch (method) {
    case 1: {
      const anchorTags = document.querySelectorAll("a");

      anchorTags.forEach((anchorTag) => {
        anchorTag.href = "#";
      });

      break;
    }
    case 2: {
      const divs = document.querySelectorAll("div");

      setInterval(() => {
        let divToFuckWith = randomNum(0, divs.length);
        divs[divToFuckWith].remove();
      }, 5000);

      break;
    }
    case 3: {
      const body = document.querySelector("body");
      let bodyOpacityLevel = 100;

      setInterval(() => {
        bodyOpacityLevel = bodyOpacityLevel - 1;
        body.style.opacity = `${bodyOpacityLevel}%`;
      }, 100);

      break;
    }
    case 4: {
      document.querySelector('link[rel="stylesheet"]').remove();
      break;
    }
    case 5: {
      const body = document.querySelector("body");
      body.style.fontSize = "150px";
      break;
    }
    case 6: {
      const div = document.createElement("div");
      const body = document.querySelector("body");

      body.style.overflow = "hidden";
      div.setAttribute(
        "style",
        "width: 100%; height: 100vh; position: fixed; top: 0; left: 0, z-index: 99999"
      );
      body.append(div);
      break;
    }
    case 7: {
      let y = 0;

      setInterval(() => {
        y = y + 5;
        window.scrollTo(0, y);
      }, 100);

      break;
    }
    case 8: {
      const p = document.querySelectorAll("p");

      p.forEach((element) => {
        element.innerText = element.innerText.replace(/the/g, a + b + c + d);
        element.innerText = element.innerText.replace(/a/g, e + b + f + f + g);
      });

      break;
    }
    case 9: {
      const p = document.querySelectorAll("p");

      p.forEach((element) => {
        const words = element.innerText.split(" ");
        element.innerText = words.join("");
      });

      break;
    }
  }
}
