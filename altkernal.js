function switchkern(url) {
    window.location = url;
}

var vversion = "AltKernal"
var manpage = [
    "V-Term " + vversion +  " Manual\nV-Term AltKernal is an area to go to in order to switch to other kernals, or reload the current one quicker. Press CTRL-Q to go back."
    ]
    

jQuery(function($, undefined) {
 $('#v-term').terminal(function(command, arg) {
   if (command == 'help') {
     this.echo("Type the following.");
     this.echo("1. help - displays help menu.");
     this.echo("2. test - tests I/O of V-Term.");
     this.echo("3. man - manual for using V-Term.");
     this.echo("4. * - Any other input will take you to specified kernal file.\n");
   } 
   else if (command == 'test'){
     this.echo("Test returned 0.\n");
   }
   else if (command == 'man'){
     this.echo(manpage);
   }
   else {
     switchkern(command)
   }

   //else {
   //  if (command !== '') {
   //    try {
   //      var result = window.eval(command);
   //      if (result !== undefined) {
   //        this.echo(new String(result));
   //      }
   //    } catch(e) {
   //     this.error(new String(e));
   //   }
   //  } else {
   //    this.echo('');
   //  }
   //} 

 }, {
keymap: {
            'CTRL+Q': function(e, original) {
                 switchkern("vterm.html");
            }
       },
 greetings: 'V-TERM ' + vversion + '\n',
 name: 'V-TERM-USER',
 prompt: 'V-TERM> ',
 color: 'green'
 });
});