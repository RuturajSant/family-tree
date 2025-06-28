function toggle(element) {
  const nextUl = element.nextElementSibling;
  if (nextUl && nextUl.tagName === "UL") {
    nextUl.classList.toggle("visible");
  }
}
