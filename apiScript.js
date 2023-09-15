// Fetch data from the API when the page loads
window.onload = function () {
  fetchFacilityTypeData();
  //   fetchFacilityTypeCheck();
};

async function fetchFacilityTypeData() {
  fetch("http://127.0.0.1:8000/api/v1/facility-types")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Debugging: Log the data to inspect its structure

      const dropdown = document.getElementById("facility_type");
      //   dropdown.innerHTML = "";

      if (Array.isArray(data.data)) {
        // If data is an array, populate the dropdown
        data.data.map((item) => {
          const option = document.createElement("option");
          option.value = item.facility_type_name;
          option.textContent = item.facility_type_name;
          console.log(item);
          dropdown.appendChild(option);
        });
      } else {
        console.error("Received data is not an array:", data);
      }
    })
    .catch((error) => {
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
    });
}

// function getDataFromLocalStorage() {
//     const data = localStorage.getItem("facility_type");
//     console.log(data); // Logs the data. You can replace this with any other processing you want.
//   }

//   // Call the function every second
//   setInterval(getDataFromLocalStorage, 2000);
// async function fetchFacilityTypeCheck() {
//   if (localStorage.getItem("facility_type")) {
//     myFacility_type = localStorage.getItem("facility_type");
//   }

document
  .getElementById("facility_type")
  .addEventListener("change", function () {
    // Getting the selected value
    const selectedValue = this.value;

    let userData = {
      facility_type: selectedValue,
    };
    fetch("http://127.0.0.1:8000/api/v1/facility-check", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data.data); // Debugging: Log the data to inspect its structure
        if (selectedValue === "Hospital (Specialized)") {
          const container = document.getElementById(
            "facility_type_hospital_specialized_show"
          );
          const options = document.getElementById(
            "facility_type_hospital_specialized_options"
          );

          // Assuming 'data' is an array of items from the API response
          data.data.map((item) => {
            // Create a div
            const div = document.createElement("div");
            div.id = item.service_code;
            div.className = "flex items-center mb-4";
            // Create a checkbox
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = item.service_code;
            checkbox.value = item.service_code;
            checkbox.className =
              "w-4 h-4 text-sky-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-sky-400 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 specialized-hospital-type";

            // Create a label
            const label = document.createElement("label");
            label.htmlFor = item.service_code;
            label.textContent = item.service_details_name;
            label.className = "ml-2 text-sm font-medium text-gray-900";

            // Append checkbox and label to the container

            div.appendChild(checkbox);
            div.appendChild(label);
            options.appendChild(div);
            // container.appendChild(document.createElement("br")); // line break for formatting
            container.classList.replace("hidden", "block");
          });
        } else if (selectedValue === "Pharmacy") {
          const container = document.getElementById(
            "facility_type_pharmacy_show"
          );
          const options = document.getElementById("facility_type_pharmacy");
          // Assuming 'data' is an array of items from the API response

          if (Array.isArray(data.data)) {
            console.log("dwsewsfefd:", data.data);
            // If data is an array, populate the dropdown
            data.data.map((item) => {
              const option = document.createElement("option");
              option.value = item.service_code;
              option.textContent = item.service_details_name;
              console.log(item);
              options.appendChild(option);
            });
            container.classList.replace("hidden", "block");
          }
          // data.data.map((item) => {

          //   // Create a div
          //   const div = document.createElement("div");
          //   div.id = item.service_code;
          //   div.className = "flex items-center mb-4";
          //   // Create a checkbox
          //   const checkbox = document.createElement("input");
          //   checkbox.type = "checkbox";
          //   checkbox.id = item.service_code;
          //   checkbox.value = item.service_code;
          //   checkbox.className =
          //     "w-4 h-4 text-sky-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-sky-400 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 specialized-hospital-type";
          //   // Create a label
          //   const label = document.createElement("label");
          //   label.htmlFor = item.service_code;
          //   label.textContent = item.service_details_name;
          //   label.className = "ml-2 text-sm font-medium text-gray-900";
          //   // Append checkbox and label to the container
          //   div.appendChild(checkbox);
          //   div.appendChild(label);
          //   options.appendChild(div);
          //   // container.appendChild(document.createElement("br")); // line break for formatting
          //   container.classList.replace("hidden", "block");
          // });
        } else if (selectedValue === "Clinic") {
          const container = document.getElementById(
            "facility_type_clinic_show"
          );
          const options = document.getElementById(
            "facility_type_clinic_option"
          );

          // Assuming 'data' is an array of items from the API response
          data.data.map((item) => {
            // Create a div
            const div = document.createElement("div");
            div.id = item.service_code;
            div.className = "flex items-center mb-4";
            // Create a checkbox
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.id = item.service_code;
            checkbox.value = item.service_code;
            checkbox.className =
              "w-4 h-4 text-sky-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-sky-400 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 specialized-hospital-type";

            // Create a label
            const label = document.createElement("label");
            label.htmlFor = item.service_code;
            label.textContent = item.service_details_name;
            label.className = "ml-2 text-sm font-medium text-gray-900";

            // Append checkbox and label to the container

            div.appendChild(checkbox);
            div.appendChild(label);
            options.appendChild(div);
            // container.appendChild(document.createElement("br")); // line break for formatting
            container.classList.replace("hidden", "block");
          });
        } else {
          container.appendChild(document.createElement("br")); // line break for formatting

          // Assuming 'data' is an array of items from the API response
        }
      })
      .catch((error) => {
        console.error(
          "There was a problem with the fetch operation:",
          error.message
        );
      });
  });
