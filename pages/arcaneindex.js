export function generatearcaneindex(){
    const indexcontent=`
    <div class="arcanecontaier">
            <div class="innerarcane" id="generatearcane2">
                <div><a href="#"><img class="img" src="images/Arcane-Season-2-323x470.jpg" alt=""></a></div>
                <div class="textarcane"><a href=""></a>Arcane Seaseon 2</div>
            </div>
            <div class="innerarcane" id="generatearcane">
                <div ><a href="#"><img class="img" src="images/Arcane-323x470.jpg" alt=""></a></div>
                <div class="textarcane"><a  href="#"  data-bs-toggle="popover" data-bs-trigger="hover"  data-bs-title="Popover title" data-bs-placement="top" data-bs-content="And here's some amazing content. It's very engaging. Right?" >Arcane Seaseon 2</a></div>
            </div>
        </div>
    `;
    return indexcontent;
}