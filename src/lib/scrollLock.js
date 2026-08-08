let locks = 0;
let prev = "";

export function lockBody() {
  if (locks === 0) {
    prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
  }
  locks += 1;
}

export function unlockBody() {
  locks = Math.max(0, locks - 1);
  if (locks === 0) {
    document.body.style.overflow = prev;
    prev = "";
  }
}
