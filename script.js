function faireDisparaitre() {
    /* votre code pour le faux loading ici!*/
    var loading = document.getElementById("fauxloading");
    loading.style.display = "none";
}


//NE RIEN MODIFIER EN DESSOUS DE CETTE LIGNE!!
function attendreAvantDeDisparaitre() {
          setTimeout(function () {
            faireDisparaitre();

          },
          JSON.parse(data)[0].showFakeLoading == 0? 0: 5000);

}
attendreAvantDeDisparaitre();


/* montrer le toast quand on load la page */
window.onload = (event) => {
  var toastLiveExample = document.getElementById('liveToast')
  var toast = new bootstrap.Toast(toastLiveExample)
  
  toast.show()
}