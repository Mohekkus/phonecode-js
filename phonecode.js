var cCode = new Array()
var cFlag = new Array()

fetch("./countries.json")
.then((res) => {
    if (!res.ok) {
        throw new Error
            (`HTTP error! Status: ${res.status}`);
    }
    return res.json();
})
.then((data) => 
      splitData(data.data)
      )
.catch((error) => 
       console.error("Unable to fetch data:", error));

function splitData(data) {
    cCode = data.map(function(item) {
        return item['dialCode'].replace("+", "");
      });

    cFlag = data.map(function(item) {
        return item['isoCode']
    })
}

function setInput(input) {
    const reduced = cCode
    .map((item, index) => String(item).startsWith(input) ? index : -1)
    .filter(index => index !== -1);

    const final = reduced.map(index => cFlag[index])
    

    console.log(final);
}