var MyCom = React.createClass({
	getInitialState: function() {
		return {
			alphabet: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "-"],
			words: '',
			randomWord: '',
			letters: [],
			clickedLetters:[],
			matchedLetters: [],
			lives:10,
			initialLives:10,
			clickedButton:null,
			gameStarted:false,
			nextWord:false,
			chosenLevel:'medium',
			score:0,
			gameOver:false
		}
	},
	firstDateGame:function(e) {
		var firstDateWords=["fish-pollichathu", "bowling", "first-kiss", "team-raisa", "hand-holding"];

		this.setState({
			words:firstDateWords,
			letters:[],
			clickedLetters:[],
			matchedLetters: [],
			lives:this.state.initialLives,
			clickedButton:e.target.value,
			gameStarted:true,
			score:0
		})

		setTimeout(function() {
			this.getRandom();
		}.bind(this), 100);

	},

	watRidesGame:function(e) {
		var watRidesWords=["sleeping-baby", "proposal", "one-handed-driving", "hand-kissing", "deep-conversations"];

		this.setState({
			words:watRidesWords,
			letters:[],
			clickedLetters:[],
			matchedLetters: [],
			lives:this.state.initialLives,
			clickedButton:e.target.value,
			gameStarted:true,
			score:0
		})

		setTimeout(function() {
			this.getRandom();
		}.bind(this), 100);

	},
	googleGame:function(e) {
		var googleWords = ["pool", "lunch", "painful-massage", "ping-pong", "bus-rides"];

		this.setState({
			words:googleWords,
			letters:[],
			clickedLetters:[],
			matchedLetters: [],
			lives:this.state.initialLives,
			clickedButton:e.target.value,
			gameStarted:true,
			score:0
		})

		setTimeout(function() {
			this.getRandom();
		}.bind(this), 100);

	},
	miscGame:function(e) {
		var miscWords = ["port-credit", "birthday-hugs", "yellow", "singing-for-raisa", "devotion"];

		this.setState({
			words:miscWords,
			letters:[],
			clickedLetters:[],
			matchedLetters: [],
			lives:this.state.initialLives,
			clickedButton:e.target.value,
			gameStarted:true,
			score:0
		})

		setTimeout(function() {
			this.getRandom();
		}.bind(this), 100);
	},
	getRandom: function() {

		var randomNum=Math.floor((Math.random() * this.state.words.length))
		var random = this.state.words[randomNum];

		this.state.words.splice(randomNum, 1);

		this.setState({
			randomWord: random,
		});

	{/* click start and trigger splitLetters() */}
	setTimeout(function() {
		this.splitLetters();
	}.bind(this), 100);
{/* click start and trigger splitLetters() */}

},

splitLetters:function() {

	var s = this.state.randomWord.toUpperCase();
	for (var i = 0; i < s.length; i++) {
		this.state.letters.push(s.charAt(i));
	}
	this.setState({
		letters:this.state.letters
	});
},

checkLetter: function(e) {
	var val = e.currentTarget.textContent;

	this.state.clickedLetters.push(val);

	this.setState( {
		clickedLetters:this.state.clickedLetters,
		lives:this.state.lives-1
	});

	var _this = this;
	this.state.letters.forEach(function(letter) {
		if (letter === val) {
			_this.state.matchedLetters.push(letter)
			_this.setState({
				matchedLetters: _this.state.matchedLetters,
				lives:_this.state.lives
			});
			
	         if( _this.state.lives < 1 ) {
	             if(_this.state.letters.length !== _this.state.matchedLetters.length) {
		       this.setState( { 
		         nextWord:false
	                });
		     }
		  }
		 
		}
	});

if( this.state.lives < 1 ) { // if lives...

	this.setState( { 
		nextWord:true,
		lives:''
	});

	setTimeout(function() {

		this.state.matchedLetters.splice(0, this.state.matchedLetters.length); 
		this.state.matchedLetters.splice.apply(this.state.matchedLetters, [0, this.state.letters.length].concat(this.state.letters))

		this.setState( { 
			matchedLetters:this.state.matchedLetters
		});

	{/* second setTimeout */}
	setTimeout(function() {

		this.setState({
			clickedLetters:[],
			matchedLetters:[],
			lives:this.state.initialLives,
			nextWord:false
		});

		this.state.letters.splice(0, this.state.letters.length);

	{/* get new random word */}
	var randomNum=Math.floor((Math.random() * this.state.words.length))
	var random = this.state.words[randomNum];

	this.state.words.splice(randomNum, 1);

	this.setState({
		randomWord: random,
	});
{/* get new random word*/}

{/* push new random word's letters to letters array */}
var s= random.toUpperCase();
for (var i = 0; i < s.length; i++) {
	this.state.letters.splice()
	this.state.letters.push(s.charAt(i));
}
this.setState({
	letters:this.state.letters
});
{/* push new random word's letters to letters array */}

}.bind(this), 2000);
{/* second setTimeout */}

}.bind(this), 750);

{/* check game setTimeout */}
setTimeout(function() {

{/* check if game is over */}
if(this.state.words.length === 0) {
//alert("Game is over! ");

this.setState({
	gameOver:true
})

//this.setState(this.getInitialState());

}
{/* check if game is over*/}

}.bind(this), 2500);
{/* check game setTimeout */}

}// if lives...

{/* if the word is found, continue the game */}
if(this.state.letters.length == this.state.matchedLetters.length) {  
//alert("You found the word!");
this.setState({
	nextWord:true,
	lives:''
});
setTimeout(function() {

	this.setState( {
		clickedLetters:[],
		lives:this.state.initialLives,
		nextWord:false,
		score:this.state.score+1
	});

{/* check if game is over */}
if(this.state.words.length === 0) {
	this.setState({
		gameOver:true
	})

//this.setState(this.getInitialState());
}
{/* check if game is over*/}

{/* reset lives and clear the matchedLetters array */}
this.setState({
	matchedLetters:[],
	lives:this.state.initialLives
});
{/* reset lives and clear the matchedLetters array */}

this.state.letters.splice(0, this.state.letters.length);

{/* get new random word */}
var randomNum=Math.floor((Math.random() * this.state.words.length))
var random = this.state.words[randomNum];

this.state.words.splice(randomNum, 1);

this.setState({
	randomWord: random,
});
{/* get new random word */}

{/* push the new random words letters to letters array */}
var s= random.toUpperCase();
for (var i = 0; i < s.length; i++) {
	this.state.letters.splice()
	this.state.letters.push(s.charAt(i));
}
this.setState({
	letters:this.state.letters
});
{/* push the new random words letters to letters array */}

}.bind(this), 2000);

}{/* if the word is found, continue the game */}

},
closeModal: function() {
	this.setState(this.getInitialState());
},

render: function() {
	return (
		<div className={this.state.gameOver? "container gameOver":"container "}>

		<header>
		<a href="https://blumonkey.github.io/hangmanizr/" className="title">Ricygator's Hangman</a>
		</header>

		<section>
		<div className="start-playing-text-wrapper">
		<p><svg className="svg-icon" viewBox="0 0 20 20">
		<path fill="none" d="M1.683,3.39h16.676C18.713,3.39,19,3.103,19,2.749s-0.287-0.642-0.642-0.642H1.683
		c-0.354,0-0.641,0.287-0.641,0.642S1.328,3.39,1.683,3.39z M1.683,7.879h11.545c0.354,0,0.642-0.287,0.642-0.641
		s-0.287-0.642-0.642-0.642H1.683c-0.354,0-0.641,0.287-0.641,0.642S1.328,7.879,1.683,7.879z M18.358,11.087H1.683
		c-0.354,0-0.641,0.286-0.641,0.641s0.287,0.642,0.641,0.642h16.676c0.354,0,0.642-0.287,0.642-0.642S18.713,11.087,18.358,11.087zM11.304,15.576H1.683c-0.354,0-0.641,0.287-0.641,0.642s0.287,0.641,0.641,0.641h9.621c0.354,0,0.642-0.286,0.642-0.641
		S11.657,15.576,11.304,15.576z"></path></svg> Can you guess some of the most cherished moments of our relationship? <svg className="svg-icon" viewBox="0 0 20 20"><path fill="none" d="M1.321,3.417h17.024C18.707,3.417,19,3.124,19,2.762c0-0.362-0.293-0.655-0.654-0.655H1.321
		c-0.362,0-0.655,0.293-0.655,0.655C0.667,3.124,0.959,3.417,1.321,3.417z M18.346,15.857H8.523c-0.361,0-0.655,0.293-0.655,0.654c0,0.362,0.293,0.655,0.655,0.655h9.822c0.361,0,0.654-0.293,0.654-0.655C19,16.15,18.707,15.857,18.346,15.857zM18.346,11.274
		H1.321c-0.362,0-0.655,0.292-0.655,0.654s0.292,0.654,0.655,0.654h17.024c0.361,0,0.654-0.292,0.654-0.654
		S18.707,11.274,18.346,11.274z M18.346,6.69H6.56c-0.362,0-0.655,0.293-0.655,0.655C5.904,7.708,6.198,8,6.56,8h11.786C18.707,8,19,7.708,19,7.345C19,6.983,18.707,6.69,18.346,6.69z"></path></svg></p>

		<p><svg className="svg-icon" viewBox="0 0 20 20">
		<path fill="none" d="M1.683,3.39h16.676C18.713,3.39,19,3.103,19,2.749s-0.287-0.642-0.642-0.642H1.683
		c-0.354,0-0.641,0.287-0.641,0.642S1.328,3.39,1.683,3.39z M1.683,7.879h11.545c0.354,0,0.642-0.287,0.642-0.641
		s-0.287-0.642-0.642-0.642H1.683c-0.354,0-0.641,0.287-0.641,0.642S1.328,7.879,1.683,7.879z M18.358,11.087H1.683
		c-0.354,0-0.641,0.286-0.641,0.641s0.287,0.642,0.641,0.642h16.676c0.354,0,0.642-0.287,0.642-0.642S18.713,11.087,18.358,11.087zM11.304,15.576H1.683c-0.354,0-0.641,0.287-0.641,0.642s0.287,0.641,0.641,0.641h9.621c0.354,0,0.642-0.286,0.642-0.641
		S11.657,15.576,11.304,15.576z"></path></svg> You have {this.state.initialLives} lives. <svg className="svg-icon" viewBox="0 0 20 20"><path fill="none" d="M1.321,3.417h17.024C18.707,3.417,19,3.124,19,2.762c0-0.362-0.293-0.655-0.654-0.655H1.321
		c-0.362,0-0.655,0.293-0.655,0.655C0.667,3.124,0.959,3.417,1.321,3.417z M18.346,15.857H8.523c-0.361,0-0.655,0.293-0.655,0.654c0,0.362,0.293,0.655,0.655,0.655h9.822c0.361,0,0.654-0.293,0.654-0.655C19,16.15,18.707,15.857,18.346,15.857zM18.346,11.274
		H1.321c-0.362,0-0.655,0.292-0.655,0.654s0.292,0.654,0.655,0.654h17.024c0.361,0,0.654-0.292,0.654-0.654
		S18.707,11.274,18.346,11.274z M18.346,6.69H6.56c-0.362,0-0.655,0.293-0.655,0.655C5.904,7.708,6.198,8,6.56,8h11.786C18.707,8,19,7.708,19,7.345C19,6.983,18.707,6.69,18.346,6.69z"></path></svg></p>

		<p>
		<div className={this.state.gameStarted ? "game-levels-wrapper pointer-events-none":"game-levels-wrapper pointer-events-auto"}>


		</div>
		</p>

		</div>

		<div className="start-game-buttons-wrapper">

		<button data-tooltip="5 words" className="topic" onClick={this.firstDateGame} value="firstDateWords" disabled={this.state.clickedButton === "firstDateWords"}> ❤️ First Date</button>

		<button  data-tooltip="5 words" className="topic" onClick={this.watRidesGame} value="wat" disabled={this.state.clickedButton === "wat"}> 🚘 WAT Rides</button>

		<button  data-tooltip="5 words" className="topic" onClick={this.googleGame} value="google" disabled={this.state.clickedButton === "google"}>🔍 Google Things</button>

		<button data-tooltip="5 words" className="topic" onClick={this.miscGame} value="misc" disabled={this.state.clickedButton === "misc"}> ⭐ Misc.</button>

		</div>

	<div className="letters-wrapper"> {/* letters-wrapper */}
	<ul className="letters">
	{this.state.letters.map(function(item){  
		return (
//<li className={ this.state.matchedLetters.indexOf(item) !==-1 ? "foundedLetter":"letter"}>{item}</li>
<li className={ this.state.matchedLetters.includes(item) ? "foundedLetter":"letter"}>{item}</li>
)
	},this) 
}
</ul>
</div> {/* letters-wrapper */}

<div className="for-loader">
<div className={this.state.nextWord ? "disable":"enable"}>
<div className={this.state.gameStarted ? "pointer-events-auto":"pointer-events-none"}>
<div className="alphabet-wrapper">{/* alphabet-wrapper */}
<ul className="alphabet">
{this.state.alphabet.map(function(item){  
	return (
		<li className={this.state.clickedLetters.includes(item) ? "clickedLetter" : "alphabetLetters"} onClick={this.checkLetter.bind(this)}>{item}</li>
		)
},this) 
}
</ul>
</div> {/* alphabet-wrapper */}
</div>
</div>
<img className={this.state.nextWord ? "show-svg-loader":"hide-svg-loader"} src="./img/puff.svg" />
</div>

<div  className={this.state.gameStarted ? "lives-words-left-wrapper":"lives-words-left-wrapper displayNone"}> {/* lives-words-left-wrapper */}
<p className="lives"><svg className="svg-icon" viewBox="0 0 20 20">
<path fill="none" d="M13.22,2.984c-1.125,0-2.504,0.377-3.53,1.182C8.756,3.441,7.502,2.984,6.28,2.984c-2.6,0-4.714,2.116-4.714,4.716c0,0.32,0.032,0.644,0.098,0.96c0.799,4.202,6.781,7.792,7.46,8.188c0.193,0.111,0.41,0.168,0.627,0.168c0.187,0,0.376-0.041,0.55-0.127c0.011-0.006,1.349-0.689,2.91-1.865c0.021-0.016,0.043-0.031,0.061-0.043c0.021-0.016,0.045-0.033,0.064-0.053c3.012-2.309,4.6-4.805,4.6-7.229C17.935,5.1,15.819,2.984,13.22,2.984z M12.544,13.966c-0.004,0.004-0.018,0.014-0.021,0.018s-0.018,0.012-0.023,0.016c-1.423,1.076-2.674,1.734-2.749,1.771c0,0-6.146-3.576-6.866-7.363C2.837,8.178,2.811,7.942,2.811,7.7c0-1.917,1.554-3.47,3.469-3.47c1.302,0,2.836,0.736,3.431,1.794c0.577-1.121,2.161-1.794,3.509-1.794c1.914,0,3.469,1.553,3.469,3.47C16.688,10.249,14.474,12.495,12.544,13.966z"></path>
</svg> Your lives: {this.state.lives}</p>

<p className="words-left"><svg className="svg-icon" viewBox="0 0 20 20">
<path fill="none" d="M11.015,11.009l5.063,1.191c0.288,0.068,0.579-0.088,0.682-0.364c0.35-0.931,0.528-1.909,0.528-2.91c0-4.559-3.71-8.269-8.27-8.269c-4.559,0-8.269,3.71-8.269,8.269c0,4.56,3.71,8.27,8.269,8.27c0.891,0,1.768-0.144,2.605-0.426c0.279-0.094,0.445-0.38,0.389-0.668L11.015,11.009z M9.018,16.024c-3.914,0-7.097-3.185-7.097-7.099s3.184-7.097,7.097-7.097s7.098,3.184,7.098,7.097c0,0.686-0.097,1.36-0.291,2.012l-5.427-1.276c-0.192-0.046-0.397,0.01-0.54,0.147c-0.144,0.138-0.207,0.339-0.169,0.534l1.07,5.461C10.193,15.951,9.61,16.024,9.018,16.024z"></path>
<path fill="none" d="M19.183,13.897c-0.08-0.149-0.22-0.256-0.384-0.295l-5.945-1.398c-0.191-0.046-0.397,0.01-0.54,0.147c-0.143,0.138-0.207,0.34-0.168,0.534l1.171,5.985c0.032,0.165,0.135,0.309,0.281,0.394c0.089,0.052,0.191,0.079,0.293,0.079c0.064,0,0.127-0.01,0.188-0.031c0.154-0.052,3.75-1.311,5.134-4.931C19.272,14.223,19.261,14.046,19.183,13.897z M14.325,17.928l-0.857-4.377l4.375,1.029C16.896,16.443,15.229,17.48,14.325,17.928z"></path>
</svg> Words left: {this.state.words.length}</p>

<p className="score"><svg className="svg-icon" viewBox="0 0 20 20">
<path d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"></path>
</svg> Score: {this.state.score}</p>

</div> {/* lives-words-left-wrapper */}

</section>

<div className={this.state.gameOver ? "modal":"modal modalHide"}>
<p className="close-modal" onClick={this.closeModal}>X</p>
<section>
<h3><svg className="svg-icon gameOverSvg" viewBox="0 0 20 20">
<path fill="none" d="M18.616,7.04h-0.638V5.305c0-0.448-0.362-0.813-0.813-0.813H1.407c-0.451,0-0.813,0.365-0.813,0.813v9.39c0,0.449,0.362,0.813,0.813,0.813h15.759c0.451,0,0.813-0.364,0.813-0.813v-1.667h0.638c0.451,0,0.813-0.362,0.813-0.813V7.852C19.429,7.403,19.067,7.04,18.616,7.04z M16.353,13.883H2.22V6.117h14.133v1.735v4.364V13.883z"></path>
</svg> GAME OVER! <svg className="svg-icon gameOverSvg" viewBox="0 0 20 20">
<path fill="none" d="M18.616,7.04h-0.638V5.305c0-0.448-0.362-0.813-0.813-0.813H1.407c-0.451,0-0.813,0.365-0.813,0.813v9.39c0,0.449,0.362,0.813,0.813,0.813h15.759c0.451,0,0.813-0.364,0.813-0.813v-1.667h0.638c0.451,0,0.813-0.362,0.813-0.813V7.852C19.429,7.403,19.067,7.04,18.616,7.04z M16.353,13.883H2.22V6.117h14.133v1.735v4.364V13.883z"></path>
</svg></h3>
<p><svg className="svg-icon totalScoreSvg" viewBox="0 0 20 20">
<path fill="none" d="M6.506,6.98c-0.469,0-0.85,0.381-0.85,0.85s0.381,0.85,0.85,0.85s0.85-0.381,0.85-0.85S6.975,6.98,6.506,6.98z
M18.684,4.148h-3.398V0.75H5.656v3.398H1.691c-0.313,0-0.566,0.253-0.566,0.566V14.91c0,0.312,0.253,0.566,0.566,0.566h3.965
v3.398h9.629v-3.398h3.398c0.313,0,0.566-0.254,0.566-0.566V4.714C19.25,4.401,18.997,4.148,18.684,4.148z M6.789,1.882h7.363
v2.266H6.789V1.882z M14.152,17.742H6.789v-5.664h7.363V17.742z M18.117,13.777c0,0.312-0.254,0.566-0.566,0.566h-2.266v-3.399
H5.656v3.399H2.824c-0.313,0-0.566-0.254-0.566-0.566v-7.93c0-0.313,0.253-0.566,0.566-0.566h14.727
c0.312,0,0.566,0.253,0.566,0.566V13.777z M3.674,6.98c-0.469,0-0.85,0.381-0.85,0.85s0.381,0.85,0.85,0.85s0.85-0.381,0.85-0.85
S4.143,6.98,3.674,6.98z"></path>
</svg> Your score is {this.state.score}. <svg className="svg-icon totalScoreSvg" viewBox="0 0 20 20">
<path fill="none" d="M6.506,6.98c-0.469,0-0.85,0.381-0.85,0.85s0.381,0.85,0.85,0.85s0.85-0.381,0.85-0.85S6.975,6.98,6.506,6.98z
M18.684,4.148h-3.398V0.75H5.656v3.398H1.691c-0.313,0-0.566,0.253-0.566,0.566V14.91c0,0.312,0.253,0.566,0.566,0.566h3.965
v3.398h9.629v-3.398h3.398c0.313,0,0.566-0.254,0.566-0.566V4.714C19.25,4.401,18.997,4.148,18.684,4.148z M6.789,1.882h7.363
v2.266H6.789V1.882z M14.152,17.742H6.789v-5.664h7.363V17.742z M18.117,13.777c0,0.312-0.254,0.566-0.566,0.566h-2.266v-3.399
H5.656v3.399H2.824c-0.313,0-0.566-0.254-0.566-0.566v-7.93c0-0.313,0.253-0.566,0.566-0.566h14.727
c0.312,0,0.566,0.253,0.566,0.566V13.777z M3.674,6.98c-0.469,0-0.85,0.381-0.85,0.85s0.381,0.85,0.85,0.85s0.85-0.381,0.85-0.85
S4.143,6.98,3.674,6.98z"></path>
</svg></p>
</section>
</div>

<footer>
<p className="built-with">Made with <span className="heart">❤</span></p>
</footer>

</div> 
);
}
});

ReactDOM.render(
	<MyCom/>,
	document.getElementById("app")
	);
