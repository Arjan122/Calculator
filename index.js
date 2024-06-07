function a(val){
    document.getElementById('text1').value += val;
}

function equal(){
    var b = document.getElementById('text1').value;

    var ans = eval(b);

    document.getElementById('text1').value = ans;
}

function del(){
    document.getElementById('text1').value = '';
}