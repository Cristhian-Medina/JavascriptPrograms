for(var n = 2; n < 100; n++)
{
  if(n % 2 == 0 && n > 2 || n % 3 == 0 && n > 3 || n % 5 == 0 && n > 5 || n % 7 == 0 && n > 7)
  {}
  else
  {
    document.write(n + "<br />");
  }
}
