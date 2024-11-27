document.onclick = hideMenu;
document.oncontextmenu = rightClick;

function hideMenu() {
    document.getElementById("contextMenu").style.display = "none"
}

function rightClick(e) {
    e.preventDefault();

    if (document.getElementById(
        "contextMenu").style.display == "block")
        hideMenu();
    else {
        let menu = document
            .getElementById("contextMenu")

        menu.style.display = 'block';
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
    }
}

/**
 * @param {string} modalId
 * @param {boolean} isShowing
 */
function toggleModal(modalId, isShowing) {
  const modal = document.getElementById(modalId);
  if (isShowing) {
    console.log(modalId, isShowing);
    modal.style.display = isShowing ? 'block' : 'none';
  }
}

export { toggleModal };