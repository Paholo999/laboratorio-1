class Process{
    constructor(name,arrival,duration){
        this.name = name;
        this.arrival = arrival;
        this.duration = duration;
    }


}

class UI{
    addProcess(process){
        const processList = document.getElementById("process-list");
        const element = document.createElement("div");
        element.innerHTML = `<div class='data'>Nombre:  ${process.name}  Llegada:  ${process.arrival}  Ejecucion:  ${process.duration}  </div>`;
        processList.appendChild(element);    
    }

    runProcess(listproces){ 
        var texto = "";
        for (var i = 0; i < listproces.length; i++) {
            for(var j = i + 1; i<listproces.length;i++){
                if(listproces[i].duration < listproces[j].duration){
                    texto += "<div class='process'> Proceso:" + listproces[i].name + "<br>" + "Ejecucion:"+ listproces[i].duration +"</div>";
                }else{
                    if(listproces[j].duration < listproces[i].duration){
                        texto += "<div class='process'> Proceso:" + listproces[j].name + "<br>" + "Ejecucion:"+ listproces[j].duration + "</div>";
                    }
                }
            } 
        }

        var ctn = document.getElementById("demo").innerHTML = texto;

        console.log(listproces);
    }

}


/*DOM eventos*/
var listProcess = [];
document.getElementById("btn-ctn").addEventListener("click",function(e){
    const name = document.getElementById("name").value;
    const arrival = document.getElementById("arrival").value;
    const duration = document.getElementById("duration").value;

    const process = new Process(name,arrival,duration);
    
    const ui = new UI();
    ui.addProcess(process);
    listProcess.push(process);
    document.getElementById("name").value = "";
    document.getElementById("arrival").value = "";
    document.getElementById("duration").value = "";

    e.preventDefault();
})

document.getElementById("btn-run").addEventListener("click",function(e){
    const ui = new UI();
    ui.runProcess(listProcess);

    e.preventDefault();
})