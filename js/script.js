var curquestionList ;
var quetionIndex =0;
var koquestion;
var koquestion1;


function viewModel()
{
    var self = this;
    self.tempscore =0;
    //self.usrans =ko.observable("0");
    self.score =ko.observable(0);
    self.answerCount= ko.observable(0);
    self.questionCount = curquestionList.length;
    self.classname = ko.observable("ans1");
    self.ansHead = ko.observable("");
    self.ansBody = ko.observable("");
    self.ansTitle = ko.observable("");
    self.badge= ko.observable("");
    self.badgeTextHead =ko.observable("");
    self.badgeText =ko.observable("");
    self.ancEXP =ko.observable("");
    self.markerArray = ko.observableArray();
    self.onQuestionPage =ko.observable(1);
    self.retNAme = ko.computed(function(){
                               return  "#quizSelectPage" + self.onQuestionPage();
                               });
    
    self.markerClass = ko.observable("a");
    
    
    
    self.getURL = function()
    {
        $.mobile.changePage( self.usrans1 +".html", {
                            transition: "slidefade",
                            allowSamePageTransition  : true,
                            
                            });
    }
    self.getRetakeValue = function()
    {
        self.retNAme ( "#quizSelectPage" + self.onQuestionPage);
    }
    
    self.usrans1;
    
    for (var  i = 0; i < curquestionList.length ; i++) {
        self.markerArray.push( ko.observable("a"));
    };
    
    self.markerArray()[quetionIndex]("b");
    //self.visibleExplanation =  ko.observable(false);
    //self.visibleTellMore =  ko.observable(false);
    self.cq = ko.observable(getQuostion(quetionIndex));
    self.cqq = getQuostion(quetionIndex);
    
    self.getAnsID = function(ind)
    {
        return "answer" + ind();
    }
    
    self.getResultClass =  function()
    {
        if (self.answerCount() <= Math.round((curquestionList.length *50)/100) ) {
            self.badge("c-level");
            self.badgeText("Why not go back and review the questions about "+self.getCatName()+ " that you answered incorrectly. For more information, be sure to talk to your Insurance Professional for advice on creating an insurance strategy that best fits your needs and budget.");
            self.badgeTextHead("You missed a few.");
            return "c-level";
        }
        else if (self.answerCount() <= (Math.round(curquestionList.length *.75) ))
        {
            
            self.badge("b-level");
            self.badgeText("But you may want to review the questions about "+self.getCatName()+ " that you answered incorrectly. For more information, be sure to talk to your Insurance Professional for advice on creating an insurance strategy that best fits your needs and budget.");
            self.badgeTextHead("Good Work,");
            return "b-level";
            
        }
        else
        {
            self.badge("a-level");
            self.badgeText("For even more information, be sure to contact your Insurance Professional for advice on creating an insurance strategy that best fits your needs and budget.");
            self.badgeTextHead ("Outstanding!");
            return "a-level";
        };
        
    }
    
    self.getCatName = function()
    {
        switch(catID())
        {
            case "1":
                return "STRUCTURE";
                break;
            case "2":
                return "BELONGINGS";
                break;
            case "3":
                return "LIABILITY";
                break;
            case "4":
                return "RENTALS, CONDOS & CO-OPS";
                break;
            default:
                return "RENTALS, CONDOS & CO-OPS";
                
        }
    }
    self.next = function(place) {
        
        
        if (quetionIndex >= curquestionList.length-1) {
            localStorage.setItem(getScoreID(), self.score());
            localStorage.setItem(getAnsCountID(), self.answerCount());
            
            //alert(localStorage.getItem("score"));
            self.getResultClass();
            self.onQuestionPage(3);
            
            $.mobile.changePage( $("#badgesPage"), {
                                transition: "slidefade",
                                allowSamePageTransition  : true,
                                
                                });
        }
        else
        {
            if (self.onQuestionPage() == 0) {
                quetionIndex++;
                $.mobile.changePage(  $("#structureQuizPage"), {
                                    transition: "slidefade",
                                    allowSamePageTransition  : true,
                                    
                                    });
                //self.visibleTellMore(false);
                //self.visibleExplanation(false);
                setTimeout(function(){self.cq(  getQuostion(quetionIndex));self.cqq = getQuostion(quetionIndex);},200);
                
                self.markerArray()[quetionIndex] ("b");
                self.onQuestionPage (1);
                
            }
            else
            {
                $.mobile.changePage( $("#structureQuizPage"), {
                                    transition: "slidefade",
                                    allowSamePageTransition  : true,
                                    
                                    });
            };
        };
    }
    self.submit = function(){
        
        if(isNaN(self.usrans))
        {
            //self.usrans =0;
            return false;
        }
        //self.tempscore  += (((parseInt(self.usrans)+ 1)/2))
        
        if(parseInt(self.usrans) ==1)
        {
            //self.ansTrue = true;
            self.tempscore += 1;
            self.ansHead (self.cqq.explanationHead);
            self.ansBody (self.cqq.explanation);
            self.ancEXP ("");
            self.ansTitle ("CORRECT! 5 POINTS");
        }
        else{
            if(parseInt(self.usrans) ==0)
            {self.usrans ="-1";}
            //self.ansTrue = false;
            self.tempscore += 0;
            self.ansHead (self.cqq.expForWrongHead);
            self.ansBody (self.cqq.expForWrong);
            self.ansTitle (self.getansTitleForWrong());
        }
        self.onQuestionPage (0);
        
        self.score(self.tempscore * 5);
        self.answerCount(self.tempscore);
        self.classname("ans"+self.usrans);
        $.mobile.changePage( $("#correctPage"), {
                            transition: "slidefade",
                            allowSamePageTransition  : true,
                            
                            });
        
        
        //alert(self.score);
        self.usrans = undefined;
        //self.visibleExplanation(true);
        
        //self.next();
        
    }
    self.getansTitleForWrong =function()
    {
        if (self.cq().answers.length > 2) {
            self.ancEXP ("EXPLANATION");
            return "SORRY, THE CORRECT ANSWER IS";
            
        };
        self.ancEXP ("EXPLANATION");
        return "SORRY, THE CORRECT ANSWER IS";
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

$(document).on( 'pageinit', '#structureQuizPage' ,function() {
               window.jsel = JSONSelect;
               getQuostionsByCat(catID());
               //alert(curquestionList);
               //koquestion =createKoObject(getQuostion(quetionIndex));
               //koquestion1 = ko.observable(koquestion);
               ko.applyBindings(new viewModel());
               //localStorage.setItem(getScoreID(), 12);
               //alert(localStorage.getItem(getScoreID()));
               });