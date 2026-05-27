// let body = document.getElementById("abcd")
// console.log(body)

// let abc= document.getElementsByClassName("abcd")
// console.log(abc)

// let abcd = document.querySelector("abcd")
// console.dir(abcd)

// text context access - innerHTML, innertext ,text content

        // innerHTML - 
                //    let h1 = document.querySelector("h1")
                //    console.dir(h1)
                //    h1.innerHTML="<i>aanu hai kya </>"
                //    h1.hidden = false
  
// attribute manipulation -     
        
        // let a = document.querySelector("a")
        // console.dir(a)
        // a.href = "https://www.google.com"
        // a.setAttribute("href","https://www.google.com")
        
        // setAttribute :-
        // let img = document.querySelector("img")
        // img.setAttribute(
        //     "src",
        //     "https://images.unsplash.com/photo-1777026059641-53bcbd04f194?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8"
        // )

        // getAttribute :-
        // let a = document.querySelector("a")
        // console.log(a.getAttribute("href"))

        // removeAttribute :-
        // let a = document.querySelector("a")
        // a.removeAttribute("href")

// Daynamic dom manipulation - 

        // createElement-
                // let elementName = document.createElement("tagName")
                // let h1 = document.createElement("h1")
                // console.log(h1) 

        // append / prepend -  append use for last and prepend use for first
                // let h1 = document.createElement("h1")
                // h1.textContent=("hello aanu")
                // document.body.append(h1)
                // document.querySelector("body").prepend(h1)

        // remove - 
                // let h1 = document.createElement("h1")
                // h1.textContent = "hello aanu kasi ho"
                // document.body.append(h1)
                // h1.remove()
        
        // example - 
        //        let h1 = document.createElement("h1")
        //        h1.textContent = ("hello kaise ho 5")
        //        let newdiv = document.querySelector("div")
        //        newdiv.append(h1)

// sytle update via .style and classlist (add, remove , toggle) - 

        //  let h1 = document.querySelector("h1")
        //  h1.style.color = "red"
        //  h1.style.background = "blue"
        
        // classMethod - 
                   
