
  
  function esPalindromo(str){
    str = str.toLowerCase();
    str = str.replaceAll(" ", " ");
   
    if (reves(str)==str) 
      return true;
    
    
        
    
    return false;

  }