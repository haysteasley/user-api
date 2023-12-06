const baseUrl = "https://taco-7tqf.onrender.com";


const getRecommendedTaco = async () => {
  const monthInput = document.getElementById("monthInput").value;
  const result = document.getElementById("result");

  try {
    // request Nat's API for taco recommendation
    const response = await fetch(`${baseUrl}/?month=${monthInput}`);
    console.log(response)
    console.log(`${baseUrl}/?month=${monthInput}`)
    const data = await response.json();
    
console.log(data)
    //  req for a random cat image
     const catResponse = await fetch(`${baseUrl}/catfaces`);
     const catData = await catResponse.json();

     // display result 
     result.innerHTML = `
       <p>For ${monthInput}, the recommended taco is: ${data}</p>
       <p>${catData.catFace}</p>
     `;
    

  } catch (error) {
    console.error("Error fetching taco recommendation:", error.message);
    result.innerHTML = "<p>Error fetching taco recommendation.</p>";
  }
};
// check for errors?
document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM content event fired."); 
  
  //button
  const button = document.getElementById("getTacoButton");
  button.addEventListener("click", getRecommendedTaco);
});
