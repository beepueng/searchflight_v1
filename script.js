function searchFight(){
    

    var valueFrom = document.getElementById("selectfrom"); // id name
    var selectValueFrom = valueFrom.options[valueFrom.selectedIndex].value;
    
    var valueTo = document.getElementById("selectto"); // id name
    var selectValueTo = valueTo.options[valueTo.selectedIndex].value;
    
    if(selectValueFrom == "None" || selectValueTo == "None"){
        alert("Please select country.");
        
    }
    else if(selectValueFrom == "Australia" && selectValueTo == "Belgium" ){
        alert(JSON.stringify(selectValueFrom) + "- Departure 2:30 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 5:45 PM 20150716" + "\n" + "-------------------------------------------" + "\n" + JSON.stringify(selectValueFrom) + "- Departure 3:30 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 6:45 PM 20150716" );
        
    }
    else if(selectValueFrom == "Australia" && selectValueTo == "China"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 4:00 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 1:35 AM 20150717");
    }
    else if(selectValueFrom == "Australia" && selectValueTo == "France"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 4:45 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 7:30 PM 20150716");
    }
    else if(selectValueFrom == "Australia" && selectValueTo == "Japan"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 5:50 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 2:45 AM 20150717" + "\n" + "-------------------------------------------" + "\n" + JSON.stringify(selectValueFrom) + "- Departure 7:00 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 4:20 AM 20150717");
    }
    else if(selectValueFrom == "Australia" && selectValueTo == "Thailand"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 1:45 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 11:40 PM 20150716");
    }
    else if(selectValueFrom == "Australia" && selectValueTo == "United States"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 6:30 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 12:30 AM 20150717" + "\n" + "---------------------------------------------" + "\n" + JSON.stringify(selectValueFrom) + "- Departure 8:30 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 1:30 AM 20150717");
    }
    else if(selectValueFrom == "Belgium" && selectValueTo == "Australia"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 3:35 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 6:48 PM 20150716");
    }
    else if(selectValueFrom == "Belgium" && selectValueTo == "China"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 6:30 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 1:20 AM 20150716");
    }
    else if(selectValueFrom == "Belgium" && selectValueTo == "France"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 2:50 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 5:50 PM 20150716" + "\n" + "-------------------------------------------" + "\n" + JSON.stringify(selectValueFrom) + "- Departure 6:30 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 9:30 PM 20150716");
    }
    else if(selectValueFrom == "Belgium" && selectValueTo == "Japan"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 5:10 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 12:48 AM 20150716");
    }
    else if(selectValueFrom == "Belgium" && selectValueTo == "Thailand"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 7:00 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 4:25 AM 20150717" + "\n" + "-------------------------------------------" + "\n" + JSON.stringify(selectValueFrom) + "- Departure 9:00 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 8:40 AM 20150717");
    }
    else if(selectValueFrom == "Belgium" && selectValueTo == "United States"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 9:00 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 11:45 PM 20150716");
    }
    else if(selectValueFrom == "China" && selectValueTo == "Australia"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 2:00 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 11:30 PM 20150716");
    }
     else if(selectValueFrom == "China" && selectValueTo == "Belgium"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 2:15 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 10:10 PM 20150716");
    }
     else if(selectValueFrom == "China" && selectValueTo == "France"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 4:45 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 10:45 PM 20150716");
    }
     else if(selectValueFrom == "China" && selectValueTo == "Japan"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 5:00 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 5:45 PM 20150716");
    }
     else if(selectValueFrom == "China" && selectValueTo == "Thailand"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 7:30 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 2:30 AM 20150717");
    }
     else if(selectValueFrom == "China" && selectValueTo == "United States"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 8:30 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 8:45 AM 20150717");
    }
    else if(selectValueFrom == "France" && selectValueTo == "Australia"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 2:10 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 6:30 PM 20150717");
    }
     else if(selectValueFrom == "France" && selectValueTo == "Belgium"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 4:20 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 6:25 PM 20150716");
    }
     else if(selectValueFrom == "France" && selectValueTo == "China"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 6:00 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 3:20 AM 20150717");
    }
     else if(selectValueFrom == "France" && selectValueTo == "Japan"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 6:20 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 4:05 AM 20150717");
    }
     else if(selectValueFrom == "France" && selectValueTo == "Thailand"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 3:30 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 1:55 AM 20150717");
    }
     else if(selectValueFrom == "France" && selectValueTo == "United States"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 9:45 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 2:20 AM 20150717");
    }
     else if(selectValueFrom == "Japan" && selectValueTo == "Australia"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 4:00 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 3:40 AM 20150717");
    }
    else if(selectValueFrom == "Japan" && selectValueTo == "Belgium"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 5:20 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 5:20 AM 20150717");
    }
    else if(selectValueFrom == "Japan" && selectValueTo == "China"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 7:35 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 10:25 PM 20150716");
    }
    else if(selectValueFrom == "Japan" && selectValueTo == "France"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 7:50 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 8:35 AM 20150717");
    }
    else if(selectValueFrom == "Japan" && selectValueTo == "Thailand"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 3:10 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 10:10 PM 20150716");
    }
    else if(selectValueFrom == "Japan" && selectValueTo == "United States"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 10:00 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 10:30 AM 20150717");
    }
     else if(selectValueFrom == "Thailand" && selectValueTo == "Australia"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 5:50 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 3:55 AM 20150717");
    }
    else if(selectValueFrom == "Thailand" && selectValueTo == "Belgium"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 7:00 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 8:20 AM 20150717");
    }
    else if(selectValueFrom == "Thailand" && selectValueTo == "China"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 2:30 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 8:30 PM 20150716");
    }
    else if(selectValueFrom == "Thailand" && selectValueTo == "France"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 6:40 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 9:35 AM 20150717");
    }
    else if(selectValueFrom == "Thailand" && selectValueTo == "Japan"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 4:45 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 10:45 PM 20150716");
    }
    else if(selectValueFrom == "Thailand" && selectValueTo == "United States"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 11:30 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 11:50 AM 20150717" + "\n" + "-------------------------------------------" + "\n" + JSON.stringify(selectValueFrom) + "- Departure 1:40 AM 20150717" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 2:30 PM 20150717");
    }
     else if(selectValueFrom == "United States" && selectValueTo == "Australia"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 5:35 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 9:50 PM 20150716");
    }
    else if(selectValueFrom == "United States" && selectValueTo == "Belgium"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 7:20 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 3:50 AM 20150717");
    }
    else if(selectValueFrom == "United States" && selectValueTo == "China"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 4:00 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 6:40 AM 20150717");
    }
    else if(selectValueFrom == "United States" && selectValueTo == "France"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 3:45 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 9:10 PM 20150716");
    } 
    else if(selectValueFrom == "United States" && selectValueTo == "Japan"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 10:50 PM 20150716" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 11:45 AM 20150717" + "\n" + "---------------------------------------------------" + "\n" + JSON.stringify(selectValueFrom) + "- Departure 12:10 AM 20150717" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 1:45 PM 20150717");
    }
    else if(selectValueFrom == "United States" && selectValueTo == "Thailand"){
        alert(JSON.stringify(selectValueFrom) + "- Departure 12:30 AM 20150717" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 4:20 PM 20150717" + "\n" + "---------------------------------------------------" + "\n" + JSON.stringify(selectValueFrom) + "- Departure 2:45 AM 20150717" + "\n" + JSON.stringify(selectValueTo) + "- Arrivals 6:20 PM 20150717");
    }
     else if(selectValueFrom == "Australia" && selectValueTo == "Australia"){
        alert("You can not choose same country" + "\n" + "Please select again.");
    }
     else if(selectValueFrom == "Belgium" && selectValueTo == "Belgium"){
        alert("You can not choose same country" + "\n" + "Please select again.");
    }
     else if(selectValueFrom == "China" && selectValueTo == "China"){
        alert("You can not choose same country" + "\n" + "Please select again.");
    }
     else if(selectValueFrom == "France" && selectValueTo == "France"){
        alert("You can not choose same country" + "\n" + "Please select again.");
    }
     else if(selectValueFrom == "Japan" && selectValueTo == "Japan"){
        alert("You can not choose same country" + "\n" + "Please select again.");
    }
     else if(selectValueFrom == "Thailand" && selectValueTo == "Thailand"){
       alert("You can not choose same country" + "\n" + "Please select again.");
    }
    else if(selectValueFrom == "United States" && selectValueTo == "United States"){
       alert("You can not choose same country" + "\n" + "Please select again.");
    }
   
}