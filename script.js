function calcweight() {
  console.log(mweight);

  
  // // w = w.toFixed(2);
  // console.log(w);
  
}
function showtext(){
  document.getElementById('welcomeDiv').style.display = "block";
}
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");
var modal7 = document.getElementById("myModal7");
var clicked_id;
function getid(clicked_id) {
  var weight = document.getElementById("vals").value;

  var mweight = weight * 0.38;
  var vweight = weight * 0.91;
  var eweight = weight * 1;
  var rweight = weight * 0.38;
  var jweight = weight * 2.34;
  var sweight = weight * 1.06;
  var uweight = weight * 0.92;
  var nweight = weight * 1.19;
  
  console.log(clicked_id);
  switch (clicked_id) {
    case 'mercury':
      modal.style.display = "block";

      document.getElementById("res").innerHTML =
      "Your original weight was "+weight+ " since you are 0.38 times lighter on "+ clicked_id+ ", so you will weigh " + mweight+' kg';
      break;
    case 'venus':
      modal1.style.display = "block";
      document.getElementById("res1").innerHTML =
      "Your original weight was "+weight+ " since you are 0.91 times lighter on "+ clicked_id+ ", so you will weigh " + vweight+' kg';
      break;
    case 'earth':
      modal2.style.display = "block";
      document.getElementById("res2").innerHTML =
      "Your original weight was "+weight+ " since you are equal to that on "+ clicked_id+ ", so you will weigh " + eweight+' kg';
      break;
    case 'mars':
      modal3.style.display = "block";
      document.getElementById("res3").innerHTML =
      "Your original weight was "+weight+ " since you are 0.38 times lighter on "+ clicked_id+ ", so you will weigh " + rweight+' kg';
      break;
    case 'jupiter':
      modal4.style.display = "block";
      document.getElementById("res4").innerHTML =
      "Your original weight was "+weight+ " since you are 2.34 times heavier on "+ clicked_id+ ", so you will weigh " + jweight +' kg';
      break;
    case 'saturn':
      modal5.style.display = "block";
      document.getElementById("res5").innerHTML =
      "Your original weight was "+weight+ " since you are 1.06 times heavier on "+ clicked_id+ ", so you will weigh " + sweight +' kg';
      break;
    case 'uranus':
      modal6.style.display = "block";
      document.getElementById("res6").innerHTML =
      "Your original weight was "+weight+ " since you are 0.92 times heavier on "+ clicked_id+ ", so you will weigh " + uweight+' kg';
      break;
    case 'neptune':
      modal7.style.display = "block";
      document.getElementById("res7").innerHTML =
      "Your original weight was "+weight+ " since you are 1.19 times heavier on "+ clicked_id+ ", so you will weigh " + nweight+' kg';
      break;
    default: document.write("rvjhbdv");


  }
  var a;
  if (clicked_id == "mercury") {
    a = 0;
  }
  else if (clicked_id == "venus") {
    a = 1;
  }
  else if (clicked_id == "earth") {
    a = 2;
  }
  else if (clicked_id == "mars") {
    a = 3;
  }
  else if (clicked_id == "jupiter") {
    a = 4;
  }
  else if (clicked_id == "saturn") {
    a = 5;
  }
  else if (clicked_id == "uranus") {
    a = 6;
  }
  else if (clicked_id == "neptune") {
    a = 7;
  }


  var span = document.getElementsByClassName("close")[a];
  span.onclick = function () {
    modal.style.display = "none";
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
    modal4.style.display = "none";
    modal5.style.display = "none";
    modal6.style.display = "none";
    modal7.style.display = "none";
  }
  if ( clicked_id  == 'mercury') {
    document.getElementsByClassName("res").innerHTML = " " + mweight;
  } else if (clicked_id == 'venus') {
    document.getElementsByClassName("res").innerHTML = " " + vweight;
  } else if (clicked_id == 'earth') {
    document.getElementsByClassName("res").innerHTML = " " + eweight;
  } else if (clicked_id == 'mars') {
    document.getElementsByClassName("res").innerHTML = " " + rweight;
  } else if (clicked_id == 'jupiter') {
    document.getElementsByClassName("res").innerHTML = " " + jweight;
  } else if (clicked_id == 'saturn') {
    document.getElementsByClassName("res").innerHTML = " " + sweight;
  } else if (clicked_id == 'uranus') {
    document.getElementsByClassName("res").innerHTML = " " + uweight;
  } else if (clicked_id == 'neptune') {
    document.getElementsByClassName("res").innerHTML = " " + nweight;
  }

}
