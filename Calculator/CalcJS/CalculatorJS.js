const lis = document.querySelectorAll("ul li")
const result = document.querySelector(".result")
lis.forEach(li=>{
    li.addEventListener("click",function(event)
    {
        const resultText = result.innerText.trim()
        const value = li.innerText
       
        if(resultText=="0" || resultText=="infinity"  || resultText=="undefined")
        {
            result.innerText = ""
        }
        if(value=="=")
        {
            let solution = eval(resultText) /* eval*/
            result.innerText = solution
            return true
        }
        if(value=="C")
        {
            result.innerText = ""
            return true
        } 
        result.append(value)

    })
})
