const msgList = [
  "Niemand zal mij stoppen.",
  "En niemand zal mij tegenhouden...",
  "Free as in free speech.",
  "Idiots can be defeated but they never admit it.",
  "Microsoft loves Linux.",
  "Variatie is de saus van het leven.",
  "I use Arch btw.",
  "Hydrate or diedrate.",
  "All my homies use ThinkPads.",
  "Fuck Bladee.",
  "Let op, geld lenen kost ook geld.",
  "Bitches? In this economy?",
  '"Aalter"',
  "git push --force origin master",
  "Lost in the sauce.",
  "What if we exchanged... our public key.",
  "Rust Supremacy.",
  "Trans rights!",
  "test",
];

const welkomMsg = () => {
  const msgP = document.querySelector("main>div>p");
  const randomMsg = msgList[Math.floor(Math.random() * msgList.length)];
  msgP.innerText = randomMsg;
};
welkomMsg();
