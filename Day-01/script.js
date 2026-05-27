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
                //    let h1 = document.querySelector("h1")
                //    console.dir(h1)
                //    h1.classList.add("haha")

                //    add()-
                //        let h1 = document.querySelector("h1")
                //        h1.classList.add("haha")

                //    remove() -
                        //    let h1 = document.querySelector("h1")
                        //    h1.classList.remove("haha")
                           
                //   toggle() - 
                        //    let h1 = document.querySelector("h1")
                        //    h1.classList.toggle("haha")

// question - 

        // what is a dom ? how does it reprsent the html structure ?
        //  DOM = Document Object Model
        //  Teen words hain:
        //  Document = Poora HTML page
        //  Object   = Har element ek object hai
        //  Model   = Structure / Map
        // ye html me tag or har element ka ek object hota hai 
        // every thing is a node , html me tree jaisa structure hota hai 
        //  dom kyu jaruri hai - 
        //        ✅ HTML dynamically badal sakta hai
        //        ✅ User click kare toh kuch ho sakta hai
        //        ✅ API se data aake page pe dikh sakta hai
        //        ✅ Real time updates ho sakte hain

// name the type of node in the dom tree - 
//        document node 
//        element node 
//        text node
//        comment node

// what's the difference between an element node and text node 

        //    element node  - 
        //             node name  - div , h1 , p etc 
        //             style = yes 
        //             class = yes 
        //             children = yes 
        //             attribute = yes 
        //             value = not 
        //     text node - 
        //                me sirf  
        //                   value = yes 

//  what is the difference between getElementById and querySelector 
        // getElementById  - me hame  id or class ke liye aalag se 
        //                   # ya fir . ka use nhi karna rahata hai 
        //                   ex -  
        //                       document.getElementById("id")

        // querySelector - me hame id or class ke liye aalag se # or . 
        //                 ka use karna rahat hai kyu ki issme id ya class
        //                 diffain nahi rahata hai
        //                 ex - 
        //                     document.querySelector("#id")

// what does getElementByClassName return ? 
        //it return -  HTMLCollection  it like array 

        //    let cl = document.getElementsByClassName("h1")
        //    console.log(cl)

// use querySelectorAll to select all button with class ".buy-now"
        // it rerun = nodeList
        //    let bynow = document.querySelectorAll("button")
        //    console.log(bynow)

// t1: select the heading of a page by ID and change its text to "welcome to sheryian "
          
        //let head = document.querySelector("#heading")
        //head.textContent = "welcome to my feed !"

// select all <li> element and print their text using a loop -

        // let los = document.querySelectorAll("ol")
        // los.forEach((val)=>{
        //         console.log(val.textContent)
        // })

        // let loos = document.querySelectorAll("ol")
        // for(let i=0 ; i<loos.length; i++){
        //         console.log(loos[i].textContent)
        // }

// what's the difference between innnerText , textContent AND innerHTML ?
        //    innertext  = text ko change karta hai 
        //    textContent = text ko change karta hai par tag ko text ke format me deta hai
        //    innerHTML = tag ko change karne ke liye use hota hai 

// when should you use textContent instead of innerText ?
        
// select a paragraph and replace it contect with 
// { <b>updated</b> by javaScript}

        // let change = document.querySelector("p")
        // change.innerHTML = " <b>updated</b> by javaScript"
 
// how do you get the src of and image using javascript ?
         
        // let photo = document.querySelector("img")
        // console.log(  photo.getAttribute("src"))
        //  console.log(photo.src)

// what does setAttribute() do ? 

        //  let photo = document.querySelector("img")
        //  photo.setAttribute("src","https://images.unsplash.com/photo-1778434505577-28b8e26384f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D")


// select a link and update its href to point to https://sheryians.com ?

        // let link = document.querySelector("a")
        // link.setAttribute("href","https://sheryians.com")

// add a title attribute to a div dynamically ?

        // let title = document.querySelector("div")
        // title.setAttribute("title","hey this is me")

// remove the disabled attribute from a button ?

        let btn = document.querySelector("button")
        btn.removeAttribute("disabled")