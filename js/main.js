
// for (i = 0; i <= 100; i = i + 5) {
// console.log(i)
// }
// function getInfo() {
// 	var date = document.getElementById("day").value
// console.log(date)
// }
// var car = [
// {
// 	make: "honda",
// 	model: "civic",
// 	year: "2005",
// 	color: "black"
// },
// {
// 	make: "acura",
// 	model: "integra",
// 	year: "1999",
// 	color: "blue"
// },
// {
// 	make: "lexus",
// 	model: "ls400",
// 	year: "2004",
// 	color: "yellow"
// }
// ]
// function getInfo() {
// 	var carInfo = document.getElementById("day").value
// 	for(i = 0; i < car.length; i++){
// 		if(carInfo == car[i].make) {
// 			alert(car + " is available!")
// 			return
// 		}
// 	}
// }


// function showpokemon() {
// 	for(i = 0; i < pokemonArray.length; i++) {
// 		var p = document.createElement("p"),
// 			h1 = document.createElement("h1"),
// 			h2 = document.createElement("h1"),
// 			img = document.createElement("img");
// 			p.innerHTML = pokemonArray[i].power
// 			h1.innerHTML = pokemonArray[i].name
// 			h2.innerHTML = pokemonArray[i].type
// 			img.setAttribute("src", pokemonArray[i].img);
// 			document.getElementById("pokemon").appendChild(h1)
// 			document.getElementById("pokemon").appendChild(h2)
// 			document.getElementById("pokemon").appendChild(p)
// 			document.getElementById("pokemon").appendChild(img)
// 	}
// }
// showpokemon()

// var body = document.getElementById('addHere')
// var newDiv = document.createElement('div')
// var newH3 = document.createElement('h3')
// var textHere = document.createTextNode('random text')
// var p = document.createElement('p')
// var newImg = document.createElement("img")
// var NewA = document.createElement('a')


// newImg.setAttribute('src', 'http://cosb.countyofsb.org/uploadedImages/pwd/Water/PWHydrolRainfall.JPG')

// newH3.appendChild(textHere)
// newDiv.appendChild(newH3)
// body.appendChild(newDiv)
// newA.appendChild(newImg)

// newDiv.className = "newClass animated bounce"

// p.className = "newCool"

// body.className = "newBody"




function todoList(){
	var item = document.getElementById("todoInput").value
	var text = document.createTextNode(item)
	var newItem = document.createElement("li")
	newItem.appendChild(text)
	document.getElementById("todo").appendChild(newItem)
}
