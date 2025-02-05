/* Create a business name generator by combining list of adjectives and shop name and another word

Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/
let random=Math.random()
// console.log(Math.floor(random*3)+1)
function business_name_generator(random) {
    let adjectives={
        1:"Crazy",
        2:"Amazing",
        3:"Fire"
    }
    let Shop_name={
        1:"Engine",
        2:"Foods",
        3:"Garments"
    }
    let Another_word={
        1:"Bros",
        2:"Limited",
        3:"Hub"
    }
    var adj=Math.floor(Math.random()*3)+1
    var shop=Math.floor(Math.random()*3)+1
    var another=Math.floor(Math.random()*3)+1
    // math.floor rounds the number and give the largest integer
    // if(random>=0 && random<=0.33){
    //     console.log("The business name is :"+" "+adjectives[1]+" "+Shop_name[1]+" "+Another_word[1])
    // }
    // else if(random>=0.33 && random<=0.66){
    //     console.log("The business name is :"+" "+adjectives[2]+" "+Shop_name[2]+" "+Another_word[2])
    // }
    // else{
    //     console.log("The business name is :"+" "+adjectives[3]+" "+Shop_name[3]+" "+Another_word[3])
    // }
    console.log("The business name is :"+" "+adjectives[adj]+" "+Shop_name[shop]+" "+Another_word[another])
}
business_name_generator(random)