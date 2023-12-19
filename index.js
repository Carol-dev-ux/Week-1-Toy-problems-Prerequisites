// Function to determine the grade based on a given mark
function gradingSystem(mark){
    
// Check if the mark is out of valid range or not a number
  if(mark <0 || mark > 100 || isNaN(mark)){
     return "enter a valid mark"
    } else{
     if(mark > 79){
       return "A"
     }else if(mark>= 60 && mark<=79){
       return "B"
     }else if(mark >= 49 && mark <= 59){
       return "C"
     }else if (mark >=40 && mark <49){
       return "D"
     }else if(mark >= 0 && mark <40){
       return "E"
     }
    }
   
   
   }

   // Example
   let result = gradingSystem(79)
   console.log(result)