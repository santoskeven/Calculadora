  let One = '';
  let Sig = '';
  let nuns;
  let n1;
  let n2;

    let sig = document.getElementsByClassName('sig') 
    let Num = document.getElementsByClassName('num') 

    let ShowSig = document.getElementsByClassName('showSig') 
    let ShowNum = document.getElementsByClassName('showNum') 

    for(let n=0; n < Num.length; n++){
      Num[n].addEventListener('click', ()=>{
        nuns = Num[n].innerText
        One += nuns

        ShowNum[0].innerText = One
      })
    }

    for(let s=0; s < sig.length; s++){

      let sub;
      sig[s].addEventListener('click', ()=>{
        let sg = sig[s].innerText
        Sig = sg;

        ShowSig[0].innerText = Sig

        n1 = One;

        if(One.substring(0) == '-'){
          One = One
          ShowNum[0].innerText = One          
        }else{
         One = '';
         ShowNum[0].innerText = One 
        }

      })
    }

    let D = document.getElementsByClassName('div') 

    D[0].addEventListener('click', ()=>{
     One = n1 / 100;
     ShowNum[0].innerText = One;
    })

    let r = document.getElementsByClassName('result') 
  
    r[0].addEventListener('click', ()=>{
        n2 = One;
        
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);

        One = n1 + Sig + n2;
        One = eval(One);

        console.log(One)

        One = String(One);
        Sig = ''; 

        ShowNum[0].innerText = One
        ShowSig[0].innerText = Sig

    })

    let Ac = document.getElementsByClassName('ac') 
    let del = document.getElementsByClassName('Del') 

    Ac[0].addEventListener('click',()=>{
      One = '';
      Sig = '';

      ShowSig[0].innerText = One;
      ShowNum[0].innerText = Sig; 
    })

    del[0].addEventListener('click', ()=>{
      One = One.substring(0, One.length - 1)
      ShowNum[0].innerText = One
    })
