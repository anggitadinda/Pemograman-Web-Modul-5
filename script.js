// untuk membersihkan kalkulator
function clearDisplay() {
    document.getElementById('display').value = '';
  }
  //untuk menambahkan angka atau operator ke layar kalkulator
  function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  // untuk menghitung hasil matematika di layarkalkulator
  function calculate() {
    var expression = document.getElementById('display').value;
    var result = eval(expression); 
    document.getElementById('display').value = result;
  }  