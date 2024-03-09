let calc = "";

myfunction = (char) => {

    if(calc.charAt(calc.length-1)=="+"||calc.charAt(calc.length-1)=="-"||calc.charAt(calc.length-1)=="*"||calc.charAt(calc.length-1)=="/"||calc.charAt(calc.length-1)==".")
    {
      if(char=="+"||char=="-"||char=="*"||char=="/"||char==".")
      {
        calc = calc.slice(0, calc.length - 1);
       
      }
    }
    
  calc = calc + char;
  
  document.querySelector(".display").innerHTML = calc;
  result = () => {
    calc = eval(calc).toString();

    document.querySelector(".display").innerHTML = calc;
  };
  del = () => {
    calc = calc.slice(0, calc.length - 1);
    document.querySelector(".display").innerHTML = calc;
  };
  reset = () => {
    calc = "";
    document.querySelector(".display").innerHTML = calc;
  };
};
