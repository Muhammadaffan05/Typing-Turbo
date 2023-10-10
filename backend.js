const setOfwords =["my name is affan.",
                   "Enthusiastic computer science student.",
                    "specializing in blockchain, backend development, data analysis, and DevOps.",
                    "if you want source code checkout ",
                    "my github account https://github.com/Muhammadaffan05."
                ];
const msg = document.getElementById('msg');
const typeWord = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;

const startTyping =()=>{
    let randonNumber = Math.floor(Math.random()*setOfwords.length);
    msg.innerText = setOfwords[randonNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endTyping =() =>{
    let date = new Date();
    endTime = date.getTime();
    let totalTime=((endTime-startTime)/1000);
    console.log(totalTime)
    let totalStr = typeWord.value;
    let wordCount = wordCounter(totalStr);
    let speed = Math.round((wordCount / totalTime)*60);
    let finalMsg ="You Typed total word at " +speed+ " words per minutes ";
    finalMsg += compareWords(msg.innerText,totalStr);
    msg.innerText=finalMsg;


}

const compareWords = (str1 , str2) => {
    let word1 = str1.split(" ");
    let word2 = str2.split(" ");
    let cnt = 0;


    word1.forEach(function(item , index){
        if(item == word2[index]){
            cnt++;
        }
    })

    let errorWord = word1.length - cnt;
    return(cnt + " correct out of " + word1.length
    + " words and the total number of error are "+ 
    errorWord+" words.");

} 

const wordCounter = (str) =>{
    let response = str.split(" ").length;
    return  response ;
}

btn.addEventListener('click',function(){
    if(this.innerText=='Start Typing!'){
        typeWord.disabled = false;
        startTyping();
    } else if(this.innerText == "Done"){
        typeWord.disabled = true;
        btn.innerText= "Start Typing!"
        endTyping();
    }
})