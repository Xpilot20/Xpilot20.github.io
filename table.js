var list = {"อาทิตย์":["ไม่มี"],
            "จันทร์":["01418497 Seminar"],
            "อังคาร":["01418442 Web Technology","01418442 Web Technology Lab"],
            "พุธ":["01418341 IP","01418331 OS","01418321 SA","01418321 SA LAB"],
            "พฤหัส":["01418471 SW EN","01418471 SW EN LAB","01175117 Archery"],
            "ศุกร์":["01418341 IP","01418331 OS"],
            "เสาร์":["ไม่มี"]}

var listSub = {"01418497 Seminar":["หมู่ 5","บรรยาย","ชาคริต,ศิริกร","เวลา: (จ.)8:00-11:00"],

            "01418442 Web Technology":["หมู่ 1","บรรยาย","สุขุมาล,ศรชัย","เวลา: (อ.)8:00-10:00"],
            "01418442 Web Technology Lab":["หมู่ 11","ปฏิบัติ","สุขุมาล,ศรชัย","เวลา: (อ.)12:30-14:30"],

            "01418341 IP":["หมู่ 1","บรรยาย","นวลวรรณ","เวลา: (พ.)(ศ.)10:00-11:30"],

            "01418331 OS":["หมู่ 1","บรรยาย","ศิริกร","เวลา: (พ.)(ศ.)12:00-14:00"],

            "01418321 SA":["หมู่ 1","บรรยาย","สมโชค","เวลา: (พ.)14:00-16:00"],
            "01418321 SA LAB":["หมู่ 11","ปฏิบัติ","สมโชค","เวลา: (พ.)16:00-18:00"],

            "01418471 SW EN LAB":["หมู่ 11","ปฏิบัติ","อุษา","เวลา: (พฤ.)8:00-10:00"],
            "01418471 SW EN":["หมู่ 1","บรรยาย","อุษา","เวลา: 11:00-13:00"],

            "01175117 Archery":["หมู่ 14","ปฏิบัติ","ณัฐพงศ์","เวลา: 16:30-18:30"],
            "":["ไม่มี"]}

/*function show(day){
    var  subject = list[day]
    console.log(subject);
    var s = ""
    for (var i = 0 ; i<subject.length;i++){
        s += subject[i] + "<br>"
        var detail = listSub[subject[i]]
        console.log(detail);
        for (var j=0 ;j < detail.length;j++){
            s+=detail[j]+"<br>"
        }
        s+="<br>"
    }
    console.log(s);
    document.getElementById("detail").innerHTML=s
}

function showWe(sub){
    document.getElementById("detail").innerHTML="01418341 IP"+"<br>"+"01418331 OS"+"<br>"+"01418321 SA"+"<br>"+"01418321 SA LAB"
}
function showTh(sub){
    document.getElementById("detail").innerHTML="01418471 SW EN"+"<br>"+"01418471 SW EN LAB"+"<br>"+"01175117 Archery"
}
function showFr(sub){
    document.getElementById("detail").innerHTML="01418341 IP"+"<br>"+"01418331 OS"
}
function showSa(sub){
    document.getElementById("detail").innerHTML=""
}
function showSu(sub){
    document.getElementById("detail").innerHTML=""
}
function showMo(sub){
    document.getElementById("detail").innerHTML="01418497 Seminar"
}*/

function show(sub){
    var subject = list[sub]
    var str = ""
    for (var i = 0 ; i<subject.length;i++){
        str += subject[i] +"<br>"
    }document.getElementById("detail").innerHTML=str
    
}
function showSub(sub){
    var subject = listSub[sub]
    var str = ""
    for (var i = 0 ; i<subject.length;i++){
        str += subject[i] +"<br>"
    }document.getElementById("detail").innerHTML=str
    
}

