let mock = [
    {
        "name": "Alabama",
        "abbreviation": "AL",
        "capital": "Montgomery",
        "date": "December 14, 1819",
        "nickname": "The Yellowhammer State",
        "flower": "Camellia",
        "additional_data": {}
    },
    {
        "name": "Alaska",
        "abbreviation": "AK",
        "capital": "Juneau",
        "date": "January 3, 1959",
        "nickname": "The Last Frontier",
        "flower": "Forget-me-not",
        "additional_data": {}
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ",
        "capital": "Phoenix",
        "date": "February 14, 1912",
        "nickname": "The Grand Canyon State",
        "flower": "Saguaro cactus blossom",
        "additional_data": {}
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR",
        "capital": "Little Rock",
        "date": "June 15, 1836",
        "nickname": "The Natural State",
        "flower": "Apple blossom",
        "additional_data": {}
    },
    {
        "name": "California",
        "abbreviation": "CA",
        "capital": "Sacramento",
        "date": "September 9, 1850",
        "nickname": "The Golden State",
        "flower": "California poppy",
        "additional_data": {}
    },
    {
        "name": "Colorado",
        "abbreviation": "CO",
        "capital": "Denver",
        "date": "August 1, 1876",
        "nickname": "The Centennial State",
        "flower": "Rocky Mountain columbine",
        "additional_data": {}
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT",
        "capital": "Hartford",
        "date": "January 9, 1788",
        "nickname": "The Constitution State",
        "flower": "Mountain laurel",
        "additional_data": {}
    },
    {
        "name": "Delaware",
        "abbreviation": "DE",
        "capital": "Dover",
        "date": "December 7, 1787",
        "nickname": "The First State",
        "flower": "Peach blossom",
        "additional_data": {}
    },
    {
        "name": "Florida",
        "abbreviation": "FL",
        "capital": "Tallahassee",
        "date": "March 3, 1845",
        "nickname": "The Sunshine State",
        "flower": "Orange blossom",
        "additional_data": {}
    },
    {
        "name": "Georgia",
        "abbreviation": "GA",
        "capital": "Atlanta",
        "date": "January 2, 1788",
        "nickname": "The Peach State",
        "flower": "Cherokee rose",
        "additional_data": {}
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI",
        "capital": "Honalulu",
        "date": "August 21, 1959",
        "nickname": "The Aloha State",
        "flower": "Hawaiian hibiscus",
        "additional_data": {}
    },
    {
        "name": "Idaho",
        "abbreviation": "ID",
        "capital": "Boise",
        "date": "July 3, 1890",
        "nickname": "The Gem State",
        "flower": "Syringa",
        "additional_data": {}
    },
    {
        "name": "Illinois",
        "abbreviation": "IL",
        "capital": "Springfield",
        "date": "December 3, 1818",
        "nickname": "The Prairie State",
        "flower": "Violet",
        "additional_data": {}
    },
    {
        "name": "Indiana",
        "abbreviation": "IN",
        "capital": "Indianapolis",
        "date": "December 11, 1816",
        "nickname": "The Hoosier State",
        "flower": "Peony",
        "additional_data": {}
    },
    {
        "name": "Iowa",
        "abbreviation": "IA",
        "capital": "Des Moines",
        "date": "December 28, 1846",
        "nickname": "The Hawkeye State",
        "flower": "Wild rose",
        "additional_data": {}
    },
    {
        "name": "Kansas",
        "abbreviation": "KS",
        "capital": "Topeka",
        "date": "January 29, 1861",
        "nickname": "The Sunflower State",
        "flower": "Sunflower",
        "additional_data": {}
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY",
        "capital": "Frankfort",
        "date": "June 1, 1792",
        "nickname": "The Bluegrass State",
        "flower": "Goldenrod",
        "additional_data": {}
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA",
        "capital": "Baton Rouge",
        "date": "April 30, 1812",
        "nickname": "The Pelican State",
        "flower": "Magnolia",
        "additional_data": {}
    },
    {
        "name": "Maine",
        "abbreviation": "ME",
        "capital": "Augusta",
        "date": "March 15, 1820",
        "nickname": "The Pine Tree State",
        "flower": "White pine cone and tassel",
        "additional_data": {}
    },
    {
        "name": "Maryland",
        "abbreviation": "MD",
        "capital": "Annapolis",
        "date": "April 28, 1788",
        "nickname": "The Old Line State",
        "flower": "Black-eyed susan",
        "additional_data": {}
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA",
        "capital": "Boston",
        "date": "February 6, 1788",
        "nickname": "The Bay State",
        "flower": "Mayflower",
        "additional_data": {}
    },
    {
        "name": "Michigan",
        "abbreviation": "MI",
        "capital": "Lansing",
        "date": "January 26, 1837",
        "nickname": "Great Lakes State",
        "flower": "Apple blossom",
        "additional_data": {}
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN",
        "capital": "Saint Paul",
        "date": "May 11, 1858",
        "nickname": "The North Star State",
        "flower": "Pink and white lady's slipper",
        "additional_data": {}
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS",
        "capital": "Jackson",
        "date": "December 10, 1817",
        "nickname": "The Magnolia State",
        "flower": "Magnolia",
        "additional_data": {}
    },
    {
        "name": "Missouri",
        "abbreviation": "MO",
        "capital": "Jeffereson City",
        "date": "August 10, 1821",
        "nickname": "The Show-Me State",
        "flower": "Hawthorn",
        "additional_data": {}
    },
    {
        "name": "Montana",
        "abbreviation": "MT",
        "capital": "Helena",
        "date": "November 8, 1889",
        "nickname": "The Treasure State",
        "flower": "Bitterroot",
        "additional_data": {}
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE",
        "capital": "Lincoln",
        "date": "March 1, 1867",
        "nickname": "The Cornhusker State",
        "flower": "Goldenrod",
        "additional_data": {}
    },
    {
        "name": "Nevada",
        "abbreviation": "NV",
        "capital": "Carson City",
        "date": "October 31, 1864",
        "nickname": "The Silver State",
        "flower": "Sagebrush",
        "additional_data": {}
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH",
        "capital": "Concord",
        "date": "June 21, 1788",
        "nickname": "The Granite State",
        "flower": "Purple lilac",
        "additional_data": {}

    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ",
        "capital": "Trenton",
        "date": "December 18, 1787",
        "nickname": "The Garden State",
        "flower": "Violet",
        "additional_data": {}
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM",
        "capital": "Santa Fe",
        "date": "January 6, 1912",
        "nickname": "Land of Enchantment",
        "flower": "Yucca flower",
        "additional_data": {}
    },
    {
        "name": "New York",
        "abbreviation": "NY",
        "capital": "Albany",
        "date": "July 26, 1788",
        "nickname": "The Empire State",
        "flower": "Rose",
        "additional_data": {}
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC",
        "capital": "Raleigh",
        "date": "November 21, 1789",
        "nickname": "The Tar Heel State",
        "flower": "Carolina lily",
        "additional_data": {}
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND",
        "capital": "Bismarck",
        "date": "November 2, 1889",
        "nickname": "The Peace Garden State",
        "flower": "Wild Prarie Rose",
        "additional_data": {}
    },
    {
        "name": "Ohio",
        "abbreviation": "OH",
        "capital": "Columbus",
        "date": "March 1, 1803",
        "nickname": "The Buckeye State",
        "flower": "Scarlet carnation",
        "additional_data": {}
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK",
        "capital": "Oklahoma City",
        "date": "November 16, 1907",
        "nickname": "The Sooner State",
        "flower": "Oklahoma rose",
        "additional_data": {}
    },
    {
        "name": "Oregon",
        "abbreviation": "OR",
        "capital": "Salem",
        "date": "February 14, 1859",
        "nickname": "The Bever State",
        "flower": "Oregon grape",
        "additional_data": {}
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA",
        "capital": "Harrisburg",
        "date": "December 12, 1787",
        "nickname": "The Keystone State",
        "flower": "Mountain Laurel",
        "additional_data": {}
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI",
        "capital": "Providence",
        "date": "Rhode Island",
        "nickname": "The Ocean State",
        "flower": "Violet",
        "additional_data": {}
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC",
        "capital": "Columbia",
        "date": "May 23, 1788",
        "nickname": "The Palmetto State",
        "flower": "Yellow jessamine",
        "additional_data": {}
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD",
        "capital": "Pierre",
        "date": "November 2, 1889",
        "nickname": "Mount Rushmore State",
        "flower": "Pasque flower",
        "additional_data": {}
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN",
        "capital": "Nashville",
        "date": "June 1, 1796",
        "nickname": "The Volunteer State",
        "flower": "Iris",
        "additional_data": {}
    },
    {
        "name": "Texas",
        "abbreviation": "TX",
        "capital": "Dallas",
        "date": "December 29, 1845",
        "nickname": "The Line Star State",
        "flower": "Bluebonnet",
        "additional_data": {}
    },
    {
        "name": "Utah",
        "abbreviation": "UT",
        "capital": "Salt Lake City",
        "date": "January 4, 1896",
        "nickname": "The Beehive State",
        "flower": "Sego lily",
        "additional_data": {}
    },
    {
        "name": "Vermont",
        "abbreviation": "VT",
        "capital": "Montpelier",
        "date": "March 4, 1791",
        "nickname": "The Green Mountain State",
        "flower": "Red clower",
        "additional_data": {}
    },
    {
        "name": "Virginia",
        "abbreviation": "VA",
        "capital": "Richmond",
        "date": "June 25, 1788",
        "nickname": "Old Dominion",
        "flower": "American Dogwood",
        "additional_data": {}
    },
    {
        "name": "Washington",
        "abbreviation": "WA",
        "capital": "Olympia",
        "date": "November 11, 1889",
        "nickname": "The Evergreen State",
        "flower": "Coast Rhododendron",
        "additional_data": {}
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV",
        "capital": "Charleston",
        "date": "June 20, 1863",
        "nickname": "The Mountain State",
        "flower": "Rhododendron",
        "additional_data": {}
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI",
        "capital": "Madison",
        "date": "May 29, 1848",
        "nickname": "The Badger State",
        "flower": "Wood violet",
        "additional_data": {}
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY",
        "capital": "Cheyanne",
        "date": "July 10, 1890",
        "nickname": "The Equality State",
        "flower": "Indian paintbrush",
        "additional_data": {}
    }
]
export default mock;