// }

document
  .getElementById("facility_type")
  .addEventListener("change", function () {
    // Getting the selected value
    const selectedValue = this.value;

    let userData = {
      facility_type: selectedValue,
    };
    fetch("http://127.0.0.1:8000/api/v1/facility-services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const servicesInfoDiv = document.getElementById("services-infos");
        const primaryCareTopics = document.getElementById(
          "primary_care_services_topics"
        );
        const servicesInfo = document.getElementById(
          "facility_type_hospital_or_clinic_services_show"
        );
        const options = document.getElementById(
          "general_practitioner_consultation_checkboxs"
        );
        // Loop through the servicesData and display each category
        for (const category in data.data) {
          if (data.data.hasOwnProperty(category)) {
            const categoryData = data.data[category];
            const categoryElement = document.createElement("div");
            categoryElement.innerHTML = `<h4>${category}</h4> 
            <p class="text-sm text-gray-400">Multiple selection allowed</p>
            `;

            // servicesInfo.appendChild(categoryElement);
            // Create an unordered list for each category
            // const ul = document.createElement("ul");

            // Loop through the data within each category and create list items
            // categoryData.forEach((service, index) => {
            //   const li = document.createElement("li");
            //   li.textContent = `Service ${index + 1}: ${JSON.stringify(
            //     service
            //   )}`;
            //   ul.appendChild(li);
            // });

            // categoryElement.appendChild(ul);
            // servicesInfoDiv.appendChild(categoryElement);
            console.log("categoryData:", categoryData);
            categoryData.map((item) => {
              // Create a div
              const div = document.createElement("div");
              div.id = item.service_code;
              div.className =
                "inline-flex px-10 justify-center items-center mb-4 mr-4";
              // Create a checkbox
              const checkbox = document.createElement("input");
              checkbox.type = "checkbox";
              checkbox.id = item.service_code;
              checkbox.value = item.service_code;
              checkbox.className =
                "w-4 justify-center h-4 text-sky-400 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-sky-400 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 specialized-hospital-type";

              // Create a label
              const label = document.createElement("label");
              label.htmlFor = item.service_code;
              label.textContent = item.service_details_name;
              label.className = "ml-4 text-sm font-medium text-gray-900";

              categoryElement.appendChild(div);
              div.appendChild(checkbox);
              div.appendChild(label);
              //   options.appendChild(div);
              options.className = "w-full flex flex-wrap gap-4  items-start";
              options.appendChild(primaryCareTopics);
              primaryCareTopics.appendChild(categoryElement);
              servicesInfo.classList.replace("hidden", "block");
              //   const option = document.createElement("option");
              //   option.value = item.service_code;
              //   option.textContent = item.service_details_name;
              //   console.log(item);
              //   options.appendChild(option);
            });
          }
        }
        localStorage.setItem("services_infos", JSON.stringify(data.data));
        console.log("facility-services:", data);
      })
      .catch((error) => {
        console.error(
          "There was a problem with the fetch operation:",
          error.message
        );
      });
  });

