// Load any saved data on page load
window.addEventListener("DOMContentLoaded", (event) => {
  // if(localStorage.getItem('name')) {
  //     document.getElementById('name').value = localStorage.getItem('name');
  // }
  // if(localStorage.getItem('email')) {
  //     document.getElementById('email').value = localStorage.getItem('email');
  // }
});

// Save data to localStorage when the input value changes
document.getElementById("facility_name").addEventListener("input", function () {
  localStorage.setItem("facility_name", this.value);
});
document.getElementById("facility_type").addEventListener("input", function () {
  localStorage.setItem("facility_type", this.value);
});
document
  .getElementById("facility_type_pharmacy")
  .addEventListener("input", function () {
    localStorage.setItem("facility_type_info", this.value);
  });
document
  .getElementById("facility_region")
  .addEventListener("input", function () {
    localStorage.setItem("facility_region", this.value);
  });
document
  .getElementById("facility_district")
  .addEventListener("input", function () {
    localStorage.setItem("facility_district", this.value);
  });
document.getElementById("facility_area").addEventListener("input", function () {
  localStorage.setItem("facility_area", this.value);
});
document
  .getElementById("facility_address")
  .addEventListener("input", function () {
    localStorage.setItem("facility_address", this.value);
  });
document.getElementById("facility_gps").addEventListener("input", function () {
  localStorage.setItem("facility_gps", this.value);
});
document
  .getElementById("facility_landline")
  .addEventListener("input", function () {
    localStorage.setItem("facility_landline", this.value);
  });
document
  .getElementById("facility_mobile")
  .addEventListener("input", function () {
    localStorage.setItem("facility_mobile", this.value);
  });
document
  .getElementById("facility_email")
  .addEventListener("input", function () {
    localStorage.setItem("facility_email", this.value);
  });
document
  .getElementById("facility_website")
  .addEventListener("input", function () {
    localStorage.setItem("facility_website", this.value);
  });
document
  .getElementById("facility_website")
  .addEventListener("input", function () {
    localStorage.setItem("facility_website", this.value);
  });
document
  .getElementById("additional_info")
  .addEventListener("input", function () {
    localStorage.setItem("additional_info", this.value);
  });
document
  .getElementById("submission_agreement")
  .addEventListener("input", function (check) {
    check !== "on"
      ? localStorage.setItem("submission_agreement", this.value)
      : localStorage.setItem("submission_agreement", null);
  });
document.getElementById("hefra_number").addEventListener("input", function () {
  localStorage.setItem("hefra_number", this.value);
});
document.getElementById("pc_number").addEventListener("input", function () {
  localStorage.setItem("pc_number", this.value);
});
// document.getElementById("facility_gps").addEventListener("input", function () {
//   localStorage.setItem("facility_gps", this.value);
// });
// document.getElementById("facility_gps").addEventListener("input", function () {
//   localStorage.setItem("facility_gps", this.value);
// });
// document.getElementById("facility_gps").addEventListener("input", function () {
//   localStorage.setItem("facility_gps", this.value);
// });

// const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
// const selectedValues = Array.from(checkboxes).map((checkbox) => checkbox.value);

// localStorage.setItem("myInfo", JSON.stringify(selectedValues));

let selectedValues = [];

// // Get store all selected checkboxes
// const checkboxes = document
//   .getElementById("facility_type_hospital_specialized_options")
//   .addEventListener('input[type="checkbox"]:checked', function () {
//     localStorage.setItem("selectedItems", this.value);
//   });

// Get the parent container
const content = document.getElementById(
  "facility_type_hospital_specialized_options"
);

// If the container exists
if (content) {
  // Attach a change event listener to the container
  content.addEventListener("change", function (event) {
    // Check if the target of the event is a checkbox
    if (event.target.type === "checkbox") {
      // Get all checked checkboxes within the container
      const checkedCheckboxes = content.querySelectorAll(
        'input[type="checkbox"]:checked'
      );

      // Convert NodeList to an array of values
      const selectedValues = Array.from(checkedCheckboxes).map((checkbox) => ({
        service_code: checkbox.value,
        service_details_name: checkbox.name,
      }));

      // Store the array in local storage
      localStorage.setItem(
        "facility_type_info",
        JSON.stringify(selectedValues)
      );
    }
  });
}

const clinics = document.getElementById("facility_type_clinic_option");

// If the container exists
if (clinics) {
  // Attach a change event listener to the container
  clinics.addEventListener("change", function (event) {
    // Check if the target of the event is a checkbox
    if (event.target.type === "checkbox") {
      // Get all checked checkboxes within the container
      const checkedCheckboxes = clinics.querySelectorAll(
        'input[type="checkbox"]:checked'
      );

      // Convert NodeList to an array of values
      const selectedValues = Array.from(checkedCheckboxes).map((checkbox) => ({
        service_code: checkbox.value,
        service_details_name: checkbox.name,
      }));

      // Store the array in local storage
      localStorage.setItem(
        "facility_type_info",
        JSON.stringify(selectedValues)
      );
    }
  });
}

