function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }



function hitungLuasDanKelilingPersegiPanjang() {
  var panjang = document.getElementById("panjang").value;
  var lebar = document.getElementById("lebar").value;

  var luas = panjang * lebar;
  var keliling = 2 * (parseInt(panjang) + parseInt(lebar));

  document.getElementById("luasPersegi").value = luas;
  document.getElementById("kelilingPersegi").value = keliling;

}

function hitungLuasDanKeliling() {
  var alas = document.getElementById("alas").value;
  var tinggi = document.getElementById("tinggi").value;

  var sisi1 = document.getElementById("sisi1").value;
  var sisi2 = document.getElementById("sisi2").value;
  var sisi3 = document.getElementById("sisi3").value;

  var luas = alas * tinggi;
  var keliling =  (parseInt(sisi1) + parseInt(sisi2) + parseInt(sisi3));

  document.getElementById("luasSegitiga").value = luas;
  document.getElementById("kelilingSegitiga").value = keliling;


}

function hitungLingkaran() {
   
    var jariJari = document.getElementById("jariJari").value;

    var luas = Math.PI * jariJari * jariJari;
    var keliling = 2 * Math.PI * jariJari;

    document.getElementById("luasLingkaran").value = + luas.toFixed(2) + " cm2 ";
     document.getElementById("kelilingLingkaran").value = + keliling.toFixed(2) + " cm ";

   
}