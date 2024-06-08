const question=[
{
           ques:"Mazin Shamshad's crush?",
           ans:[
            {text:"Len Den", correct:"true"},
            {text:"Zainab", correct:"false"},
            {text:"Shabreen", correct:"false"},
            {text:"Laiba", correct:"false"}
           ],
           sol:"Len Den"
},

{
        ques:"Mazin Shamshad's favourite country",
        ans:[
        {text:"America", correct:"false"},
        {text:"Germany", correct:"false"},
        {text:"Russia", correct:"true"},
        {text:"Sri Lanka", correct:"false"}
        ],
        sol:"Russia"
},

{
        ques:"How much is Mazin's Coding Skills",
        ans:[
        {text:"Bhut jyada", correct:"false"},
        {text:"10 out of 10", correct:"false"},
        {text:"tends to infinity", correct:"false"},
        {text:"Humans can't define it", correct:"true"}
        ],
        sol:"Humans can't define it"
},

{
        ques:"Mazin Shamshad's favourite number",
        ans:[
        {text:"78", correct:"false"},
        {text:"75", correct:"false"},
        {text:"48", correct:"true"},
        {text:"53", correct:"false"}
        ],
        sol:"48"

}

];

let que=document.querySelector(".ques")
let options=document.querySelector(".options")
let btn=document.querySelector("button")

let score=0;
let quesIndex=0;

btn.addEventListener("click",()=>{
    btn.style.display="none"
    if(quesIndex==0)
        {
           
            btn.textContent="next"
           
           
        } 
        
    if(quesIndex<4)
        {
            startQuiz()
            
        }
    
   else
   {
      resultPage()
   }

})

function startQuiz(){

    let currQues=question[quesIndex]
    let quesNo=quesIndex+1

    que.innerHTML=`${quesNo}. ${currQues.ques}`

    
    options.style.pointerEvents="auto"

    showOptions(currQues)
}

function showOptions(currQues){
    while(options.firstChild)
        {
            options.removeChild(options.firstChild)
        }

        

    currQues.ans.forEach((element) => {
        let div=document.createElement("div")
        div.innerHTML=element.text;
        div.classList.add("p-2", "my-2","border", "border-solid", "border-black", "hover:bg-black", "hover:text-white", "hover:cursor-pointer")
        options.appendChild(div)
    });

}

function resultPage() {
    let result = document.querySelector(".result");
    document.querySelector(".container").style.display = "none";
    result.style.display = "block";
  
    while (result.firstChild) {
      result.removeChild(result.firstChild);
    }
  
    result.classList.add("min-h-fit","p-6", "rounded-xl","bg-white","text-xl")
  
    let flexContainer = document.createElement("div");
    flexContainer.classList.add("flex","flex-col","items-center"); // Add flex class to the container
  
    result.appendChild(flexContainer);
  
    let div = document.createElement("div");
    div.classList.add("w-fit")
    div.innerHTML = `Your total score is ${score} out of 4`;
    flexContainer.appendChild(div);
  
    let button = document.createElement("button");
    button.innerHTML = "Play Again";
    button.classList.add("py-2","px-4","text-white","bg-blue-800","hover:cursor-pointer","hover:bg-blue-700","mt-4","w-fit");
      
    flexContainer.appendChild(button);
  
    button.addEventListener("click", () => {
      quesIndex = 0;
      result.style.display = "none";
      document.querySelector(".container").style.display = "block";
      startQuiz();
    });
}

  options.addEventListener("click",checkAns)

  function checkAns(e){

     if(e.target.classList.contains("options"))
     {

     }
    else
     {
     btn.style.display="block"
    let currQues=question[quesIndex]
    let ans=e.target.textContent;
    let finalAns=currQues.sol
    
          if(ans==finalAns)
            {
              e.target.style.backgroundColor="green"
              score++;
            }
        else 
            {
                e.target.style.backgroundColor="red"
                giveCorrect(finalAns)
            }
        
           options.style.pointerEvents="none"
           
  
             quesIndex++
    }
  }

  function giveCorrect(finalAns){
       let div=options.childNodes
      
       div.forEach((element)=>{
           if(element.textContent==finalAns)
            element.style.backgroundColor="green"
       })
  }
