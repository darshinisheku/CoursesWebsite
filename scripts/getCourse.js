
async function getUsers(){
    let table = document.getElementById("courseTable");

    const response =  await fetch("http://localhost:8081/api/courses")
    const responseData = await response.json()

    for(let i=0; i<responseData.length; i++){

       let row = table.insertRow(-1);
       let cell1 = row.insertCell(0);
       let cell2 = row.insertCell(1);
       let cell3 = row.insertCell(2);

       cell1.innerHTML = responseData[i].dept;
       cell2.innerHTML = responseData[i].courseNum;
       cell3.innerHTML = responseData[i].courseName;

       const detailsCell = row.insertCell();
        let anchor = document.createElement("a");
        anchor.href =  'details.html?cid='+responseData[i].id;
        anchor.text = "See details";  
        detailsCell.appendChild(anchor);

        const deleteCell = row.insertCell();
        let dAnchor = document.createElement("a");
        dAnchor.href = 'deleteCourse.html?cid='+responseData[i].id;
        dAnchor.text = "Delete Course";
        deleteCell.appendChild(dAnchor);



    }
   
}
