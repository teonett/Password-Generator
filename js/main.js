function formSubmit(){
 
    $('form').submit(event => {

        event.preventDefault();
    
        const qtCharacter = $('input').val();

        PopulatePageContent(qtCharacter);

    })

}

$(formSubmit());

function PopulatePageContent(qtCharacter){

    var specificPassword = RandomPasswordGenerator(qtCharacter);
    var Charcter_05 = RandomPasswordGenerator(5);
    var Charcter_07 = RandomPasswordGenerator(7);
    var Charcter_12 = RandomPasswordGenerator(12);
    var Charcter_19 = RandomPasswordGenerator(19);
    var Charcter_31 = RandomPasswordGenerator(31);
    var Charcter_50 = RandomPasswordGenerator(50);

    var output = `
        <div class="row">
            <div class="w3-tag w3-round w3-blue" style="padding:5px; width: 100%;">
                <div class="w3-tag w3-round w3-blue">
                    <label style="font-size: 14px;">Congrats!!! Now you have a super password.</label><br>
                    <p class="w3-tag w3-teal">${specificPassword}</p>
                </div>
            </div>
        </div><p></p>

        <div class="row">
            <div class="w3-tag w3-round w3-blue" style="padding:5px; magin: 10px; width: 100%;">
                <div class="w3-tag w3-round w3-blue">
                    <label style="font-size: 14px;">5 characters random password.</label><br>
                    <p class="w3-tag w3-teal">${Charcter_05}</p>
                </div>
            </div>
        </div><p></p>

        <div class="row">
            <div class="w3-tag w3-round w3-blue" style="padding:5px; magin: 10px; width: 100%;">
                <div class="w3-tag w3-round w3-blue">
                    <label style="font-size: 14px;">7 characters random password..</label><br>
                    <p class="w3-tag w3-teal">${Charcter_07}</p>
                </div>
            </div>
        </div><p></p>
        
        <div class="row">
            <div class="w3-tag w3-round w3-blue" style="padding:5px; magin: 10px; width: 100%;">
                <div class="w3-tag w3-round w3-blue">
                    <label style="font-size: 14px;">12 characters random password.</label><br>
                    <p class="w3-tag w3-teal">${Charcter_12}</p>
                </div>
            </div>
        </div><p></p>
        
        <div class="row">
            <div class="w3-tag w3-round w3-blue" style="padding:5px; magin: 10px; width: 100%;">
                <div class="w3-tag w3-round w3-blue">
                    <label style="font-size: 14px;">19 characters random password.</label><br>
                    <p class="w3-tag w3-teal">${Charcter_19}</p>
                </div>
            </div>
        </div><p></p>
        
        <div class="row">
            <div class="w3-tag w3-round w3-blue" style="padding:5px; magin: 10px; width: 100%;">
                <div class="w3-tag w3-round w3-blue">
                    <label style="font-size: 14px;">31 characters random password.</label><br>
                    <p class="w3-tag w3-teal">${Charcter_31}</p>
                </div>
            </div>
        </div><p></p>
        
        <div class="row">
            <div class="w3-tag w3-round w3-blue" style="padding:5px; magin: 10px; width: 100%;">
                <div class="w3-tag w3-round w3-blue">
                    <label style="font-size: 14px;"> 50 characters random password.</label><br>
                    <p class="w3-tag w3-teal">${Charcter_50}</p>
                </div>
            </div>
        </div><p></p>
    `

    document.getElementById('random-password').innerHTML = output

    var result = RandomPasswordGenerator(10);
}

function RandomPasswordGenerator(qtCharacter){

    var pass = "";

    for (var i = 0; i < qtCharacter; i++){
        console.log(i);
        pass += getRandomChar();
    }

    return pass;
}

function getRandomChar() {
    /*
    * [48, 57] = Numbers;
    * [64, 90] = "@" and Capital Letters;
    * [97, 122] = Lower Case;
    */
    var ascii = [[48,57],[64,90],[97,122]];
    var i = Math.floor(Math.random()*ascii.length);
    return String.fromCharCode(Math.floor(Math.random()*(ascii[i][1]-ascii[i][0]))+ascii[i][0]);
    
}