// const days = document.getElementById("facility_type_clinic_option");

// // If the container exists
// if (days) {
//   // Attach a change event listener to the container
//   days.addEventListener("change", function (event) {
//     // Check if the target of the event is a checkbox
//     if (event.target.type === "checkbox") {
//       // Get all checked checkboxes within the container
//       const checkedCheckboxes = days.querySelectorAll(
//         'input[type="checkbox"]:checked'
//       );

//       // Convert NodeList to an array of values
//       const selectedValues = Array.from(checkedCheckboxes).map((checkbox) => ({
//         service_code: checkbox.value,
//         service_details_name: checkbox.name,
//       }));

//       // Store the array in local storage
//       localStorage.setItem(
//         "facility_type_info",
//         JSON.stringify(selectedValues)
//       );
//     }
//   });
// }

document.addEventListener("DOMContentLoaded", function () {
  // Select All button logic
  document
    .getElementById("check_all_days")
    .addEventListener("click", function () {
      let checkboxes = document.querySelectorAll(".opening-days");
      checkboxes.forEach((checkbox) => (checkbox.checked = true));
    });

  // Saving data to localStorage on any input change
  const container = document.querySelector("fieldset");
  container.addEventListener("input", storeSelectedDays);
});

function storeSelectedDays() {
  let daysData = { days: {} };

  // List of days (expand this list to include other days)
  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ]; // ...

  days.map((day) => {
    let checkbox = document.getElementById(day);
    if (checkbox.checked) {
      let open24Hours = document.getElementById(day + "_open_24_hours");
      if (open24Hours && open24Hours.checked) {
        daysData.days[day] = { start: "0:00", end: "24:00" };
      } else {
        let startTime = document.getElementById(day + "_start_time").value;
        let endTime = document.getElementById(day + "_end_time").value;
        daysData.days[day] = { start: startTime, end: endTime };
      }
    }
  });

  localStorage.setItem("facilitySchedule", JSON.stringify(daysData));
}

// const days = [
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
//   "sunday",
// ];

// let schedule = {
//   days: {},
// };

// days.map((day) => {
//   const isChecked = document.getElementById(day).checked;
//   if (isChecked) {
//     const start = document.getElementById(day + "_start_time").value;
//     const end = document.getElementById(day + "_end_time").value;

//     if (start && end) {
//       // Ensuring both times are entered
//       schedule.days[day] = {
//         start: start,
//         end: end,
//       };
//     }
//   }
// });

// localStorage.setItem("schedule", JSON.stringify(schedule));
// const days = {};

// const form = document.getElementById("monday");

// // Loop through each checkbox and check if it's selected
// [
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday",
//   "sunday",
// ].forEach((day) => {
//   if (form.elements[day].checked) {
//     const startTime = form.elements[day + "Start"].value;
//     const endTime = form.elements[day + "End"].value;

//     days[day] = {
//       start: startTime,
//       end: endTime,
//     };
//   }
// });

// // Create or update the workingHours object in local storage
// const workingHours = JSON.parse(localStorage.getItem("days")) || {};
// workingHours.days = days;

// localStorage.setItem("workingHours", JSON.stringify(workingHours));

//   .querySelectorAll('input[type="checkbox"]:checked')
// Loop through each checkbox to get its value
// checkboxes.forEach((checkbox) => {
//   selectedValues.push(checkbox.value);
// });

// Store the array in local storage

// document.getElementById("facility_type").addEventListener("input", function () {
//   localStorage.setItem("facility_type_info", this.value);
// });

// document.getElementById('email').addEventListener('input', function() {
//     localStorage.setItem('email', this.value);
// });

// Clear localStorage when the form is submitted
// document.getElementById("myForm").addEventListener("submit", function (event) {
//   event.preventDefault(); // Just for this example to prevent form submission
//   localStorage.removeItem("name");
//   localStorage.removeItem("email");
//   alert("Form submitted and localStorage cleared!");
// });

const generalPractitionerCheckboxs = document.getElementById(
  "general_practitioner_consultation_checkboxs"
);

