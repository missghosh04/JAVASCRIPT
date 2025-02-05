function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    let div=document.createElement("div")
    div.setAttribute("class","card")
    document.querySelector(".container").prepend(div)
    let newviews="";

    if(views>=1000 && views<=999000){
         newviews+=(views/1000)+"K"
    }
    else if(views>=1000000 && views<=999000000){
        newviews+=(views/1000000)+"M"
    }
    else{
        newviews=views;
    }
    div.insertAdjacentHTML("afterbegin",`<img src="${thumbnail}"alt="" srcset=""><span class="title">${title}</span><ul class="name">${cName}</ul><li class="views">${newviews}  views</li><li class="month">${monthsOld} months ago</li><div class="duration">${duration}</div>`)
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 6000000, 9, "20:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 6000000, 9, "20:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 6000000, 9, "20:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")