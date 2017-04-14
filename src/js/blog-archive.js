var vm = new Vue(
		{
			el : "#blog-content",
			data : {
				blogs : [
						{
							id : 7,
							title : "What Products to Avoid for Importing",
							description : "Knowing what products to avoid can save you anywhere from $1,000 to $100,000. According to our years’ of experience, you need to be very careful about the following products.",
							cover_url : "",
							create_date : "2017-3-25",
							pageView : 368,
						},
						{
							id : 6,
							title : "What Products to Buy for Importing",
							description : "Knowing what products to avoid, the next is to know what products are recommended to buy.",
							cover_url : "",
							create_date : "2016-12-10",
							pageView : 512,
						},
						{
							id : 5,
							title : "What Should Do Before Asking for a Quote",
							description : "Does it matter if i directly ask for a quote after finding a supplier? Before answering this question, I’d like to introduce what is FOB and EXW, which are two frequently used incoterms (International Commercial Terms) in China.",
							cover_url : "",
							create_date : "2016-9-18",
							pageView : 778,
						},
						{
							id : 4,
							title : "How to Choose among Sea Shipment, Courier & Air Freight",
							description : "Even for experienced importers, it's sometimes difficult to decide whether to send their products by sea, air freight or courier. This article goes into the differences among them, looks at how to choose the most suitable channel and some strategies to reduce costs.",
							cover_url : "",
							create_date : "2016-5-6",
							pageView : 633,
						},
						{
							id : 3,
							title : "What Should Know Before Placing An Order",
							description : "Once you’ve found an ideal supplier, don’t rush to place an order. There is a list of things that you should know about before giving money to them.",
							cover_url : "",
							create_date : "2016-1-22",
							pageView : 759,
						},
						{
							id : 2,
							title : "How Much You Can Benefit From the World's Largest TradeshowWith more than 4 million square feet of floor space, the Canton Fair is definitely the largest tradeshow in the world.Besides the scale, do you know why it attracts millions of entrepreneurs every year?",
							description : "",
							cover_url : "",
							create_date : "2015-9-15",
							pageView : 1210,
						},
						{
							id : 1,
							title : "Internet Censorship IN China",
							description : "In China, internet access is strictly controlled by government. Some sites such as Google, Facebook, Twitter, Instagram, YouTube, etc. are not accessible. If we want to use them, we need to “climb the Great Fire Wall” by using Virtual Private Network (VPN).",
							cover_url : "",
							create_date : "2015-5-12",
							pageView : 899,
						} ]
			},
			methods : {
				getYear : function(date) {
					var date = new Date(date);
					return date.getFullYear();
				},
				getMonth : function(date) {
					var date = new Date(date);
					return date.getMonth() + 1;
				},
				getDay : function(date) {
					var date = new Date(date);
					return date.getDate();
				}
			}
		})