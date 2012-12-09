function retakeModel()
{
	

	
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


	self.lQCount = 6;
	self.liabilityScore =ko.observable(localStorage.getItem("kyc.liability.score"));
	self.liabilityAnswerCount= ko.observable(localStorage.getItem("kyc.liability.AC"));
	self.liabilityCss = ko.computed(function(){
			if(self.liabilityScore() == null)
			return false;
		else
			return true;
	});
		
		}

$(document).on( 'pageinit', '#quizSelectPage' ,function() {
	
	ko.applyBindings(new retakeModel());
		
		//alert(ko.observable(localStorage.getItem("kyc.renter.score"))());

        
    });