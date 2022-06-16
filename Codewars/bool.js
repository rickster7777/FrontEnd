function myFunction() {
    //document.getElementById("demo").innerHTML = "para";
    let a = 16;
    n = Math.sqrt(a)

    let output = (n - Math.floor(n)) !== 0;
    console.log(output);

    if (output) {
      console.log(-1);
      return -1;
    }
    else {

      console.log(n);
      return n;
    }
    //if ( output > 1)
    document.getElementById("demo").innerHTML = Math.sqrt(a);

  }