// If the container exists
if (generalPractitionerCheckboxs) {
  // Attach a change event listener to the container
  generalPractitionerCheckboxs.addEventListener("change", function (event) {
    // Check if the target of the event is a checkbox
    if (event.target.type === "checkbox") {
      // Get all checked checkboxes within the container
      const checkedCheckboxes = generalPractitionerCheckboxs.querySelectorAll(
        'input[type="checkbox"]:checked'
      );

      // Convert NodeList to an array of values
      const selectedValues = Array.from(checkedCheckboxes).map((checkbox) => ({
        service_code: checkbox.value,
        service_details_name: checkbox.name,
      }));

      // Store the array in local storage
      localStorage.setItem("services", JSON.stringify(selectedValues));
    }
  });
}

const paymentMethods = document.getElementById("payment_methods");

if (paymentMethods) {
  paymentMethods.addEventListener("change", function (event) {
    // Check if the target of the event is a checkbox
    if (event.target.type === "checkbox") {
      // Get all checked checkboxes within the container
      const checkedCheckboxes = paymentMethods.querySelectorAll(
        'input[type="checkbox"]:checked'
      );

      // Convert NodeList to an array of values
      const selectedValues = Array.from(checkedCheckboxes).map((checkbox) => ({
        payment_methods: checkbox.value,
      }));

      // Store the array in local storage
      localStorage.setItem("payment_methods", JSON.stringify(selectedValues));
    }
  });
}

const hefraYesOrNoChoices = document.getElementById("hefraYesOrNoChoices");

if (hefraYesOrNoChoices) {
  hefraYesOrNoChoices.addEventListener("change", function (event) {
    // Check if the target of the event is a checkbox
    if (event.target.type === "radio") {
      // Get all checked checkboxes within the container
      const checkedCheckboxes = hefraYesOrNoChoices.querySelectorAll(
        'input[type="radio"]:checked'
      );

      // Convert NodeList to an array of values
      const selectedValues = Array.from(checkedCheckboxes).map(
        (checkbox) => checkbox.value
      );

      // Store the array in local storage
      localStorage.setItem("hefra_yes_no", selectedValues);
    }
  });
}

const pcYesOrNoChoices = document.getElementById("pcYesOrNoChoices");

if (pcYesOrNoChoices) {
  pcYesOrNoChoices.addEventListener("change", function (event) {
    // Check if the target of the event is a checkbox
    if (event.target.type === "radio") {
      // Get all checked checkboxes within the container
      const checkedCheckboxes = pcYesOrNoChoices.querySelectorAll(
        'input[type="radio"]:checked'
      );

      // Convert NodeList to an array of values
      const selectedValues = Array.from(checkedCheckboxes).map(
        (checkbox) => checkbox.value
      );

      // Store the array in local storage
      localStorage.setItem("pc_yes_no", selectedValues);
    }
  });
}
document
  .getElementById("example-select")
  .addEventListener("change", function () {
    localStorage.setItem("insurance_providers", this.value);
  });

const hefraAnswer = localStorage.getItem("hefra_yes_no");
console.log("hefraAnswer:", hefraAnswer);

document.getElementById("hefra_yes").addEventListener("click", function () {
  document
    .getElementById("hefra_number_show")
    .classList.replace("hidden", "block");
});

document.getElementById("hefra_no").addEventListener("click", function () {
  document
    .getElementById("hefra_number_show")
    .classList.replace("block", "hidden");
});
document.getElementById("pc_yes").addEventListener("click", function () {
  document
    .getElementById("pc_number_show")
    .classList.replace("hidden", "block");
});

document.getElementById("pc_no").addEventListener("click", function () {
  document
    .getElementById("pc_number_show")
    .classList.replace("block", "hidden");
});
// }
// if (exampleSelect) {
//   exampleSelect.addEventListener("change", function (event) {
//     // Check if the target of the event is a checkbox
//     if (event.target.type === "checkbox") {
//       // Get all checked checkboxes within the container
//       const checkedCheckboxes = exampleSelect.querySelectorAll(
//         'input[type="checkbox"]:checked'
//       );

//       // Convert NodeList to an array of values
//       const selectedValues = Array.from(checkedCheckboxes).map(
//         (checkbox) => checkbox.value
//       );

//       // Store the array in local storage
//       localStorage.setItem("example-select", selectedValues);
//     }
//   });
// }
// Get the form element
// const form = document.getElementById("hefraYesOrNoChoices");

// // Check previously stored value and pre-select the radio button
// const storedValue = localStorage.getItem("selectedOption");
// if (storedValue) {
//   const radioButtons = form.elements["hefraYesOrNo"];
//   for (let i = 0; i < radioButtons.length; i++) {
//     if (radioButtons[i].value === storedValue) {
//       radioButtons[i].checked = true;
//     }
//   }
// }

// // Add event listener to the form
// form.addEventListener("change", (event) => {
//   if (event.target.name === "option") {
//     localStorage.setItem("selectedOption", event.target.value);
//   }
// });

