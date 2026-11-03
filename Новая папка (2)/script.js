"use strict";

function showRomeGallery() {
  const gallery = document.getElementById("gallery");

  if (!gallery) return;

  const photos = [
    {
      title: "Колизей",
      file: "Colosseum in Rome-April 2007-1- copie 2B.jpg",
      author: "Diliff",
      license: "CC BY-SA 2.5"
    },
    {
      title: "Римский форум",
      file: "Roman Forum east end panorama.jpg",
      author: "Nhartmannphotos",
      license: "CC BY-SA 4.0"
    },
    {
      title: "Фонтан Треви",
      file: "Fontaine Trevi - Rome.jpg",
      author: "Wilfredor",
      license: "CC0"
    },
    {
      title: "Пантеон",
      file: "Pantheon in Rome (1).jpg",
      author: "Krzysztof Golik",
      license: "CC BY-SA 4.0"
    },
    {
      title: "Площадь Навона",
      file: "Piazza Navona 1.jpg",
      author: "Myrabella",
      license: "CC BY-SA 3.0"
    },
    {
      title: "Испанская лестница, 1965 год",
      file: "Spanish Steps, Rome, September 1965.jpg",
      author: "Family photos of Infrogmation",
      license: "CC BY 2.5"
    },
    {
      title: "Замок Святого Ангела",
      file: "RomaCastelSantAngelo.jpg",
      author: "Andreas Tille",
      license: "CC BY-SA 4.0"
    },
    {
      title: "Фонтан Нептуна на площади Пополо",
      file: "Fontana del Nettuno, Piazza del Popolo, Rome, Italie.jpg",
      author: "Jebulon",
      license: "CC0"
    },
    {
      title: "Мост Святого Ангела",
      file: "Rome (IT), Ponte Sant’ Angelo -- 2013 -- 4362.jpg",
      author: "Dietmar Rabich",
      license: "CC BY-SA 4.0"
    },
    {
      title: "Санта-Мария-ин-Трастевере",
      file: "Santa Maria in Trastevere church in Rome (12).jpg",
      author: "Krzysztof Golik",
      license: "CC BY-SA 4.0"
    },
    {
      title: "Фонтан на Капитолийской площади",
      file: "Fountain in Piazza del Campidoglio (Rome) - Nile.jpg",
      author: "Diana Ringo",
      license: "CC BY-SA 3.0"
    },
    {
      title: "Арка Константина",
      file: "Arch of Constantine (Rome) ,lateral view.jpg",
      author: "Livioandronico2013",
      license: "CC BY-SA 4.0"
    }
  ];

  
  document.title = "Галерея — Экскурсии по Риму";

  const heading = document.querySelector("main h1");
  const description = document.querySelector("main .description");
  const eyebrow = document.querySelector("main .eyebrow");
  const logo = document.querySelector(".logo");

  if (heading) {
    heading.textContent = "Достопримечательности Рима";
  }

  if (description) {
    description.textContent =
      "Места для экскурсий по Риму, Италия.";
  }

  if (eyebrow) {
    eyebrow.textContent = "Италия · Рим";
  }

  if (logo) {
    logo.textContent = "Экскурсии по Риму";
  }

  
  document.querySelectorAll('a[href^="form.html"]').forEach(
    function (link) {
      link.href = "index.html";
      link.textContent = "К анкете на главной";
    }
  );

  

  photos.forEach(function (photo, index) {
    const figure = document.createElement("figure");
    const image = document.createElement("img");
    const caption = document.createElement("figcaption");
    const credit = document.createElement("small");
    const source = document.createElement("a");

    const file = encodeURIComponent(photo.file);

    image.src =
      "https://commons.wikimedia.org/wiki/Special:FilePath/" +
      file +
      "?width=800";

    image.alt = photo.title + ", Рим, Италия";
    image.width = 800;
    image.height = 600;
    image.loading = index < 2 ? "eager" : "lazy";
    image.decoding = "async";

    caption.textContent = photo.title;

    source.href =
      "https://commons.wikimedia.org/wiki/File:" + file;

    source.textContent =
      photo.author + " · " + photo.license;

    source.target = "_blank";
    source.rel = "noopener";

    credit.append(source);
    caption.append(document.createElement("br"), credit);

    figure.append(image, caption);
    gallery.append(figure);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", showRomeGallery);
} else {
  showRomeGallery();
}