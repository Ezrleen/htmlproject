export function generatemain(){
    const maincontent=`
    <div class="video-container"></div>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100" src="./images/tumblr_304b51c56fea6ed730cb48cc81c18340_2396bddb_640.gif" alt="First slide">
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
                    <img class="d-block w-100" src="./images/login.jpg" alt="Third slide">
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
    `;
    return maincontent;
}