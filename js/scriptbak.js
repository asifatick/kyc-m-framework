function getQuestions(qno)
{
	var questions = 
	[
	{
		
		"Cat" : "1",
		"qus" : {
				"index": "1",
				"text" : "I must have structure coverage, no matter whether I live in a house, condominium, co-op, or rental apartment.",
				"answers" : 	[
								{ "text": "True", "isAns" : 1 },
								{ "text": "False", "isAns" : -1 },
								
							],
				"res": 1,
				"RightAnswer": "1",
				"explanationHead" :"1" ,
				"explanation" : "1",
				"expForWrongHead" :"1",
				"expForWrong" :"1",
				"AnsDescHead" :  "1",
				"AnsDesc" :  "1",
				
			}

	},
		{
		
		"Cat" : "1",
		"qus" : {
				"index": "3",
				"text" : "Your 2rd Question",
				"answers" : 	[
								{ "text": "Answer 21", "isAns" : -1 },
								{ "text": "Answer 32", "isAns" : 1 },
								{ "text": "Answer 313", "isAns" : -1 },
								{ "text": "Answer 34", "isAns" : -1 },
							],
				"res": 1,
				"RightAnswer": "Answer 2",
				"explanationHead" :"2",
				"explanation" : " 2",
				
				"expForWrongHead" : "2",
				"expForWrong" : "2",

				"AnsDescHead" : "2",
				"AnsDesc" : "222 Answer33 3 Answer 3 Answer 3 Answer 3 Answer 3 Answer 3 Answer 3"
			}
	},
	{
		
		"Cat" : "1",
		"qus" : {
				"index": "3",
				"text" : "Your 3rd Question",
				"answers" : 	[
								{ "text": "Answer 31", "isAns" : -1 },
								{ "text": "Answer 32", "isAns" : 1 },
								{ "text": "Answer 313", "isAns" : -1 },
								{ "text": "Answer 34", "isAns" : -1 },
							],
				"res": 1,
				"RightAnswer": "Answer 3",
				"explanationHead" :"3",
				"explanation" : "3",
				
				"expForWrongHead" : "3w",
				"expForWrong" : "3w",

				"AnsDescHead" : "3",
				"AnsDesc" : "Answer 33 Answer 3 Answer 3 Answer 3 Answer 3 Answer 3 Answer 3"
			}
	},
	{
		
		"Cat" : "1",
		"qus" : {
				"index": "3",
				"text" : "Your 4rd Question",
				"answers" : 	[
								{ "text": "Answer 31", "isAns" : -1 },
								{ "text": "Answer 32", "isAns" : 1 },
								{ "text": "Answer 313", "isAns" : -1 },
								{ "text": "Answer 34", "isAns" : -1 },
							],
				"res": 1,
				"RightAnswer": "Answer 4",
				"explanationHead" :"4r",
				"explanation" : "4r",
				
				"expForWrongHead" : "4w",
				"expForWrong" : "4w",

				"AnsDescHead" : "4",
				"AnsDesc" : "Answer 13 Answer 3 Answer 3 Answer 3 Answer 3 Answer 3 Answer 3"
			}
	},
	]
	return questions;
}