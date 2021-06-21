const totalItems = document.querySelector('.totalCount')
const actualCount = document.querySelector('.actualCount')
const playingBtn = document.querySelector('.playingBtn')
const inputValue = document.querySelector('.valueObject')
const interfaceGame = document.querySelector('.interface-game')
const contentGame = document.querySelector('#contentGame')
const backBtn = document.createElement('button');
const mainContent = document.querySelector('main')
let values = [], round = 0, actuallValue = 0;

function rightAnswerAnimation(){
    mainContent.classList.add('right-answer-animation');
    setTimeout(() => {
        mainContent.classList.remove('right-answer-animation');
    }, 600);
}

function wrongAnswerAnimation(){
    mainContent.classList.add('wrong-answer-animation');
    setTimeout(() => {
        mainContent.classList.remove('wrong-answer-animation');
    }, 2500);
}

function nextObjectAnimation(){
    mainContent.classList.add('next-object-animation');
    setTimeout(() => {
        mainContent.classList.remove('next-object-animation');
    }, 2500);
}

function start(e){
    const newValue = inputValue.value.toLowerCase().replace(/\s/g, '');
    let registeredValue = inputValue.value;

    if (newValue === "") {
        return alert('Digite Alguma coisa');
    }
    
    if ( round === values.length ){
        values.push(newValue);
        inputValue.value = ''
        totalItems.textContent = values.length;
        round = actualCount.textContent = 0;
        playingBtn.textContent = 'Proximo objeto'
    } else {

        if ( values[round] === newValue ) {
            rightAnswerAnimation();
            round ++
            inputValue.value = ""
            actualCount.textContent = round
            

            if (round === values.length) {
                nextObjectAnimation();
                playingBtn.textContent = 'Memorizar'
            }
            
        } else {


            wrongAnswerAnimation();
            inputValue.value = ""
            
            interfaceGame.style.display = 'none'
            contentGame.style.overflowY = 'scroll'
            contentGame.innerHTML = '<h3>Objeto Memorizados</h3>'

            values.forEach((value, index) => {
                let wGreen = '', wordTyped = '';

                console.log(`index: ${index}, actualCount: ${actualCount.textContent}`)

                if (index === Number(actualCount.textContent)) {
                    wGreen = 'green'
                    wordTyped = `você disse: ${registeredValue}`
                }

                console.log(wGreen);
                
                contentGame.innerHTML+= 
                `   <p class='p-value' style='color:${wGreen};'> 
                     <label class="numberValue"
                        
                     >
                        ${index+1})
                     </label> 
                        ${value}
                      
                    </p>
                    <label class="numberValue" style='color:red;' > ${wordTyped} </label>
                `
            })

            // contentGame.innerHTML+='<br><button class="backgame-btn" onClick="backGame()">Voltar</button>'


            
            values.length = round = totalItems.textContent = actualCount.textContent = 0;
        }


    }
}

function checkEnterClick(event) {
    if (event.keyCode == 13) {
        start();
    } 
}

function backGame () {
    alert('funfou')
}