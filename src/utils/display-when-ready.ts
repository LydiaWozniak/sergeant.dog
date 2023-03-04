function display() {
  document.body.style.opacity = '1';
}

export async function displayWhenReady() {
  await document.fonts.ready;

  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    display();
  } else {
    document.addEventListener('DOMContentLoaded', display);
  }
}
