const cursor_dot = document.getElementById("cursor_dot")
const html = document.getElementById("oldal")

html.addEventListener("mousemove", (e)=>{
    const xcor = e.clientX;
    const ycor = e.clientY;
    cursor_dot.style.setProperty("--x", `${xcor-17.5}px`)
    cursor_dot.style.setProperty("--y", `${ycor-17.5}px`)
})
html.addEventListener("mouseleave", ()=>{
    cursor_dot.style.display = "none"
})
html.addEventListener("mouseenter", ()=>{
    cursor_dot.style.display = "block"
})