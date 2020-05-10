function google(search) {
    window.location = "https://www.google.com/search?q=" + search + "&rlz=1CAWPBA_enUS884&oq=hello&aqs=chrome..69i57j46j0l4j46j0.2696j0j7&sourceid=chrome&ie=UTF-8";
}
function switchkern(url) {
    window.location = url;
}

var vversion = "Google Search Program"
var manpage = [
    "V-Term " + vversion +  " Manual\nV-Term AltKernal is an area to go to google search. The terminal way!"
    ]
    

jQuery(function($, undefined) {
 $('#v-term').terminal(function(command, arg) {
   if (command == 'help') {
     this.echo("Type the following.");
     this.echo("1. help - displays help menu.");
     this.echo("2. test - tests I/O of V-Term.");
     this.echo("3. man - manual for using V-Term.");
     this.echo("4. vtrm - Go back to V-Term.");
     this.echo("5. * - Any other input will take you to a google search.\n");
   } 
   else if (command == 'test'){
     this.echo("Test returned 0.\n");
   }
   else if (command == 'man'){
     this.echo(manpage);
   }
   else if (command == 'vtrm'){
     switchkern("vterm.html")
   }
   else {
     google(command)
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