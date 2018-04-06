How to add capacitor to your program:

1. Create your ionic program using the normal ionic start _____ blank command
2. Go into your cd and clone your package.json and rename to copy to capacitor.config.json
3. Delete all of the code inside capacitor.config.json and type:

 {
	"bundleWebRuntime": true,
	"webDir": "www",
}

4. Go into package.json and add:
	"scripts": 
{
	"capacitor": "capacitor"
},

	"dependencies" 
{
	"@capacitor/core": "latest",
	"@capacitor/cli": "latest"
	
}

5. In the Integrated Terminal type [npm install] or [npm install --save @capacitor/core @capacitor/cli --no-optional]
6. Build the program using the command [ionic build] in the terminal - this is important as it needs to create a
"www" file that you will need in order to add platforms like android and ios
7. In the terminal type [npx cap init] to initialise your application
8. It will prompt you for the name of your app and the appID, you can name your app anything, the appID can also
be anything but it has to be in the format com.app.name
9. Next, you can add platforms like android and ios by running [npx cap add android]
10. Remember when using capacitor, there are special declarations you need to add to the android manifest.xml file
while can be found under app --> src --> main
11. To use the capacitor plugins: [import { Plugins } from "@capacitor/core";]

Enjoy using capacitor!
