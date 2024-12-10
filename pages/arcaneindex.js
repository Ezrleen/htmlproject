export function generatearcaneindex() {
    const indexcontent = `
    <div class="arcanecontaier">
        <div class="innerarcane" id="generatearcane2">
            <div><a href="#"><img class="img" src="images/Arcane-Season-2-323x470.jpg" alt="Arcane Season 2"></a></div>
            <div class="textarcane">
            <a href="#" data-bs-toggle="popover" data-bs-trigger="hover" 
                   data-bs-title="Arcane Season 2" data-bs-placement="top" 
                   data-bs-content="Season 2 of Arcane, tensions escalate as the conflict between Piltover and Zaun intensifies, leading to unexpected alliances and devastating consequences.">
                   Arcane Season 2
                </a>
            </div>
        </div>
        <div class="innerarcane" id="generatearcane">
            <div><a href="#"><img class="img" src="images/Arcane-323x470.jpg" alt="Arcane Season 1"></a></div>
            <div class="textarcane">
                <a href="#" data-bs-toggle="popover" data-bs-trigger="hover" 
                   data-bs-title="Arcane Season 1" data-bs-placement="top" 
                   data-bs-content="Season 1 of Arcane introduces the bitter rivalry between two cities Piltover and Zaun and the origins of iconic champions">
                   Arcane Season 1
                </a>
            </div>
        </div>
    </div>
    `;

    
    setTimeout(() => {
        const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
        const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
    }, 0); 

    return indexcontent;
}
