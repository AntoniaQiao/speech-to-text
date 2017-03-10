/*"use strict";*/

$(document).ready(function(){

	/*var languageSelected=$('#languages').val();*/
	var updateLanguages = function() {
		var selectTag = $('#languages');
		for (var i = 0 ; i < languageIds.length ; i++) {
			var newElt = document.createElement('option');
			newElt.value=languageIds[i].g;
			newElt.innerHTML = languageIds[i].title;
			selectTag.append(newElt);
		}                          
	};

	var languageIds=[{title:'English (India)' , g : 'en-IN'},{title:'English (UK)' , g : 'en-GB'},{title:'English (US)' , g : 'en-US'},{title:'Simplified China',g: 'zh-CN' }];


	var selectChange=function(){
		stopRecording();
		var languageSelected=$('#languages').val();
		// console.log(languageSelected);
		/*annyangLoad(languageSelected);*/
		return languageSelected;
	}

	var annyangLoad=function(languageSelected){

    	//first make sure annyang started successfully
    	if(annyang){

			  // construct a library to contain parts of words on weather
            var library = ['weather', 'climate', 'typhoon', 'windy', 'cloudy', 'sunny', 'snowy', 'showery', 'foggy', 'storm', 'rainy',
            'drizzle', 'breezy', 'sleet', 'snow', 'wet', 'icy', 'degree', 'temperature' , 'go' , 'straight' , 'up' , 'down' , 'one' , 
            'two' , 'three' , 'four' ];
            var set = new Set(library);
			//define the functions our commands will run
			
			var showText=function(tag){
				var pText=$("#pText").html();
				var test=$("#pTest").html();
				test+=tag;
				 $('#test p').text(test);
			  
					var words = tag.split(' ');

				    $.each(words,function(n,value){
				    	console.log(1);
				      if(set.has(value)){
				      	pText+=value+" ";
				      	// alert(value);
				      }
				    }) ;
				    
		           // $('#showText p').text(pText+". "+tag);	
		           $('#showText p').text(pText);
				
				 	
			};

			//define commands

			var commands = { 
				'*search': showText,
			}

			//OPTIONAL: activate debug mode for detailed logging in the console
			annyang.debug();

			//Add voice commands to response 
			annyang.addCommands(commands);

			//OPTIONAL: set language for speech recognizer (defaults to English)
			//For a full list of language codes ,see the documentation;
  			// https://github.com/TalAter/annyang/blob/master/docs/FAQ.md#what-languages-are-supported
  			annyang.setLanguage(languageSelected);
  		};
  	}
  	
  	

  		updateLanguages();
  		annyangLoad('en-IN');
  		$("#languages").change(() => {

  			console.log(selectChange());
  			annyangLoad(selectChange());
  		})			
  	})

   //Start Listening
  	/*annyang.start();*/
  	var startRecording=function(){ 
  		annyang.start();
  	};

  	var stopRecording=function(){
  		annyang.abort();
  	};

  	var clearText=function(){
  		$('#showText p').text("");	
  	}	
  	
  	function ts(){
  		var vText=document.getElementById("vText").value;
  		alert(vText);
  		responsiveVoice.speak(vText);}



