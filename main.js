var images=[
    "https://thumbs.dreamstime.com/b/cartoon-father-son-icon-over-white-background-colorful-design-vector-illustration-cartoon-father-son-icon-flat-design-169226123.jpg",
    "https://i.pinimg.com/736x/c1/a9/b2/c1a9b2512b29182b99fa3052c5f37e85.jpg",
    "https://www.pngfind.com/pngs/m/174-1747073_uncle-bob-cartoon-hd-png-download.png",
    "https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190505227/122760736-stock-vector-little-girl-avatar-character-vector-illustration-design.jpg?ver=6",
    "https://cdn1.iconfinder.com/data/icons/kids-cartoon/50/79-512.png",
  ];
  var names = [
    "Father", "Mother", "Uncle", "Sister","Me"
  ];
  var i=0;
  function update()
  {
  var number_family = 4;
    i++;
    if (i>number_family)
    {
      i=0;
    }
    var imag = images[i];
    var nam = names[i]
    document.getElementById("book").src= imag;
    document.getElementById("name").innerHTML= nam;
  }