const notes = document.querySelectorAll(".note");

let highestZIndex = notes.length;

notes.forEach((note, i) => {
  note.style.left = (note.clientWidth + 12) * i + 12 + "px";

  note.addEventListener("mousedown", (event) => {
    const x = event.clientX - note.getBoundingClientRect().left;
    const y = event.clientY - note.getBoundingClientRect().top;

    const onMouseMove = (event) => {
      note.style.left = event.clientX - x + "px";
      note.style.top = event.clientY - y + "px";
    }

    document.addEventListener("mousemove", onMouseMove);

    document.onmouseup = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.onmouseup = null;
    }

    note.style.zIndex = highestZIndex;

    highestZIndex++;
  });

  note.ondragstart = () => false;
})
