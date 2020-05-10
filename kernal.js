function switchkern(url) {
    window.location = url; 
}

var vversion = "v1.1"
var manpage = [
    "V-Term " + vversion +  " Manual\nV-Term Manual is NOT equivelent to the help menu, that is a list of commands, man is a manual for built-in \nobjects, such as built-in JavaScript capabilities.\n\nTyping a math sentence will print an answer. EG: 1+1 RESULT: 2. \nTyping a sentence in quotaions will print the statement. EG: 'hello world!' RESULT: hello world!\nTyping a built-in JavaScript function, or one you declared yourself, will run it.\n\nV-Term has built-in JavaScript, and will do anything a JavaScript console could do.\n\n"
    ]
    

function chkpass(validpass) {
    var pass = read('Password: ')
    if(pass == validpass) {
        this.echo("Login correct")
    }
    else {
        this.echo("Incorrect")
    }
}

function say(what) {
    this.echo(what);    
}

jQuery(function($, undefined) {
 $('#v-term').terminal(function(command, arg) {
   if (command == 'help') {
     this.echo("Type the following.");
     this.echo("1. help - displays help menu.");
     this.echo("2. test - tests I/O of V-Term.");
     this.echo("3. man - manual for using V-Term.");
     this.echo("4. google - opens a google terminal application.\n");
   } 
   else if (command == 'test'){
     this.echo("Test returned 0.\n");
   }
   else if (command == 'man'){
     this.echo(manpage);
   }
   else if (command == 'google'){
     switchkern("vtermgoogle.html")
   }

   else {
     if (command !== '') {
       try {
         var result = window.eval(command);
         if (result !== undefined) {
           this.echo(new String(result));
         }
       } catch(e) {
         this.error(new String(e));
       }
     } else {
       this.echo('');
     }
   }

 }, {
     
keymap: {
            'CTRL+Q': function(e1, original1) {
                 switchkern("altkern.html");
            }
       },
 greetings: 'V-TERM ' + vversion + '\n',
 name: 'V-TERM-USER',
 prompt: 'V-TERM> ',
 color: 'green'
 });
});