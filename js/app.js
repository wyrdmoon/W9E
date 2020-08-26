var tweet = ["Red One", "Blue Two", "Green Three", "Yellow Four", "Teal Five", "Pink Six", "Purple Seven", "Orange Eight", "Copper Nine", "Silver Ten"];
var arrayLength = tweet.length;

var tweet = [ 
    {tweet: "Red One",
            username: "Joe",
            age: 17,
            created_at: "8-20-2020"},
 {tweet: "Blue Two",
  username: "Bill",
  age: 27,
  created_at: "9-20-2020"},

 {tweet: "Green Three",
          username: "Bob",
          age: 37,
          created_at: "2-20-2020"},

 {tweet: "Yellow Four",
          username: "Mary",
          age: 16,
          created_at: "1-20-2019"},

 {tweet: "Teal Five",
         username: "Sue",
         age: 41,
         created_at: "5-20-2020"},

 {tweet: "Pink Six",
          username: "Moe",
          age: 22,
          created_at: "6-20-2020"},

 {tweet: "Purple Seven",
           username: "Jill",
           age: 12,
           created_at: "8-21-2020"},
 
 {tweet: "Orange Eight",
         username: "Barbara",
         age: 47,
         created_at: "8-27-2020"},
 {tweet: "Copper Nine",
         username: "John",
         age: 57,
         created_at: "7-27-2020"},

 {tweet: "Silver Ten",
         username: "Larry",
         age: 18,
        created_at: "8-28-2020"},
];

for(var index = 0; index < tweet.length; index++) {
    console.log(tweet[index].tweet);
    console.log(tweet[index].username);
    console.log(tweet[index].created_at);
    console.log("------------------");
    
}
//W9E
function age_filter(user) {
    if(user.age >= 18) {
        return true;
} else if(user.age < 18) {
    return false;
    } else {
        console.log("error")
    }

}

var is_over_eighteen = tweet.filter(age_filter);
console.log(is_over_eighteen);
