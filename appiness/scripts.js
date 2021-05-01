

var books = document.querySelectorAll(".card-body .mainconatinersecclass");

Array.from(books).forEach(function(book){
book.textContent = "Content of card";
});

var testymon = document.querySelectorAll(".row .testimony");

Array.from(testymon).forEach(function(testi){
testi.textContent = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
});

$("#docname").text("Jhon Doe");

$("#docname2").text("Smith Doe");

const list = document.querySelector(".row .rectangledoc ul");

//create Element

  const docData = [
    {
      specialist: "Pediatric BMT",
      photo: "images/Bitmap Copy.png",
      name: "Dr Vijay",
      degree: "MD, MRCP, PhD,CCT Lead & Sr. Consultant - Medical Oncology & Haematology",
      description: "Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.",
     
    },
    {
        specialist: "Pediatric BMT",
        photo: "images/Bitmap Copy.png",
        name: "Dr Ajay",
        degree:"MD, MRCP, PhD,CCT Lead & Sr. Consultant - Medical Oncology & Haematology",
        description: "Dr. Ajay is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.",
       
      },
  
  ];



document.getElementById("app").innerHTML = `

${docData.map(function(doc){
    return `
    <div class="doctdiv">
    <div class="pediatric-bmt">${doc.specialist}</div>
    <div class="doc_photo"><img  src="${doc.photo}"></div>
    <div class="dr-vijay-agarwal-copy">${doc.name}</div>
    <div class="md-mrcp-ph-d-cct-le-copy">${doc.degree}</div>
    <div class="aligncenter" ><div class="line-5-copy "></div></div>
    <div class="dr-vijay-agarwal-is-copy-4">${doc.description}</div>
    <div class="knmore"> <button type="button" class="btn btn-primary" style="" onclick="" >Know More</button></div>
    </div>
    `;
}).join('')}
`







const docDataone = [
    {
      specialist: "Adult BMT",
      photo: "images/Bitmap Copy.png",
      name: "Dr Suresh",
      degree: "MD, MRCP, PhD,CCT Lead & Sr. Consultant - Medical Oncology & Haematology",
      description: "Dr. Vijay Agarwal is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.",
     
    },
    {
        specialist: "Adult BMT",
        photo: "images/Bitmap Copy.png",
        name: "Dr Naresh",
        degree:"MD, MRCP, PhD,CCT Lead & Sr. Consultant - Medical Oncology & Haematology",
        description: "Dr. Ajay is a Senior Consultant Medical Oncologist with over 12 years of experience in Oncology. Dr. Agarwal has been practising Medical Oncology since 2004.",
       
      },
  
  ];



document.getElementById("appone").innerHTML = `

${docDataone.map(function(doc){
    return `
    <div class="doctdiv">
    <div class="pediatric-bmt">${doc.specialist}</div>
    <div class="doc_photo"><img  src="${doc.photo}"></div>
    <div class="dr-vijay-agarwal-copy">${doc.name}</div>
    <div class="md-mrcp-ph-d-cct-le-copy">${doc.degree}</div>
    <div class="aligncenter" ><div class="line-5-copy "></div></div>
    <div class="dr-vijay-agarwal-is-copy-4">${doc.description}</div>
    <div class="knmore"> <button type="button" class="btn btn-primary" style="" onclick="" >Know More</button></div>
    </div>
    `;
}).join('')}
`