// const myForm = document.getElementById("myForm");
// const myImage = document.getElementById("license");
// // console.log("my images: ", filets);
// console.log("gormw", myForm);
// myForm.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("skndkgdfksdmfmks", e);
//   const formData = new formData();
//   const filets = formData.append("myImage", myImage.files[0]);
//   // const file = fileInput.files["*"];
//   console.log("files:", filets);
// });
async function pushFacilityData() {
  // Getting the selected value
  const facility_name = localStorage.getItem("facility_name");
  const facility_type = localStorage.getItem("facility_type");
  const facility_type_info = localStorage.getItem("facility_type_info");
  const facility_region = localStorage.getItem("facility_region");
  const facility_district = localStorage.getItem("facility_district");
  const facility_area = localStorage.getItem("facility_area");
  const facility_address = localStorage.getItem("facility_address");
  const facility_gps = localStorage.getItem("facility_gps");
  const facility_landline = localStorage.getItem("facility_landline");
  const facility_mobile = localStorage.getItem("facility_mobile");
  const facility_email = localStorage.getItem("facility_email");
  const facility_website = localStorage.getItem("facility_website");
  const additional_info = localStorage.getItem("additional_info");
  const payment_methods = localStorage.getItem("payment_methods");
  const hefra_yes_no = localStorage.getItem("hefra_yes_no");
  const hefra_number = localStorage.getItem("hefra_number");
  const services = localStorage.getItem("services");
  // const licenseimage = localStorage.getItem("licenseimage");
  const licenseimage = document
    .getElementById("license")
    .addEventListener("change", function (event) {
      $filees = event.target.files; // this will give you the list of files selected
      console.log("filees", filees);
      // // You can loop through files if needed:
      // for (let i = 0; i < files.length; i++) {
      //     console.log(files[i].name); // prints the name of each file
      // }

      // If you want to upload these files to a server, you'd typically use an XMLHttpRequest or the Fetch API.
      // Remember that for uploading files, you'd have to set up a backend server to handle the file uploads.
    });
  const otherlicenseimages = localStorage.getItem("otherlicenseimages");
  const insurance_providers = localStorage.getItem("insurance_providers");
  const days = localStorage.getItem("days");
  // const facility_name = localStorage.getItem("facility_name");
  // const facility_name = localStorage.getItem("facility_name");
  // const facility_name = localStorage.getItem("facility_name");

  const imageInput = document.getElementById("license");
  const file = imageInput.files[0];

  if (!file) {
    alert("Please select an image first.");
    return;
  }

  console.log("All data sent", [
    facility_name,
    facility_type,
    JSON.parse(facility_type_info),
    facility_region,
    facility_district,
    facility_area,
    facility_address,
    file,
  ]);

  let userData = {
    facility_name: facility_name,
    facility_type: facility_type,
    facility_type_info: JSON.parse(facility_type_info),
    facility_address: facility_address,
    facility_area: facility_area,
    facility_district: facility_district,
    facility_region: facility_region,
    facility_GPS: facility_gps,
    facility_landline: facility_landline,
    facility_mobile: facility_mobile,
    facility_email: facility_email,
    facility_web: facility_website,
    additional_info: additional_info,
    license: licenseimage,
    // other_license: JSON.parse(otherlicenseimages),
    is_accredited: hefra_yes_no === "yes" ? 1 : 0,
    hefra_number: hefra_number,
    payment_method: JSON.parse(payment_methods),
    providers: insurance_providers,
    days: [
      {
        monday: {
          open: "10:05",
          clode: "21:30",
        },
      },
      {
        tuesday: {
          open: "10:05",
          clode: "21:30",
        },
      },
      {
        wednesday: {
          open: "10:05",
          clode: "21:30",
        },
      },
      {
        thursday: {
          open: "10:05",
          clode: "21:30",
        },
      },
      {
        friday: {
          open: "10:05",
          clode: "21:30",
        },
      },
      {
        saturday: {
          open: "10:05",
          clode: "21:30",
        },
      },
      {
        sunday: {
          open: "10:05",
          clode: "21:30",
        },
      },
    ],
    facilty_service_detail: JSON.parse(services),
  };
  fetch("http://127.0.0.1:8000/api/v1/allservices", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.data); // Debugging: Log the data to inspect its structure
    })
    .catch((error) => {
      console.error(
        "There was a problem with the fetch operation:",
        error.message
      );
    });
}
