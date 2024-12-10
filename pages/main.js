export function generatemain(){
    const maincontent=`
    <div class="container2">
            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="./images/vlad.png" alt="First slide">
                        <div class="carousel-caption d-none d-md-block">
                            <h1>Welcome to Riot</h1>
                            <p>Explore the lore and champions of the League</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="./images/slide1.jpg" alt="Second slide">
                        <div class="carousel-caption d-none d-md-block">
                            <h1>Discover Champions</h1>
                            <p>Learn about the characters that make the League special</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="./images/wp10432161.jpg" alt="Third slide">
                        <div class="carousel-caption d-none d-md-block">
                            <h1>Watch Arcane</h1>
                            <p>Immerse yourself in the story of Piltover and Zaun</p>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
        <div class="container3">
            <div class="zz">
                <div class="cont3img"> <img src="images/1.png" alt=""></div>
                <div class="cont3text">
                    <div class="text1"><h5><strong>Nightmare on Reroll Street: Part 1 | Into the Arcane Launch Cinematic</strong></h5></div>
                    <div class="text2">TFT’s latest set goes Into the Arcane on Nov 20 with exclusive playable characters</div>
                </div>
            </div>
            <div class="zz">
                <div class="cont3img"> <img src="images/2.png" alt=""></div>
                <div class="cont3text">
                    <div class="text1"><h5><strong>Becoming Unbound | Mini Cinematic - Teamfight Tactics</strong></h5></div>
                    <div class="text2">Meet our newest Tactician type in patch 14.23: Unbound Champions!</div>
                </div>
            </div>
            <div class="zz">
                <div class="cont3img"> <img src="images/3.png" alt=""></div>
                <div class="cont3text">
                    <div class="text1"><h5><strong>Arcane Season 2 Across Our Games</strong></h5></div>
                    <div class="text2">What League, TFT, VALORANT, Wild Rift, and Legends of Runeterra are doing to celebrate Arcane’s final season.</div>
                </div>
            </div>
        </div>
    </div>
    
    
    `;
    return maincontent;
    
}