document.addEventListener("mousemove", parallax);
function parallax(event) {
  this.querySelectorAll(".palms").forEach((palms) => {
    const position = palms.getAttribute("value");
    const x = (window.innerWidth - event.pageX * position) / 90;
    const y = (window.innerHeight - event.pageY * position) / 90;
    palms.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}