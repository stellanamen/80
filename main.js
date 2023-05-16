var nameOfPeople = []

// função adiciona os nomes



function submit()

{

    var GuestName = document.getElementById("name1").value;

    namesOfPeople.push(GuestName);



    console.log(GuestName);

        

    console.log(namesOfPeople);

    var lenghtOfName = namesOfPeople.length;

    console.log(lenghtOfName);

    document.getElementById("displayName").innerHTML=namesOfPeople.toString();

    

   }



