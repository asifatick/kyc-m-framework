function resultModel()
{
	var self = this;

self.getURL = function()
				{
						$.mobile.changePage( self.usrans1 +".html", {
						transition: "slidefade",
						allowSamePageTransition  : true,

					});
				}

				self.usrans1;

	self.structureScore =ko.observable(localStorage.getItem("kyc.structure.score"));
	self.structureAnswerCount= ko.observable(localStorage.getItem("kyc.structure.AC"));

	self.sQCount = 11;
	self.structureCss = ko.computed(function(){
			if(self.structureScore() == null)
			return false;
		else
			return true;
	});


	self.rQCount = 8;
	self.RenterScore =ko.observable(localStorage.getItem("kyc.renter.score"));
	self.RenterAnswerCount= ko.observable(localStorage.getItem("kyc.renter.AC"));
	self.RenterCss = ko.computed(function(){
			if(self.RenterScore() == null)
			return false;
		else
			return true;
	});

	self.bQCount = 6;
	self.belongingScore =ko.observable(localStorage.getItem("kyc.belonging.score"));
	self.belongingAnswerCount= ko.observable(localStorage.getItem("kyc.belonging.AC"));
	self.belongingCss = ko.computed(function(){
			if(self.belongingScore() == null)
			return false;
		else
			return true;
	});
self.getWidth = function (count, qc){
		return Math.round((count()/qc)*25) +'%';
	};
	self.getclass =  function(count,qc)
				{
					if (count() <= Math.floor(qc *.5) ) {
						// self.badge("C-LEVEL");
	     // 				self.badgeText("Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto");
	     // 				self.badgeTextHead("You missed a few.");
							return "c-level";
					}
					else if (count() <= Math.floor(qc *.75) )
					{

						// self.badge("B-LEVEL");
	     // 				self.badgeText("Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto");
	     // 				self.badgeTextHead("Good Work,");
							return "b-level";

					}
					else
					{
						// self.badge("A-LEVEL");
	     // 				self.badgeText("Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto");
	     // 				self.badgeTextHead ("Outstanding!");
						return "a-level";
					};

				}

	self.lQCount = 6;
	self.liabilityScore =ko.observable(localStorage.getItem("kyc.liability.score"));
	self.liabilityAnswerCount= ko.observable(localStorage.getItem("kyc.liability.AC"));
	self.liabilityCss = ko.computed(function(){
			if(self.liabilityScore() == null)
			return false;
		else
			return true;
	});

	self.totalScore =ko.computed(function() {
        return (isNaN(parseInt(self.structureScore()))?0:parseInt(self.structureScore())) + (isNaN(parseInt(self.belongingScore()))?0:parseInt(self.belongingScore())) + (isNaN(parseInt(self.RenterScore()))?0:parseInt(self.RenterScore())) + (isNaN(parseInt(self.liabilityScore()))?0:parseInt(self.liabilityScore()))    ;
    });
	self.totalAnswerCount= ko.computed(function() {
return (isNaN(parseInt(self.structureAnswerCount()))?0:parseInt(self.structureAnswerCount())) + (isNaN(parseInt(self.belongingAnswerCount()))?0:parseInt(self.belongingAnswerCount())) + (isNaN(parseInt(self.RenterAnswerCount()))?0:parseInt(self.RenterAnswerCount())) + (isNaN(parseInt(self.liabilityAnswerCount()))?0:parseInt(self.liabilityAnswerCount()))    ;
    });

    self.totalQCount= ko.computed(function() {
        return  parseInt(self.sQCount) +  parseInt(self.rQCount) +  parseInt(self.bQCount) +  parseInt(self.lQCount)   ;
    });

	//self.questionCount = curquestionList.length;
	self.classname = ko.observable("ans1");
	self.ansHead = ko.observable("");
	self.ansBody = ko.observable("");
	self.ansTitle = ko.observable("");
	self.badge= ko.observable("");
}

$(document).on( 'pageinit', '#resultPage' ,function() {

	ko.applyBindings(new resultModel());

		//alert(ko.observable(localStorage.getItem("kyc.renter.score"))());


    });