// const imageInput = document.getElementById("license");
// if (imageInput.files && imageInput.files[0]) {
//   const fileReader = new FileReader();

//   fileReader.onload = function (event) {
//     const base64Image = event.target.result;
//     localStorage.setItem("licenseImage", base64Image);
//   };

//   fileReader.readAsDataURL(imageInput.files[0]);
// }

document.querySelector("#license").addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    console.log(reader.result);
    localStorage.setItem("licenseimage", reader.result);
  });
  reader.readAsDataURL(this.files[0]);
});

// read the image
// document.addEventListener("DOMContentLoaded", () => {
//   const licenseImage = localStorage.getItem("licenseimage");
//   if (licenseImage) {
//     document.querySelector("#imagepreview").setAttribute("src", licenseImage);
//   }
// });

document.querySelector("#otherlicense").addEventListener("change", function () {
  let newFilesArray = [];
  const totalFiles = this.files.length;
  let loadedFiles = 0;

  for (let i = 0; i < totalFiles; i++) {
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      newFilesArray.push(reader.result);
      loadedFiles++;

      // Check if all files are loaded before storing in localStorage
      if (loadedFiles === totalFiles) {
        try {
          localStorage.setItem(
            "otherlicenseimages",
            JSON.stringify(newFilesArray)
          );
          //   console.log("All files saved to localStorage.");
        } catch (e) {
          if (e.name === "QuotaExceededError") {
            alert(
              "Failed to save the image to storage. Please clear some space or consider using another storage option."
            );
          } else {
            console.error("Error while saving data to localStorage:", e);
          }
        }
      }
    });

    reader.readAsDataURL(this.files[i]);
  }

  //   // Get the existing data from localStorage
  //   let storedFiles = localStorage.getItem("licenseimages");
  //   storedFiles = storedFiles ? JSON.parse(storedFiles) : [];

  //   const totalFiles = this.files.length;
  //   let loadedFiles = 0;

  //   for (let i = 0; i < totalFiles; i++) {
  //     const reader = new FileReader();
  //     reader.addEventListener("load", () => {
  //       storedFiles.push(reader.result);
  //       loadedFiles++;

  //       // Check if all files are loaded before storing in localStorage
  //       if (loadedFiles === totalFiles) {
  //         try {
  //           localStorage.setItem("licenseimages", JSON.stringify(storedFiles));
  //           console.log("All files saved to localStorage.");
  //         } catch (e) {
  //           if (e.name === "QuotaExceededError") {
  //             alert(
  //               "Failed to save the image to storage. Please clear some space or consider using another storage option."
  //             );
  //           } else {
  //             console.error("Error while saving data to localStorage:", e);
  //           }
  //         }
  //       }
  //     });
  //     reader.readAsDataURL(this.files[i]);
  //   }

  //   let storedFiles = JSON.parse(localStorage.getItem("storedFiles") || "[]");
  //   console.log("storedFiles:", storedFiles);
  //   for (let i = 0; i < this.files.length; i++) {
  //     const file = this.files[i];
  //     const reader = new FileReader();

  //     reader.addEventListener(
  //       "load",
  //       (function (fileToSave) {
  //         return function (e) {
  //           console.log(e.target.result);
  //           const uniqueKey = `otherlicense-${Date.now()}-${fileToSave.name}`;
  //           localStorage.setItem(uniqueKey, e.target.result);
  //           storedFiles.push(uniqueKey);
  //           localStorage.setItem("storedFiles", JSON.stringify(storedFiles));
  //         };
  //       })(file)
  //     );

  //     reader.readAsDataURL(file);
  //   }
});

// let selectedImageDataURL;

// document.getElementById("license").addEventListener("change", function (event) {
//   const file = event.target.files[0];
//   if (file) {
//     const reader = new FileReader();
// reader.readAsDataURL(file);
// reader.onloadend = function () {
//   selectedImageDataURL = reader.result;
// };
// localStorage.setItem("images", selectedImageDataURL);
// console.log("selectedImageDataURL::", selectedImageDataURL);
//   }
// });

// const file = document.getElementById("license").files[0];

// if (file) {
//   const reader = new FileReader();
//   reader.onloadend = function () {
//     const base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
//     localStorage.setItem("image", base64String);
//     alert("Image stored in local storage.");
//   };
//   reader.readAsDataURL(file);
// }
// alert("Image stored to local storage");
// const imageInput = document.getElementById('license');
//     if (imageInput.files && imageInput.files[0]) {
//         const fileReader = new FileReader();

//         fileReader.onload = function(event) {
//             const base64Image = event.target.result;
//             localStorage.setItem('licenseImage', base64Image);
//         };

//         fileReader.readAsDataURL(imageInput.files[0]);
//     }
