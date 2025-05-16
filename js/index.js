const getAns = (word , pId) =>{

    let p = document.getElementById(pId);

    if(word == "Seven"){
       p.classList.remove("hidden");
       p.classList.add("block", "text-sm", "font-medium", "text-green-500" )
       p.innerHTML  = "Correct Answer✔️"
    }

    else if(word == 365){
        p.classList.remove("hidden");
       p.classList.add("block", "text-sm", "font-medium", "text-green-500" )
       p.innerHTML  = "Correct Answer✔️"
    }
    
    else if(word == "Camel"){
        p.classList.remove("hidden");
       p.classList.add("block", "text-sm", "font-medium", "text-green-500" )
       p.innerHTML  = "Correct Answer✔️"
    }

    else if(word == "Blue Whale"){
        p.classList.remove("hidden");
       p.classList.add("block", "text-sm", "font-medium", "text-green-500" )
       p.innerHTML  = "Correct Answer✔️"
    }

    else{
        p.classList.remove("hidden");
        p.classList.add("block", "text-sm", "font-medium", "text-red-500" )
        p.innerHTML  = "Wrong Answer❌"
    }
    
    
    setTimeout(() => {
        p.classList.add("hidden")
    }, 1000);
} 
