function getBibleData() {
  return fetch('https://bible-api.com/BOOK+CHAPTER:VERSE')
     .then(response => response.json())
     .then(data => data)
}
 getBibleData().then (data => {
  console.log(data);
});


