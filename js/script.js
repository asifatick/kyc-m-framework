			var curquestionList ;
			var quetionIndex =0;
			var koquestion;
			var koquestion1;

			$(window).load(function() {
				window.jsel = JSONSelect;
				getQuostionsByCat('1')
				//alert(curquestionList);
				koquestion =createKoObject(getQuostion(quetionIndex));
				//koquestion1 = ko.observable(koquestion);
				ko.applyBindings(new viewModel());


        
    });

			function viewModel()
			{
				var self = this;
				self.tempscore =0;
				//self.usrans =ko.observable("0");
				self.score =ko.observable(0);
				self.answerCount= ko.observable(0);
				self.questionCount = curquestionList.length;
				self.classname = ko.observable("ans1");
				//self.visibleExplanation =  ko.observable(false);
				//self.visibleTellMore =  ko.observable(false);
				self.cq = ko.observable(getQuostion(quetionIndex));
				//self.cqq = getQuostion(quetionIndex);
				self.getAnsID = function(ind)
				{
					return "answer" + ind();
				}
				self.next = function(place) {
				 	
				 	
         			if (quetionIndex == curquestionList.length-1) {
         				localStorage.setItem("score", self.score());
         				alert(localStorage.getItem("score"));
         			}
         			else
         			{
					quetionIndex++;
             		self.cq(  getQuostion(quetionIndex));
             		self.cqq = getQuostion(quetionIndex);
             		//self.visibleTellMore(false);
         			//self.visibleExplanation(false);
         			};

         		}
     			self.submit = function(){

     				if(isNaN(self.usrans))
     				{
     					self.usrans =0;
     				}
     				self.tempscore  += (((parseInt(self.usrans)+ 1)/2))
     				self.score(self.tempscore * 5);
     				if(parseInt(self.usrans) ==1)
     				{
     					self.ansTrue = true;
     					self.ansHead = this.explanationHead;
     					self.ansBody = this.explanation;
     					self.ansTitle = "CORRECT! 5 POINTS";
     				}
     				else{
     					self.ansTrue = false;
     					self.ansHead = this.expForWrongHead;
     					self.ansBody = this.expForWrong;
     					self.ansTitle = "SORRY, THE CORRECT ANSWER IS";
     				}
     				self.answerCount(self.tempscore);
     				self.classname("ans"+self.usrans);
     				$.mobile.changePage( "#correctPage", {
						transition: "pop",
						allowSamePageTransition  : true,
						
					});


			 	//alert(self.score);
			 	self.usrans = undefined;
			 	//self.visibleExplanation(true);

			 	//self.next();

     			}
         			self.tellMore = function(){
         				//self.visibleTellMore(true);
         				//self.visibleExplanation(false);
         			}
         			self.goBackExplanation = function(){
         				//self.visibleTellMore(false);
         				//self.visibleExplanation(true);
         			}
         		
			}
	function getQuostionsByCat(cat)
	{

				var q = getQuestions(1);
				curquestionList= jsel.match('.Cat:val(\"' + cat + '\") ~ .qus', q);
	}
	function getQuostion(qno)
	{
		return curquestionList[qno];

	}
	function createKoObject(qoustion)
	{
		return {
				"index": qoustion.index,
				"text" : qoustion.text,
				"answers" : ko.observableArray(qoustion.answers),
				"res": qoustion.res,
				"RightAnswer": qoustion.RightAnswer,
				"AnsDesc" : qoustion.AnsDesc
			}
	}


	function next()
	{
		quetionIndex++;
		//ko.applyBindings({});
		koquestion = createKoObject(getQuostion(quetionIndex));

		//ko.applyBindings(p);
		
	}