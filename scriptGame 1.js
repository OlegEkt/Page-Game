
      
setTimeout(index, 500);
    
    function index(){  
      var level = chooseLvl();
        switch(level){
        case 1: alert(lvl1());
        break;
        case 2: alert(lvl2());
        break;
        case 3: alert(lvl3());
        break;
      }
    
    }
  
    
    function chooseLvl(){                 
     var i;
      do {
      var strIn = prompt("Вам необходимо выбрать и написать в строке заглавными буквами уровень сложности игры. \n \
       \n1.EASY\n2.NORMAL\n3.HARD");
       if (strIn == "EASY")
        return 1;        
       if (strIn == "NORMAL")
        return 2;       
       if (strIn == "HARD")
        return 3;        
       i++;
      }while(strIn !== "EASY" && strIn != "NORMAL" && strIn != "HARD");
    }    
  


    function lvl1(){                    
     var arr = [];
     arr[0] = +prompt("Введите 1 число:");
     arr[1] = +prompt("Введите 2 число:");
     arr[2] = +prompt("Введите 3 число:");
     arr[3] = +prompt("Введите 4 число:");
     arr[4] = +prompt("Введите 5 число:");
     var sumArr = 0;
       for(var i = 0; i < arr.length; i++){
        sumArr += arr[i];
        var number = sumArr / arr.length;
    }
       return +number.toFixed(2);   
    }  
    
    function lvl2(){                       
     var begin = 1;
     var end = 100;
     var num1 = (Math.ceil(Math.random()* (end - begin) + begin));
     var num2 = (Math.ceil(Math.random()* (end - begin) + begin));
     var Summ = num1 + num2;
     alert("Первое случайное число: " + num1 + "\nВторое случайное число: " + num2 + "\nПосчитайте сумму случайных чисел. \nЕсли готовы нажмите ОК.");
     var res = +prompt("Введите сумму случайных и чисел и нажмите ОК.");
       if (res == Summ)
        return true;
     return false;    
    } 

    function lvl3(){                       
     var str = prompt("Напишите строку.");
     var res = str.split("").filter(letter => !["e","u","i","o","a","у","е","ы","а","о","э","ё","я","и","ю"]
         .includes(letter.toLowerCase())).join("");
       return("Мы убрали все гласные буквы из строки. \n" + res);
    }
  
  