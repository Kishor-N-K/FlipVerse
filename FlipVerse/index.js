const coin = document.getElementById("coin");
    const flipBtn = document.getElementById("flipBtn");
    const sound = document.getElementById("flipSound");
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;

    function flipCoin() {
      flipBtn.disabled = true;
      sound.currentTime = 0;
      sound.play().catch(()=>{});

      const isHeads = Math.random() < 0.5;

      coin.style.transition = "none";
      coin.style.transform = "rotateY(0deg)";
      void coin.offsetWidth;
      coin.style.transition = "transform 1s linear";

      const spins = 8;
      const finalRotation = spins * 360 + (isHeads ? 0 : 180);
      coin.style.transform = `rotateY(${finalRotation}deg)`;

      setTimeout(() => {
        flipBtn.disabled = false;

        const prefixes = ["Sir", "Hey Dude", "My Friend", "Boss"];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];

        const finalText = isHeads ? `${prefix}, It is Heads!` : `${prefix}, It is Tails!`;
        document.getElementById("message").textContent = finalText;
     }, 1000);

    }

    flipBtn.addEventListener("click", flipCoin);

    themeToggle.addEventListener("click", () => {
      body.classList.toggle("dark");
      themeToggle.textContent = body.classList.contains("dark") ? "🌙" : "🌞";
    });
    document.getElementById("tagline").textContent = "</> with 💙 by Kishor N K";