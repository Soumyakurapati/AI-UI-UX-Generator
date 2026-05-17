async function generateUI() {

  const prompt = document.getElementById("prompt").value;
  const output = document.getElementById("output");

  output.innerHTML = "Generating AI Design...";

  try {

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    console.log(data);

    const aiText =
      data.choices?.[0]?.message?.content ||
      "Luxury Fashion Collection";

    output.innerHTML = `

      <div class="dashboard">

        <nav class="navbar">

          <h1>LUXURY FASHION</h1>

          <div class="nav-links">
            <a href="#">Home</a>
            <a href="#">Collections</a>
            <a href="#">Shop</a>
            <a href="#">Contact</a>
          </div>

        </nav>

        <<section class="hero">

  <div class="hero-text">

    <h2>${prompt}</h2>

    <p>
      Discover premium black & gold fashion styles with elegant modern aesthetics.
    </p>

    <button>Explore Collection</button>

  </div>

  <img
  src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200">

</section>

        <h2 class="section-title">
          Featured Fashion
        </h2>

        <div class="products">

          <div class="card">
            <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800">
            <h3>Luxury Black Outfit</h3>
            <p>$199</p>
          </div>

          <div class="card">
            <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800">
            <h3>Premium Streetwear</h3>
            <p>$249</p>
          </div>

          <div class="card">
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800">
            <h3>Elegant Fashion Dress</h3>
            <p>$299</p>
          </div>

        </div>

      </div>

    `;

  } catch (error) {

    console.log(error);

    output.innerHTML = `
      <h2>Something went wrong.</h2>
    `;
  }
}