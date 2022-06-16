  let One = '';
  let Sig = '';
  let nuns;
  let n1;
  let n2;

  let confirm = true;

    let sig = document.getElementsByClassName('sig') 
    let Num = document.getElementsByClassName('num') 

    let ShowSig = document.getElementsByClassName('showSig') 
    let ShowNum = document.getElementsByClassName('showNum') 

    for(let n=0; n < Num.length; n++){
      Num[n].addEventListener('click', ()=>{
        nuns = Num[n].innerText
        One += nuns

        if(confirm == true){
          n1 = One;
        }else{
          n2 = One;
        }
       

        ShowNum[0].innerText = One



        
        console.log('number 1 =' + n1) 
        console.log( 'number 2 =' + n2)
      })
    }

    for(let s=0; s < sig.length; s++){

      let sub;
      sig[s].addEventListener('click', ()=>{
        confirm = false;

        let sg = sig[s].innerText
        Sig = sg;

        ShowSig[0].innerText = Sig

        console.log('number 1 =' + n1) 
        console.log( 'number 2 =' + n2)
        // n1 = One;

        if(One.substring(0) == '-'){
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
      confirm = true;
        n2 = One;

        // if(n2.substring(0) == '-' + n2){
        //     console.log('aqui')
        // } 

        // console.log('-' + n2)
        // console.log(n2.substring(0))
        
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);

        console.log('number 1 = ' + n1) 
        console.log( 'number 2 = ' + n2)

        switch(Sig){

          case '/':
            One = n1 / n2;
            ShowNum[0].innerText = One;
            console.log('-' + n2)
            break;

          case '*':
            One = n1 * n2;
            ShowNum[0].innerText = One;
            break;

          case '-':
            One = n1 - n2;
            ShowNum[0].innerText = One;
            break;

          case '+':
            One = n1 + n2;
            ShowNum[0].innerText = One;
            break;
        }

       
        // if(One.substring(0) == '-'){

        //   console.log('menos aqui')
        //   // One = One
        //   // ShowNum[0].innerText = One          
        // }else{
        // //  One = '';
        // //  ShowNum[0].innerText = One 
        // }

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
