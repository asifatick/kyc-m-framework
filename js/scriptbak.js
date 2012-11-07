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
				"RightAnswer": "True",
				"explanationHead" : "You don't need coverage for damage to the structure of rentals, condominiums or co-ops.",
				"explanation" : "You're ready to move to the next question. For an explanation of the kinds of homes that need structure coverage, tap the \"Tell Me More\" button below.",

				"expForWrongHead" :"You don't need coverage for damage to the structure of rental apartments, condominiums and co-ops.",
				"expForWrong" :"For an explanation of the kinds of homes that need structure coverage, tap the \"Tell Me More\" button below.",

				"AnsDescHead" :"Know when structure coverage is necessary",
				"AnsDesc" :  "If you own a house, you will need insurance for the structure. You don't need coverage for damage to the structure of rental apartments, condominiums and co-ops. In the case of condominiums and co-ops, be sure to consult your ownership papers and/or co-op agreement to understand exactly which structural parts of the apartment are covered by your monthly dues, and other membership or commons fees.",
				
			}

	},
	{
		
		"Cat" : "1",
		"qus" : {
				"index": "2",
				"text" : "Recent declines in housing prices mean that I can reduce the amount of insurance I need.",
				"answers" : 	[
								{ "text": "True", "isAns" : -1 },
								{ "text": "False", "isAns" : 1 },
								
							],
				"res": 1,
				"RightAnswer": "False",
				"explanationHead" :"You need coverage for the cost of repairing or rebuilding your home from scratch (materials, labor, permits and other related costs).",
				"explanation" : "You're ready to move to the next question. To learn more about the difference between real estate value and replacement cost, tap the \"Tell Me More\" button below.",
				
				"expForWrongHead" : "It may sound counterintuitive, but a decline in neighborhood real estate property values has no effect on the cost of materials and labor for rebuilding your home, particularly following a widespread disaster. ",
				"expForWrong" : "For an explanation of the difference between real estate value and replacement cost, tap the \"Tell Me More\" button below.",

				"AnsDescHead" : "Insure your home for what its worth, not for what it cost",
				"AnsDesc" : "As we've learned over the past few years, real estate prices rise and fall. However, the cost of rebuilding or repairing a house can increase or decrease as well, for reasons unrelated to its real estate value-for example, due to fluctuations in inflation, or following a widespread disaster when a surge in demand for construction materials and labor results in higher prices. Contact your Insurance Professional to accurately calculate the cost of rebuilding from the ground up. "
			}
	},
	{
		
		"Cat" : "1",
		"qus" : {
				"index": "3",
				"text" : "If I have replacement cost coverage for the structure of my home, it will cover increased rebuilding costs due to inflation, stricter building codes or other factors.",
				"answers" : 	[
								{ "text": "True", "isAns" : -1 },
								{ "text": "False", "isAns" : 1 },
								
							],
				"res": 1,
				"RightAnswer": "False",
				"explanationHead" : "Not all kinds of structure coverage are equal.",
				"explanation" : "Tap the \"Tell Me More\" button below for information that will help you choose the one that best fits your needs.",

				"expForWrongHead" :"There are many factors to consider when choosing structure coverage. Why not take some time to learn about your options?",
				"expForWrong" :"Tap the \"Tell Me More\" button below to for a detailed explanation of the different kinds of coverage.",

				"AnsDescHead" :"Understanding your structure coverage options",
				"AnsDesc" :  "There are several different types of coverage available to protect the structure of your home, so it is important to talk over all the options with your Insurance Professional. Which one you choose depends on a lot of factors, includingoverall inflation, the cost of building/cost of living in your area and, of course, your budget. <br><br> <b>Replacement Cost coverage:</b> Pays the cost of rebuilding/repairing your home up to the limit of your policy. <br><br><b>Extended Replacement Cost coverage:</b> Pays a certain percentage over the limit of your Replacement Cost coverage.<br><br><b>Guaranteed Replacement Cost coverage:</b> Pays all costs related to rebuilding the structure of your home exactly as it was before a disaster-even if they exceed the policy limit. This gives you comprehensive protection against sudden increases in construction costs due to labor or building materialshortages; e.g. after a widespread disaster.",
				
			}

	},
	{
		
		"Cat" : "1",
		"qus" : {
				"index": "4",
				"text" : "I live in an older home-do I need to purchase specialized insurance?",
				"answers" : 	[
								{ "text": "Yes, there are special policies for historic and older homes", "isAns" : 1 },
								{ "text": "No, a standard homeowners policy will cover my home, no matter how old it is", "isAns" : -1 },
								
							],
				"res": 1,
				"RightAnswer": "Yes, there are special policies for historic and older homes",
				"explanationHead" : "Yes, you may need to obtain specialized insurance if you live in an older or historic home.",
				"explanation" : "Tap the \"Tell Me More\" button below for more on types of older home policies. Otherwise, let's move ahead to the next question.",

				"expForWrongHead" :"Yes, you may need to obtain specialized insurance if you live in an older or historic home.",
				"expForWrong" :"Tap the \"Tell Me More\" button below to learn about types of older home policies.",

				"AnsDescHead" :"What to know about insuring older homes",
				"AnsDesc" :  "There are two scenarios when it comes to insuring an older home: <br>  1.	If, depending on the age, condition and location of the house, a full replacement cost policy is available or is too costly, you can get an older home policy, which usually reimburses you for damage on an actual cash value basis. <br>  2.	If you own a high-value or historic older home and want to repair/rebuild with original materials, fixtures and craftsmanship, you may need specialized insurance to cover the cost of replacing intricate plasterwork, stained-glass windows, wide-plank floors, or carved moldings.  Another thing to consider: If your home is landmarked you may be legally obligated to repair or rebuild the structure to certain architectural or aesthetical standards-so make sure your policy covers this scenario.",
				
			}

	},
	{
		
		"Cat" : "1",
		"qus" : {
				"index": "5",
				"text" : "Most homeowners policies cover damage due to flood or earthquake.",
				"answers" : 	[
								{ "text": "True", "isAns" : -1 },
								{ "text": "False", "isAns" : 1 },
								
							],
				"res": 1,
				"RightAnswer": "False",
				"explanationHead" : "Damage or loss from flood or earthquake needs to be covered by separate policies.",
				"explanation" : "You're ready to move to the next question. For more information about flood and earthquake insurance coverage, tap the \"Tell Me More\" button below.",

				"expForWrongHead" :"Damage or loss from flood or earthquake needs to be covered by separate policies.",
				"expForWrong" :"For more information about covering your home against flood or earthquake, tap the \"Tell Me More\" button below.",

				"AnsDescHead" :"Don't overlook the need for flood and earthquake insurance",
				"AnsDesc" :  "<b>Flood</b> insurance is provided by the U.S. Government's National Flood Insurance Program (NFIP). Some private insurance companies also offer flood insurance as an alternative to the NFIP policy or in addition to it. In general, you cannot obtain a mortgage for a home in an area that's prone to flooding (a \"flood zone\") without purchasing separate flood insurance.<br><b> Tap here</b> [embed: http://www.floodsmart.gov/floodsmart/pages/flooding_flood_risks/ffr_overview.jsp] <b>to learn more about flood risk, and to see what the risk of flooding is where you live.<br><br>Earthquake</b> insurance is also a separate policy, but is usually offered by the same company that provides your homeowners insurance. There are some conditions dictated by local and state governments that apply. Talk to your Insurance Professional for more informationon how to obtain additional coverage against loss or damage due to flood or earthquake for where you live.",
				
			}

	},
	{
		
		"Cat" : "1",
		"qus" : {
				"index": "6",
				"text" : "If there have been changes to local building codes since my house was built, will my homeowners policy cover the cost of compliance when rebuilding my home?",
				"answers" : [
								{ "text": "A) No, homeowners policies generally do not cover increased costs resulting from changes to local building safety codes ", "isAns" : -1 },
								{ "text": "B) Yes, this sort of coverage is included in all standard policies", "isAns" : -1 },
								{ "text": "C) Yes, but you may need to select additional coverage (an \"endorsement\")", "isAns" : 1 },
																
							],
				"res": 1,
				"RightAnswer": "Yes, but you may need to select additional coverage (an \"endorsement\")",
				"explanationHead" : "Ordinance or Law coverage helps to pay for additional costs arising from changes to building codes.",
				"explanation" : "You're ready to move to the next question. For more information about this type of coverage tap the \"Tell Me More\" button below.",

				"expForWrongHead" :"You will need an Ordinance or Law endorsement to cover changes to local building codes.",
				"expForWrong" :"To learn more about this type of coverage, tap the \"Tell Me More\" button below.",

				"AnsDescHead" :"Be covered for changes to local building codes",
				"AnsDesc" :  "You can add an Ordinance or Law endorsement to your homeowners policy to help pay for additional costs arising from changes to building codes (e.g., requirements for hard-wired hazard alarms, sprinkler systems, upgraded building materials, etc.). In some cases, this coverage pays for additional rebuilding expenses that come with meeting specific aesthetical requirements if your home is located in a landmark or historical preservation district. Be sure to ask yourInsurance Professional for more information about this kind of coverage.",
				
			}

	},
	{
		
		"Cat" : "1",
		"qus" : {
				"index": "7",
				"text" : "Will my homeowners policy cover damage caused by sewer back-up?",
				"answers" : [
								{ "text": "A) Yes, without exception", "isAns" : -1 },
								{ "text": "B) Yes - but only when due to sump-pump failure", "isAns" : -1 },
								{ "text": "C) No - sewer back-ups are covered by flood insurance", "isAns" : -1 },
								{ "text": "D) No - you need to have additional coverage", "isAns" : 1 },								
							],
				"res": 1,
				"RightAnswer": "No-you need to have additional coverage",
				"explanationHead" : "Backed up sewers are not covered by standard homeowners or flood insurance policies; you must usually purchase this coverage separately.",
				"explanation" : "For more on sewer back-up coverage, tap the \"Tell Me More\" button below.",

				"expForWrongHead" :"Backed up sewers are not covered by standard homeowners or flood insurance policies; you must usually purchase this coverage separately.",
				"expForWrong" :"For more answers and information on sewer back-up coverage, tap the \"Tell Me More\" button below.",

				"AnsDescHead" :"Get the dirt on sewer back-up coverage",
				"AnsDesc" :  "Backed up sewers are messy-in more ways than one. For starters, they can cause thousands of dollars in damage to your home's floors, walls, furniture and electrical systems. Yet sewer back-ups or basement flooding (that is due to sump-pump failure during heavy downpours) are not covered under typical homeowners insurance policies, nor are they covered by flood insurance. Fortunately, this type of coverage is available at a nominal cost, either separately or as an endorsement to your homeowners policy.",
				
			}

	},
	{
		
		"Cat" : "1",
		"qus" : {
				"index": "8",
				"text" : "The Additional Living Expenses (ALE) in my homeowners policy pays for the following costs of living away from home while my home is rebuilt:",
				"answers" : [
								{ "text": "A) Hotels/lodging and meals", "isAns" : -1 },
								{ "text": "B) Some personal expenses (e.g., replacement clothing or medications)", "isAns" : -1 },
								{ "text": "C) Motor vehicle expenses, entertainment and other activities", "isAns" : -1 },
								{ "text": "D) Both A & B", "isAns" : 1 },		
								{ "text": "E) All of the above", "isAns" : -1 },							
							],
				"res": 1,
				"RightAnswer": "Both A & B",
				"explanationHead" : "ALE covers costs of lodging and food while displaced from your house, plus other additional expenses as specified by your policy.",
				"explanation" : "For information about ALE provisions, tap the \"Tell Me More\" button below. Otherwise, let's move ahead to the next question.",

				"expForWrongHead" :"ALE covers costs of lodging and food while you are displaced from your house, plus other additional living expensesas specified by your policy. ",
				"expForWrong" :"For information about ALE provisions, tap the \"Tell Me More\" button below.",

				"AnsDescHead" :"Additional Living Expenses: Good for what ALEs you...",
				"AnsDesc" :  "ALE pays the additional costs of living away from home if you cannot live there due to damage from a fire, storm or other insured disaster. It covers hotel bills, restaurant meals and other expenses, over and abovethe customary living expenses (e.g., utilities, mortgage, etc.), that you may continue to incur while your home is being rebuilt.<br><br> ALE coverage has limits: the dollar limitis usually a percentage of the amount of coverage you have on your home, the coverage may be for a specific duration of time. These limits differ from company to company, and some companies allow you to increase the coverage amount for an additional premium, so it's a good idea to review your ALE needs with an Insurance Professional.",
				
			}

	},
	{
		
		"Cat" : "1",
		"qus" : {
				"index": "9",
				"text" : "According to my insurance policy, my deductible is $500? Can I change it?",
				"answers" : [
								{ "text": "A) Yes, there is generally a required minimum deductible, but most companies will allow you to raise it", "isAns" : 1 },
								{ "text": "B) No, the deductible is always a fixed amount ", "isAns" : -1 },		
								{ "text": "C) It varies from company to company", "isAns" : -1 },							
							],
				"res": 1,
				"RightAnswer": "Yes, there is generally a required minimum deductible, but most companies will allow you to raise it",
				"explanationHead" : "There is generally a required minimum deductible, but you can raise it if you want to lower your premium costs.",
				"explanation" : "To learn more about how deductibles work, tap the \"Tell Me More\" button below.",

				"expForWrongHead" :"There is generally a required minimum deductible, but you can raise it if you want to lower your premium costs.",
				"expForWrong" :"To learn more about how deductibles work, tap the \"Tell Me More\" button below.",

				"AnsDescHead" :"Understand your deductible ",
				"AnsDesc" :  "A deductible is basically the amount \"deducted\" from the reimbursed value of an insured loss. When repairing your home or replacing personal possessions, the amount of the deductible comes out of your own pocket, while the rest is paid by the insurance company. (There is no deductible for the liability portion of your policy.) Generally speaking, the higher the amount of your deductible, the less you pay in premiums for an insurance policy.)<br><br>A deductible is generally a specific dollar amount; a $500 dollar-amount deductible means that figure-$500-is deducted from any reimbursement an insurer pays to you. So, if you have an insured loss worth $10,000, your claim check would be for $9,500.",
				
			}

	},
	{
		
		"Cat" : "1",
		"qus" : {
				"index": "10",
				"text" : "All homeowners policies have a separate deductible for catastrophes.",
				"answers" : [
								{ "text": "True ", "isAns" : -1 },		
								{ "text": "False", "isAns" : 1 },							
							],
				"res": 1,
				"RightAnswer": "False",
				"explanationHead" : "There are separate deductibles for some catastrophes, such as hurricanes and earthquakes, but only in certain states.",
				"explanation" : "To learn more about these types of deductibles, tap the \"Tell Me More\" button below.",

				"expForWrongHead" :"There are separate deductibles for some catastrophes, such as hurricanes and earthquakes, but only in certain states.",
				"expForWrong" :"To learn more about these types of deductibles, tap the \"Tell Me More\" button below.",

				"AnsDescHead" :"Learn about about catastrophe deductibles",
				"AnsDesc" :  "Depending on where you live your policy may include a catastrophe deductible for regionalized risks, such as earthquakes, hail, hurricane, windstorms (tornadoes) or wildfires. Catastrophe deductibles are usually percentage-based (generally 1% to 5%), and other conditions frequently apply. Percentage deductibles are different from dollar-amount deductibles, in that they are based on a percentage of the home's total insured value. <br><br>Details vary from state to state, and from one company to another, so make sure to have a discussion with an Insurance Professional about what triggers your catastrophe deductible.",
				
			}

	},
	{
		
		"Cat" : "1",
		"qus" : {
				"index": "11",
				"text" : "Deductibles are just one tool I can use to actively reduce my insurance policy premiums",
				"answers" : [
								{ "text": "True ", "isAns" : 1 },		
								{ "text": "False", "isAns" : -1 },							
							],
				"res": 1,
				"RightAnswer": "True",
				"explanationHead" : "Insurance companies offer a wide variety of discounts, such as to reward customer loyalty or safer homes.",
				"explanation" : "To learn more about these and other money-saving measures, tap the \"Tell Me More\" button below. ",

				"expForWrongHead" :"Insurance companies offer a wide variety of discounts, such as to reward customer loyalty or safer homes.",
				"expForWrong" :"To learn more about these and other money-saving measures, tap the \"Tell Me More\" button below.",

				"AnsDescHead" :"Premium advice: Simple ways to reduce the cost of insurance",
				"AnsDesc" :  "To encourage safety and help customers save money, insurers may offer discounts for:<ul><li>	Installation of smoke detectors and burglar alarm/security systems<br><li>	Upgrades to plumbing or electrical systems that meet modern safety code standards <br><li>	Measures to make your home safer (i.e. adding storm shutters and shatter-proof glass, reinforcing your roof to make your home more resistant to windstorms, etc)<br><li>	Age: If you are at least 55 years old and retired, for instance, you may qualify for a discount of up to 10% at some companies<br><li>	Multiple policies-home, life, auto, etc-with the same company<br><li>	Long-time customer loyalty<br><li>	Good credit</ul><br>Talk to an Insurance Professional to see what's available, and how a little bit of planning can result in substantial savings.",
				
			}

	},
	{
		
		"Cat" : "2",
		"qus" : {
				"index": "1",
				"text" : "With a standard homeowners policy what are my options for coveringmy personal possessions in case they are stolen or destroyed in a fire, hurricane or other insured disaster?",
				"answers" : [
								{ "text": "A) Follow my insurance company's recommended level of coverage for belongings-equal to a percentage of the coverage for the structure of the house ", "isAns" : -1 },		
								{ "text": "B) Ask for a level of coverage that's higher than the recommended percentage of my structure coverage", "isAns" : -1 },
								{ "text": "C) Both A & B ", "isAns" : 1 },							
							],
				"res": 1,
				"RightAnswer": "Both A & B",
				"explanationHead" : "You can opt for a standard level of coverage, or ask for higher coverage (if you estimate it will cost more to replace your belongings).",
				"explanation" : "For information about how much coverage you need for your belongings, tap the \"Tell Me More\" button below. Otherwise, let's move ahead to the next question.",

				"expForWrongHead" :"You can opt for a standard level of coverage, or ask for higher coverage (if you estimate it will cost more to replace your belongings).",
				"expForWrong" :"For additional information onchoosing coverage for your belongings, tap the \"Tell Me More\" button below.",

				"AnsDescHead" :"Know the right type of coverage for your belongings",
				"AnsDesc" :  "Most insurance companies recommend you purchase personal possessions coverage that's equal to a percentage of the amount of insurance you have on the structure of your home, usually about 50% to 70% (see: \"Structure\" quiz). However, if you have a lot of expensive furniture and high-end fixtures, you can request a higher level of coverage for your belongings.<br><br>In either case, it's a good idea to talk with an Insurance Professional for help in determining the amount of coverage that's right for your situation, needs and budget.",
				
			}

	},
	{
		
		"Cat" : "2",
		"qus" : {
				"index": "2",
				"text" : "Items purchased in the past are completely covered, no matter what their present-day replacement value is.",
				"answers" : [
								{ "text": "True ", "isAns" : -1 },		
								{ "text": "False", "isAns" : 1 },							
							],
				"res": 1,
				"RightAnswer": "False",
				"explanationHead" : "To cover present-day replacement value for items lost or damaged, you need to purchase Replacement Cost coverage for personal possessions.",
				"explanation" : "You're ready to move on to the next question. To learn more about the different kinds of personal property coverage, tap the \"Tell Me More\" button below.",

				"expForWrongHead" :"To cover present-day replacement value for items lost or damaged, you need to purchase Replacement Cost coverage for your possessions.",
				"expForWrong" :"For an explanation of the different kinds of coverage against loss or damage to personal property, tap the \"Tell Me More\" button below.",

				"AnsDescHead" :"Lost and found: Know your reimbursement options",
				"AnsDesc" :  "There are two types of coverage for personal property:<br><ul><li>  Actual Cash Value, which reimburses you for what the item is actually worth, minus a reduction in value (depreciation) over time, as determined by a specific formula. <li>  Replacement Cost, whichreimburses you for what it would cost to replace an item at current cost, without accounting for depreciation, meaning you could go out today and get the same item (or one of comparable kind and quality) at no additional out-of-pocket expense. </ul>",
				
			}

	},
	{ 
		
		"Cat" : "2",
		"qus" : {
				"index": "3",
				"text" : "Are trees, shrubs, plants and other vegetation on my property covered (and what about damage caused by falling limbs)?",
				"answers" : [
								{ "text": "A)Yes-completely", "isAns" : -1 },		
								{ "text": "B)Yes-but with some exceptions and limitations", "isAns" : 1 },	
								{ "text": "C)No-you need special coverage", "isAns" : -1 },						
							],
				"res": 1,
				"RightAnswer": "Yes-but with some exceptions and limitations",
				"explanationHead" : "Trees, plants and shrubs are covered under standard homeowners insurance, but there are usually some exceptions and limitations.",
				"explanation" : "To learn what they are, and for more about this type of coverage, tap the \"Tell Me More\" button below.",

				"expForWrongHead" :"Trees, plants and shrubs are covered under standard homeowners insurance, but there are usually some exceptions and limitations.",
				"expForWrong" :"To learn what they are, and for more about this type of coverage, tap the \"Tell Me More\" button below.",

				"AnsDescHead" :"Coverage for trees and plants: Don't \"leaf\" well enough alone...",
				"AnsDesc" :  "Homeowners insurance policies typically offer coverage for damage to (or caused by) <b>trees, plants, shrubs, and other vegetation</b>-most often an amount equivalent to a predetermined percentage of your overall policy. What that means, basically, is that you’re covered for damage or loss due to theft, fire, lightning, explosion, vandalism, riotor even falling aircraft. (But not for damages caused by wind/weather.) If a falling tree or limb hits an insured structure, such as your house or garage, there is also coverage for the cost of removing the fallen object.",
				
			}

	},
	{
		
		"Cat" : "2",
		"qus" : {
				"index": "4",
				"text" : "The best way to determine the worth of my personal possessions (and make it easier to file a claim in the event of theft or an insured disaster) is to:",
				"answers" : [
								{ "text": "A) Conduct a home inventory", "isAns" : 1 },		
								{ "text": "B) \"Guesstimate\" the amount of losses I'll have after a theft or insured disaster", "isAns" : -1 },
								{ "text": "C) Ask around to learn what my stuff is worth", "isAns" : -1 },							
							],
				"res": 1,
				"RightAnswer": "Conduct a home inventory",
				"explanationHead" : "The best way to determine the worth of your belongings is to conduct a home inventory. Believe it or not, this is not as hard as it may seem.",
				"explanation" : "Before you move on to the next question, we recommend that you tap the \"Tell Me More\" button below to learn how it can be easy, and even fun, to create and manage a comprehensive home inventory.",

				"expForWrongHead" :"The best way to determine the worth of your belongings is to conduct a home inventory.",
				"expForWrong" :"You didn't get this one right, but the good news is that there are tools to make creating and manage a comprehensive home inventory easy, and even fun*, tap the \"Tell Me More\" button below to learn how.",

				"AnsDescHead" :"Start creating a home inventory today!",
				"AnsDesc" :  "Creating and maintaining an up-to-date, comprehensive home inventory can help you in lots of ways, including:<ul><li>	Keeping track of all the things you've accumulated over the years <li>	Helping you purchase exactly the right coverage for your needs and budget<li>	Making it WAY easier to get your insurance claim settled faster<li>	Keeping a detailed record of losses when income tax time rolls around</ul>Creating and updating a home inventory may sound like a big job, but fortunately, there are tools to help you do it quickly and easily. I.I.I.'s acclaimed, FREE <b>Know Your Stuff® - Home Inventory</b> app and software, lets you list the contents of your home, room-by-room, including photos-and securely store your inventory data online for easy access, anywhere, anytime! <br><br>Get the app today: itunes.apple.com/us/app/iii-inventory/id475840890?mt=8.<br><br>Or log on to www.knowyourstuff.org to sign up for the software.<br><br>If you prefer to keep things low-tech, you can write everything down in a notebook, and attach receipts. Or you can take pictures and write the information about each item on the back of the photo.",
				
			}

	},
	{
		
		"Cat" : "2",
		"qus" : {
					"index": "5",
					"text" : "What if my belongings are stolen or damaged when they're not in my home? My homeowners policy will cover my personal possessions if:",
					"answers" : [
									{ "text": "A) I'm traveling for business or going on vacation", "isAns" : -1 },		
									{ "text": "B) I'm storing them at a local \"lock-and-store\" facility", "isAns" : -1 },	
									{ "text": "C) I'm going away to college", "isAns" : -1 },	
									{ "text": "D) All of the above", "isAns" : 1 },					
								],
					"res": 1,
					"RightAnswer": "All of the above",
					"explanationHead" : "Off-premises coverage means that personal possessions are covered anywhere in the world. Some conditions and limitations generally apply.",
					"explanation" : "To learn more about this kind of coverage, tap the \"Tell Me More\" button below. Otherwise, you are ready to go on to the next question.",

					"expForWrongHead" :"Off-premises coverage means just what it says, that your personal possessions are covered anywhere in the world. Some conditions and limitations generally apply.",
					"expForWrong" :"Take a few moments to learn more about this kind of coverage by tapping the \"Tell Me More\" button below.",

					"AnsDescHead" :"Personal possessions coverage: You CAN take it with you!",
					"AnsDesc" :  "Off-premises coverage safeguards your personal possessions against damage or loss anywhere outside your home against the disasters listed in the policy (e.g. in a college dorm, vacation rental, self-storage unit, etc.). Most companies limit the amount of this type of coverage-usually to a percentage (often 10%) of the coverage you have for all your personal property. There may even be limited coverage for unauthorized use of credit cards. Your Insurance Professional can answer any questions you may have about covering your belongings when you're on the go.",
				}

	},
	{
		
		"Cat" : "2",
		"qus" : {
					"index": "6",
					"text" : "When I select an amount of personal possessions coveragewith my homeowners policy, this means that:",
					"answers" : [
									{ "text": "A) The full value of all my personal possessions is covered by the policy ", "isAns" : -1 },		
									{ "text": "B) I may need to purchase additional coverage for certain valuables (i.e., high-value items)", "isAns" : 1 },	
									{ "text": "C) Some possessions are covered, and some are not, depending on what the item is and where it's lost", "isAns" : -1 },						
								],
					"res": 1,
					"RightAnswer": "I may need to purchase additional coverage for certain valuables (i.e., high-value items)",
					"explanationHead" : "You may need to purchase additional coverage for certain valuables.",
					"explanation" : "To learn more about getting a \"Floater\" or \"Endorsement\" for high-value tap \"Tell Me More\" button below. Otherwise, you are ready to go on to the next question.",

					"expForWrongHead" :"You may need to purchase additional coverage for certain valuables. High-value items require what's known as a \"Floater,\" or \"Endorsement.\" ",
					"expForWrong" :"To learn more about this type of coverage, \"Tell Me More\" button below.",

					"AnsDescHead" :"Know your limits... and how to cover valuable possessions",
					"AnsDesc" :  "Standard homeowners insurance policies cover your personal possessions. However, these policies almost always havea dollar limit for theft of certain high-value items such as jewelry, watches, furs, etc. <br><br>If you own any valuable, expensive or difficult to replace items there's a way to cover them by electing to purchase a \"Floater\" (sometimes called an \"Endorsement\"). With Floaters, you get precisely the coverage you need, with no deductible. Furthermore, the type of coverage provided is broader and the dollar limits for theft are higher. Floaters cover losses of any type-even if you drop your wedding band down the drain, or leave your expensive watch behind in a hotel room. <br><br>Some conditions usually apply: Before purchasing a Floater, all items covered must be professionally appraised or you must have a recent bill of sale. Also, your premiums can be affected by where you store valuables (keeping precious jewelry in a safe deposit box may lower the cost of insurance). Your Insurance Professional can tell you more about which items require Floaters, and give you other tips on adding coverage for valuables to your policy.",
				}

	},
	{
		
		"Cat" : "3",
		"qus" : {
					"index": "1",
					"text" : "If a guest slips and breaks their leg on my front walk, then sues me, I'm covered no matter what the cost.",
					"answers" : [
									{ "text": "True ", "isAns" : -1 },		
									{ "text": "False", "isAns" : 1 },		
								],
					"res": 1,
					"RightAnswer": "False",
					"explanationHead" : "The amount of personal liability coverage you need depends on several factors, including your personal net worth.",
					"explanation" : "For an explanation of what's covered by the liability portion of your homeowners policy, tap the \"Tell Me More\" button below. Otherwise, let's move ahead to the next question.",

					"expForWrongHead" :"Your personal liability for property damage or bodily injury to others can vary with the number and type of risk factors and your financial status.",
					"expForWrong" :"Tap the \"Tell Me More\" button below for an explanation of what's covered by the liability portion of your homeowners policy.",

					"AnsDescHead" :"Your home, your responsibility: Understand your risk factors",
					"AnsDesc" :  "Standard homeowners policies include liability insurance, which covers your household against lawsuits for bodily injury or property damage caused by you, your family members, or even your pets, as well as injuries someone accidentally incurs on your property. The coverage you need depends on what you have to lose: persons with more financial assets can require more coverage against legal costs and court awards. An Insurance Professional can help you determine the amount of coverage that worksbest for your situation.",
				}

	},
	{
		
		"Cat" : "3",
		"qus" : {
					"index": "2",
					"text" : "If a visitor is injured while in my home, they must first sue me in order to be compensated for medical treatment.",
					"answers" : [
									{ "text": "A) No, homeowners policies provide no-fault medical coverage up to pay directly for medical expenses", "isAns" : 1 },		
									{ "text": "B) Yes, and even if the injury is determined to be my fault, my liability insurance will pay any court-ordered settlement in full", "isAns" : -1 },	
									{ "text": "C) Yes, and if the injury is determined to be my fault, I must pay the entire amount myself; liability insurance only covers accidents where no-one is at fault", "isAns" : -1 },						
								],
					"res": 1,
					"RightAnswer": "No, homeowners policies provide no-fault medical coverage up to pay directly for medical expenses",
					"explanationHead" : "Homeowners policies include no-fault medical coverage for injuries that occur in your home.",
					"explanation" : "You're ready to move on to the next question. For more information about how medical expenses are covered, tap the \"Tell Me More\" button below.",

					"expForWrongHead" :"No-fault medical coverage will pay to treat injuries to non-household members that occur in your home, up to the limits of the policy. ",
					"expForWrong" :"Tap the \"Tell Me More\" button below for more information about how medical expenses are covered.",

					"AnsDescHead" :"Make sure you have enough no-fault medical coverage",
					"AnsDesc" :  "Let's say a delivery person slips on an icy porch step or your cat scratches a neighbor's kid. These things happen all the time, and thanks to no-fault medical payments coverage, the injured party can submit his or her medical bills directly to your insurer. The amounts of coverage vary, generally from $1,000 to $5,000; you may want to consider the maximum amount of coverage. This way someone injured on your property would not have to sue you to be compensated for their medical expenses.",
				}

	},
	{
		
		"Cat" : "3",
		"qus" : {
					"index": "3",
					"text" : "Yes or no: I can purchase additional insurance in case court awards exceed the maximum level of liability coverage in my homeowners policy.",
					"answers" : [
									{ "text": "A) Yes, there is a type of insurance that offers expanded coverage-and for a broader range of liability types ", "isAns" : 1 },		
									{ "text": "B) Yes, I can purchase expanded coverage, but only to cover plaintiffs' bodily injuries", "isAns" : -1 },	
									{ "text": "C) No, the party suing me must accept whatever my insurer is willing to pay", "isAns" : -1 },
									{ "text": "D) No, life is unfair", "isAns" : -1 },						
								],
					"res": 1,
					"RightAnswer": "Yes, there is a type of insurance that offers expanded coverage-and for a broader range of liability types",
					"explanationHead" : "Additional insurance-an \"Umbrella\" policy-is available to pay legal settlements in excess of what's covered by your homeowners policy.",
					"explanation" : "Tap the \"Tell Me More\" button below for information about this type of policy.",

					"expForWrongHead" :"Additional insurance-an \"Umbrella\" policy-is available to pay legal settlements in excess of what's covered by your homeowners policy, while covering you for broader types of liability.",
					"expForWrong" :"Tap the \"Tell Me More\" button below to learn more about this type of policy.",

					"AnsDescHead" :"Consider Umbrella coverage for a rainy day...",
					"AnsDesc" :  "The more you've got, the more you've got to lose. In our litigious society, personal liability coverage, whether through standard homeowners policies or through your auto insurance, may not offer adequate protection against the unknown.\"Umbrella\" coverage provides an extra layer of liability protection. The coverage can go up to $10 million, and covers broad types of liability, including libel and slander. <br><br>Because Umbrella coverage is supplemental, it kicks in when you reach the limit on the underlying personal liability coverage in your other insurance policies. To get Umbrella coverage, most insurance companies require that you obtain a certain level of underlying coverage from your auto and standard homeowners policies. But once you've satisfied that requirement, Umbrella coverage is a highly cost-effective way to protect yourself, your family and your hard-earned assets. Talk to your Insurance Professional to develop the best strategy for dealing with potential liability issues.",
				}

	},
	{
		
		"Cat" : "3",
		"qus" : {
					"index": "4",
					"text" : "If I have a swimming pool, my insurance covers liability in the event of injury to a non-household member.",
					"answers" : [
									{ "text": "True ", "isAns" : 1 },		
									{ "text": "False", "isAns" : -1 },							
								],
					"res": 1,
					"RightAnswer": "True",
					"explanationHead" : "Standard homeowners policies cover individual liability, but if you have a pool, consider additional coverage for increased risk.",
					"explanation" : "Tap the \"Tell Me More\" button below for information about increased liability risks.",

					"expForWrongHead" :"But even if you're insured against liability by a standard homeowners policy, you should consider additional coverage for swimming pools and other risk factors.",
					"expForWrong" :"Tap the \"Tell Me More\" button below for information about increased liability risks.",

					"AnsDescHead" :"Attractive nuisances: Tips on covering pools, tree houses, etc ",
					"AnsDesc" :  "There's a reason features like pools are considered \"attractive nuisances\": they may be great during the dog days of summer, but they definitely increase your liability risk. As a pool owner-or if your home features other attractive nuisances, such as such as a trampoline, jungle-gym or tree house-you may want to consider increasing the level of liability coverage in your homeowners policy. You can also talk to your Insurance Professional about purchasing an \"Umbrella\" liability policy (see Question 3), which will give you a lot more protection for a relatively modest bump in cost.",
				}

	},
	{
		
		"Cat" : "3",
		"qus" : {
					"index": "5",
					"text" : "What happens if my dog bites the mailman? Will my homeowners policy cover medical treatment and/or legal expenses?",
					"answers" : [
									{ "text": "A) Yes, always. Fido's like a member of the family! ", "isAns" : -1 },		
									{ "text": "B) No, never ", "isAns" : -1 },	
									{ "text": "C) Sometimes, but conditions and restrictions may apply-especially if there are repeated incidences", "isAns" : 1 },						
								],
					"res": 1,
					"RightAnswer": "Sometimes, but conditions and restrictions may apply-especially if there are repeated incidences",
					"explanationHead" : "Most policies cover injuries caused by dogs and household pets, but conditions and restrictions may apply.",
					"explanation" : "Tap the \"Tell Me More\" button below for an explanation of liability for pet owners.",

					"expForWrongHead" :"Most policies cover injuries caused by dogs and household pets, but conditions and restrictions may apply.",
					"expForWrong" :"Tap the \"Tell Me More\" button below for an explanation of liability for pet owners.",

					"AnsDescHead" :"Don't let your Best Friend put the bite on your bank account ",
					"AnsDesc" :  "Not all acts of dog are covered... and you are legally liable if your canine friend causes harm to someone. Most insurance companies will insure homeowners with dogs, though the breed, training and housing of the pet may be a factor in assessing the risk. Once a dog has bitten someone, however, you may be on the hook for a higher premium-and some insurers may even exclude the dog from your coverage. Other things to consider for repeat canine offenders: some insurers will cover a pet only upon enrollment in or completion of an approved pet behavior modification training course; other insurers may require dog owners to sign liability waivers.",
				}

	},
	{
		
		"Cat" : "3",
		"qus" : {
					"index": "6",
					"text" : "In-home help-child- or elder-caregivers, household staff, or employees of a home-based business-are automatically covered by my homeowners policy.",
					"answers" : [
									{ "text": "True ", "isAns" : -1 },		
									{ "text": "False", "isAns" : 1 },							
								],
					"res": 1,
					"RightAnswer": "False",
					"explanationHead" : "If you hire household help, you will need to get the appropriate insurance coverage, depending on the nature of the employee's position.",
					"explanation" : "To learn more about covering in-home or household employees, tap the \"Tell Me More\" button below.",

					"expForWrongHead" :"If you hire household help, you will need to get the appropriate insurance coverage, depending on the nature of the employee's position.",
					"expForWrong" :"To learn more about covering in-home or household employees, tap the \"Tell Me More\" button below.",

					"AnsDescHead" :"What to know about hiring in-home employees",
					"AnsDesc" :  "Household staff and in-home employees generally fall into one of three categories: <ul><li>  For part-time help, like babysitters, or the kid who mows your lawn, you need to be sure your homeowners policy has adequate liability and no-fault medical coverage (see Quiz 3: Liability).<li>	If you hire <b>employees on a permanent, regularly scheduled basis</b>, you must purchase a workers compensation policy. This covers medical care and physical rehabilitation for an employee who is injured on the job, as well as lost wages if the employee is physically unable to work. <br><br>If you <b>contract an outside firm</b>, always ask for copies of their insurance verification (\"certificates of insurance.\"), as documentation that the firm provides workers compensation insurance for its employees. Also, when possible, only work with firms that offer health and disability insurance to their employees, as this reduces your liability if a worker injured on your property needs medical.",
				}

	},


	]
	return questions;
}