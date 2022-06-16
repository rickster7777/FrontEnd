function myFunction(){

    let dna = "GCAT";
    rna = dna.replaceAll("T","U");
    console.log(rna)
}
//if dna UTTT the to replace all T with U replaceAll needs to be used.


//brave pe replaceAll nahi chal raha tha used the below code //g use kar ke
//got it from this link.

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let t = "T"
    rna = dna.replace(/T/g,"U");
    return rna;
  }

//Other Solutions
function DNAtoRNA(dna) {
    return dna.split("T").join("U");
  }
  
//cleverest

DNAtoRNA = ($) => [...$].map(el => el === 'T' ? el='U': el).join`` 


if (dna.includes('T')) {
    //return dna.replace(/T/g, 'U');
  }
'''\
On getting 120 kyus:

You can start voting on kata rank once youve completed a beta kata and contribute to the decision 
Once you create a kata, you are also able to set an estimated ranking to begin the discussion.
'''