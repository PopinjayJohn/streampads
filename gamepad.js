/*
   Copyright 2016 Johan Englund

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   
   @author tazaar.mail@gmail.com (Johan Englund)
*/
var lib_gp_helper = {
	Requests: function(item) {
		var svalue = location.search.match(new RegExp("[\?\&]" + item + "=([^\&]*)(\&?)","i"));
		return svalue ? svalue[1] : svalue;
	},
	
	removeOptions: function(selectbox) {
		var i;
		for(i=selectbox.options.length-1;i>=0;i--) {
			selectbox.remove(i);
		}
	},
	
	setType: function(type) {
		// set html and css for respective controllertype
	},
	
	setCSS: function(url) {
		if (!url.endsWith(".css")) {
			url = url + ".css"
		}
		console.log("Loading stylesheet: " + url)
		var ss = document.createElement("link");
		ss.type = "text/css";
		ss.rel = "stylesheet";
		ss.href = url;
		document.getElementsByTagName("head")[0].appendChild(ss);
	},
	
	getAllGamepads: function() {
		var rawGamepads = navigator.getGamepads ? navigator.getGamepads() : ( navigator.webkitGetGamepads ? navigator.webkitGetGamepads() : null );
		if(rawGamepads) {
			lib_gamepad.gamepads = [];
			for (var i = 0; i < rawGamepads.length; i++) {
				console.log(rawGamepads[i]);
				lib_gamepad.gamepads.push(rawGamepads[i]);
			}
			return rawGamepads
		} else {
			return null
		}
	}
}