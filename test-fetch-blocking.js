function async getBibleData() {
    let response = await fetch('https://bible-api.com/BOOK+CHAPTER:VERSE');
    let data = response.json()
    return data;
  }

