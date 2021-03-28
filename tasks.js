
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  var arr = text.split(" ");
  if (text.trim() === 'quit' || text.trim()==='exit') {
    quit();
  }
  else if (arr[0] === 'hello' || text === 'hello\n') {
    hello(text);
  }
  else if(text.trim() === 'help'){
    help();
  }
  else{
    unknownCommand(text);
  }
}


/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}

// when ur command have one word 'hello' u will get 'hello!' between if ur command have 2 word lik 
//'hello omar' u will get 'hello omar!'

/**
 * Says hello
 * @param  {string} t the text received
 * @returns {void}
 */
 function hello(t) {

  if (t.trim() === 'hello') {
    console.log(t.replace('hello', 'hello!'))

  }
  
  else {
    console.log("\n" + t.trim() + "!\n");
  }


}



/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
/**
 * help command
 *
 * @returns {void}
 */
 function help(){
  console.log('help')
  
}
// The following line starts the application
startApp("omar  abdallah")
