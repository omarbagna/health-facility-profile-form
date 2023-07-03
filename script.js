/* Form Stepper */

const prevBtns = document.querySelectorAll('.btn-prev');
const nextBtns = document.querySelectorAll('.btn-next');
const progress = document.getElementById('progress');
const formSteps = document.querySelectorAll('.form-step');
const progressSteps = document.querySelectorAll('.progress-step');

let formStepsNum = 0;

nextBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		formStepsNum++;
		updateFormSteps();
		updateProgressbar();
	});
});

prevBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		formStepsNum--;
		updateFormSteps();
		updateProgressbar();
	});
});

function updateFormSteps() {
	formSteps.forEach((formStep) => {
		formStep.classList.contains('form-step-active') &&
			formStep.classList.remove('form-step-active');
	});

	formSteps[formStepsNum].classList.add('form-step-active');
}

function updateProgressbar() {
	progressSteps.forEach((progressStep, idx) => {
		if (idx < formStepsNum + 1) {
			progressStep.classList.add('text-sky-400', 'progress-step-active');
		} else {
			progressStep.classList.remove('text-sky-400', 'progress-step-active');
		}
	});

	const progressActive = document.querySelectorAll('.progress-step-active');

	progress.style.width =
		((progressActive.length - 1) / (progressSteps.length - 1)) * 95 + '%';
}

/* Form Basics Area */

const selectedFacilityType = document.getElementById('facility_type');

const showHEFRA = document.getElementById('hefra');
const showHEFRAUpload = document.getElementById('hefra_number_show');

const showPharmacyCouncil = document.getElementById('pharmacy_council');
const showPharmacyCouncilUpload = document.getElementById('pc_number_show');

const specializedHospitalsCheck = document.querySelectorAll(
	'.specialized-hospital-type'
);

const clinicsCheck = document.querySelectorAll('.clinic-type');
const specializedClinicsCheck = document.querySelectorAll(
	'.specialized-clinic-type'
);
const openingDaysCheck = document.querySelectorAll('.opening-days');
const checkAllDays = document.getElementById('check_all_days');

const openingTimes = document.querySelectorAll('.open-time');
const closingTimes = document.querySelectorAll('.close-time');

let selectedSpecializedHospitals = [];
let selectedClinics = [];
let selectedSpecializedClinics = [];

function checkFacilitySelected(facility) {
	if (facility.value === 'hospital-specialized') {
		selectedClinics = [];
		selectedSpecializedClinics = [];
		clinicsCheck.forEach((clinic) => {
			clinic.checked = false;
		});
		specializedClinicsCheck.forEach((specializedClinic) => {
			specializedClinic.checked = false;
		});

		showHEFRA.classList.replace('hidden', 'flex');
		showPharmacyCouncil.classList.replace('flex', 'hidden');
		showPharmacyCouncilUpload.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_hospital_specialized_show')
			.classList.replace('hidden', 'block');
		document
			.getElementById('facility_type_clinic_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_specialized_clinic_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_pharmacy_show')
			.classList.replace('block', 'hidden');

		// Show Services
		document
			.getElementById('default_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_hospital_or_clinic_services_show')
			.classList.replace('hidden', 'block');

		document
			.getElementById('facility_type_ent_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_dental_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_ophthalmological_or_optical_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_pharmacy_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_diagnostic_services_show')
			.classList.replace('block', 'hidden');
	} else if (facility.value === 'hospital-general') {
		selectedClinics = [];
		selectedSpecializedClinics = [];
		clinicsCheck.forEach((clinic) => {
			clinic.checked = false;
		});
		specializedClinicsCheck.forEach((specializedClinic) => {
			specializedClinic.checked = false;
		});

		showHEFRA.classList.replace('hidden', 'flex');
		showPharmacyCouncil.classList.replace('flex', 'hidden');
		showPharmacyCouncilUpload.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_hospital_specialized_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_clinic_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_specialized_clinic_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_pharmacy_show')
			.classList.replace('block', 'hidden');

		// Show Services
		document
			.getElementById('default_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_hospital_or_clinic_services_show')
			.classList.replace('hidden', 'block');

		document
			.getElementById('facility_type_ent_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_dental_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_ophthalmological_or_optical_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_pharmacy_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_diagnostic_services_show')
			.classList.replace('block', 'hidden');
	} else if (facility.value === 'clinic') {
		selectedSpecializedHospitals = [];
		specializedHospitalsCheck.forEach((specializedHospital) => {
			specializedHospital.checked = false;
		});

		showHEFRA.classList.replace('hidden', 'flex');
		showPharmacyCouncil.classList.replace('flex', 'hidden');
		showPharmacyCouncilUpload.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_clinic_show')
			.classList.replace('hidden', 'block');
		document
			.getElementById('facility_type_hospital_specialized_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_pharmacy_show')
			.classList.replace('block', 'hidden');

		// Show Services
		document
			.getElementById('default_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_hospital_or_clinic_services_show')
			.classList.replace('hidden', 'block');

		document
			.getElementById('facility_type_ent_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_dental_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_ophthalmological_or_optical_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_pharmacy_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_diagnostic_services_show')
			.classList.replace('block', 'hidden');
	} else if (facility.value === 'pharmacy') {
		selectedClinics = [];
		selectedSpecializedClinics = [];
		selectedSpecializedHospitals = [];
		specializedHospitalsCheck.forEach((specializedHospital) => {
			specializedHospital.checked = false;
		});
		clinicsCheck.forEach((clinic) => {
			clinic.checked = false;
		});
		specializedClinicsCheck.forEach((specializedClinic) => {
			specializedClinic.checked = false;
		});

		showPharmacyCouncil.classList.replace('hidden', 'flex');
		showHEFRA.classList.replace('flex', 'hidden');
		showHEFRAUpload.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_pharmacy_show')
			.classList.replace('hidden', 'block');
		document
			.getElementById('facility_type_hospital_specialized_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_clinic_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_specialized_clinic_show')
			.classList.replace('block', 'hidden');

		// Show Services
		document
			.getElementById('default_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_pharmacy_services_show')
			.classList.replace('hidden', 'block');

		document
			.getElementById('facility_type_ent_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_dental_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_ophthalmological_or_optical_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_diagnostic_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_hospital_or_clinic_services_show')
			.classList.replace('block', 'hidden');
	} else if (
		facility.value === 'laboratory' ||
		facility.value === 'diagnostic-imaging-center'
	) {
		selectedClinics = [];
		selectedSpecializedClinics = [];
		selectedSpecializedHospitals = [];
		specializedHospitalsCheck.forEach((specializedHospital) => {
			specializedHospital.checked = false;
		});
		clinicsCheck.forEach((clinic) => {
			clinic.checked = false;
		});
		specializedClinicsCheck.forEach((specializedClinic) => {
			specializedClinic.checked = false;
		});

		showHEFRA.classList.replace('hidden', 'flex');
		showPharmacyCouncil.classList.replace('flex', 'hidden');
		showPharmacyCouncilUpload.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_hospital_specialized_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_clinic_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_specialized_clinic_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_pharmacy_show')
			.classList.replace('block', 'hidden');

		// Show Services
		document
			.getElementById('default_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_diagnostic_services_show')
			.classList.replace('hidden', 'block');

		document
			.getElementById('facility_type_ent_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_dental_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_ophthalmological_or_optical_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_hospital_or_clinic_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_pharmacy_services_show')
			.classList.replace('block', 'hidden');
	} else if (facility.value === 'ophthalmological-or-optical-facility') {
		selectedClinics = [];
		selectedSpecializedClinics = [];
		selectedSpecializedHospitals = [];
		specializedHospitalsCheck.forEach((specializedHospital) => {
			specializedHospital.checked = false;
		});
		clinicsCheck.forEach((clinic) => {
			clinic.checked = false;
		});
		specializedClinicsCheck.forEach((specializedClinic) => {
			specializedClinic.checked = false;
		});

		showHEFRA.classList.replace('hidden', 'flex');
		showPharmacyCouncil.classList.replace('flex', 'hidden');
		showPharmacyCouncilUpload.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_hospital_specialized_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_clinic_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_specialized_clinic_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_pharmacy_show')
			.classList.replace('block', 'hidden');

		// Show Services
		document
			.getElementById('default_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_ophthalmological_or_optical_services_show')
			.classList.replace('hidden', 'block');

		document
			.getElementById('facility_type_ent_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_dental_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_diagnostic_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_hospital_or_clinic_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_pharmacy_services_show')
			.classList.replace('block', 'hidden');
	} else if (facility.value === 'dental-facility') {
		selectedClinics = [];
		selectedSpecializedClinics = [];
		selectedSpecializedHospitals = [];
		specializedHospitalsCheck.forEach((specializedHospital) => {
			specializedHospital.checked = false;
		});
		clinicsCheck.forEach((clinic) => {
			clinic.checked = false;
		});
		specializedClinicsCheck.forEach((specializedClinic) => {
			specializedClinic.checked = false;
		});

		showHEFRA.classList.replace('hidden', 'flex');
		showPharmacyCouncil.classList.replace('flex', 'hidden');
		showPharmacyCouncilUpload.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_hospital_specialized_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_clinic_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_specialized_clinic_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_pharmacy_show')
			.classList.replace('block', 'hidden');

		// Show Services
		document
			.getElementById('default_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_dental_services_show')
			.classList.replace('hidden', 'block');

		document
			.getElementById('facility_type_ent_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_ophthalmological_or_optical_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_diagnostic_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_hospital_or_clinic_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_pharmacy_services_show')
			.classList.replace('block', 'hidden');
	} else if (facility.value === 'ent-center') {
		selectedClinics = [];
		selectedSpecializedClinics = [];
		selectedSpecializedHospitals = [];
		specializedHospitalsCheck.forEach((specializedHospital) => {
			specializedHospital.checked = false;
		});
		clinicsCheck.forEach((clinic) => {
			clinic.checked = false;
		});
		specializedClinicsCheck.forEach((specializedClinic) => {
			specializedClinic.checked = false;
		});

		showHEFRA.classList.replace('hidden', 'flex');
		showPharmacyCouncil.classList.replace('flex', 'hidden');
		showPharmacyCouncilUpload.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_hospital_specialized_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_clinic_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_specialized_clinic_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_pharmacy_show')
			.classList.replace('block', 'hidden');

		// Show Services
		document
			.getElementById('default_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_ent_services_show')
			.classList.replace('hidden', 'block');

		document
			.getElementById('facility_type_dental_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_ophthalmological_or_optical_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_diagnostic_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_hospital_or_clinic_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_pharmacy_services_show')
			.classList.replace('block', 'hidden');
	} else {
		selectedClinics = [];
		selectedSpecializedClinics = [];
		selectedSpecializedHospitals = [];
		specializedHospitalsCheck.forEach((specializedHospital) => {
			specializedHospital.checked = false;
		});
		clinicsCheck.forEach((clinic) => {
			clinic.checked = false;
		});
		specializedClinicsCheck.forEach((specializedClinic) => {
			specializedClinic.checked = false;
		});

		showHEFRA.classList.replace('hidden', 'flex');
		showPharmacyCouncil.classList.replace('flex', 'hidden');
		showPharmacyCouncilUpload.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_pharmacy_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_hospital_specialized_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_clinic_show')
			.classList.replace('block', 'hidden');
		document
			.getElementById('facility_type_specialized_clinic_show')
			.classList.replace('block', 'hidden');

		// Show Services
		document
			.getElementById('default_show')
			.classList.replace('hidden', 'block');

		document
			.getElementById('facility_type_ent_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_dental_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_ophthalmological_or_optical_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_pharmacy_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_diagnostic_services_show')
			.classList.replace('block', 'hidden');

		document
			.getElementById('facility_type_hospital_or_clinic_services_show')
			.classList.replace('block', 'hidden');
	}
}

specializedHospitalsCheck.forEach((specializedHospital) => {
	specializedHospital.addEventListener('click', () => {
		if (specializedHospital.checked) {
			selectedSpecializedHospitals.push(specializedHospital.value);
		} else if (!specializedHospital.checked) {
			selectedSpecializedHospitals.pop(specializedHospital.value);
		}
	});
});

clinicsCheck.forEach((clinic) => {
	clinic.addEventListener('click', () => {
		if (clinic.checked) {
			selectedClinics.push(clinic.value);
			if (clinic.value === 'specialized-clinic') {
				document
					.getElementById('facility_type_specialized_clinic_show')
					.classList.replace('hidden', 'block');
			}
		} else if (!clinic.checked) {
			selectedClinics.pop(clinic.value);
			if (clinic.value === 'specialized-clinic') {
				selectedSpecializedClinics = [];
				specializedClinicsCheck.forEach((specializedClinic) => {
					specializedClinic.checked = false;
				});

				document
					.getElementById('facility_type_specialized_clinic_show')
					.classList.replace('block', 'hidden');
			}
		}
	});
});

specializedClinicsCheck.forEach((specializedClinic) => {
	specializedClinic.addEventListener('click', () => {
		if (specializedClinic.checked) {
			selectedSpecializedClinics.push(specializedClinic.value);
		} else if (!specializedClinic.checked) {
			selectedSpecializedClinics.pop(specializedClinic.value);
		}
		console.log({ selectedSpecializedClinics });
	});
});

checkAllDays.addEventListener('click', () => {
	openingDaysCheck.forEach((day) => {
		day.checked = true;

		// Monday Checked

		document
			.getElementById('facility_schedule_monday')
			.classList.replace('hidden', 'grid');

		// Tuesday Checked

		document
			.getElementById('facility_schedule_tuesday')
			.classList.replace('hidden', 'grid');

		// Wednesday Checked

		document
			.getElementById('facility_schedule_wednesday')
			.classList.replace('hidden', 'grid');

		// Thursday Checked

		document
			.getElementById('facility_schedule_thursday')
			.classList.replace('hidden', 'grid');

		// Friday Checked

		document
			.getElementById('facility_schedule_friday')
			.classList.replace('hidden', 'grid');

		// Saturday Checked

		document
			.getElementById('facility_schedule_saturday')
			.classList.replace('hidden', 'grid');

		// Sunday Checked

		document
			.getElementById('facility_schedule_sunday')
			.classList.replace('hidden', 'grid');
	});
});

openingDaysCheck.forEach((day) => {
	day.addEventListener('click', () => {
		// Monday Checked
		if (day.checked) {
			if (day.value === 'monday') {
				document
					.getElementById('facility_schedule_monday')
					.classList.replace('hidden', 'grid');
			}
		} else if (!day.checked) {
			if (day.value === 'monday') {
				document
					.getElementById('facility_schedule_monday')
					.classList.replace('grid', 'hidden');
			}
		}

		// Tuesday Checked
		if (day.checked) {
			if (day.value === 'tuesday') {
				document
					.getElementById('facility_schedule_tuesday')
					.classList.replace('hidden', 'grid');
			}
		} else if (!day.checked) {
			if (day.value === 'tuesday') {
				document
					.getElementById('facility_schedule_tuesday')
					.classList.replace('grid', 'hidden');
			}
		}

		// Wednesday Checked
		if (day.checked) {
			if (day.value === 'wednesday') {
				document
					.getElementById('facility_schedule_wednesday')
					.classList.replace('hidden', 'grid');
			}
		} else if (!day.checked) {
			if (day.value === 'wednesday') {
				document
					.getElementById('facility_schedule_wednesday')
					.classList.replace('grid', 'hidden');
			}
		}

		// Thursday Checked
		if (day.checked) {
			if (day.value === 'thursday') {
				document
					.getElementById('facility_schedule_thursday')
					.classList.replace('hidden', 'grid');
			}
		} else if (!day.checked) {
			if (day.value === 'thursday') {
				document
					.getElementById('facility_schedule_thursday')
					.classList.replace('grid', 'hidden');
			}
		}

		// Friday Checked
		if (day.checked) {
			if (day.value === 'friday') {
				document
					.getElementById('facility_schedule_friday')
					.classList.replace('hidden', 'grid');
			}
		} else if (!day.checked) {
			if (day.value === 'friday') {
				document
					.getElementById('facility_schedule_friday')
					.classList.replace('grid', 'hidden');
			}
		}

		// Saturday Checked
		if (day.checked) {
			if (day.value === 'saturday') {
				document
					.getElementById('facility_schedule_saturday')
					.classList.replace('hidden', 'grid');
			}
		} else if (!day.checked) {
			if (day.value === 'saturday') {
				document
					.getElementById('facility_schedule_saturday')
					.classList.replace('grid', 'hidden');
			}
		}

		// Sunday Checked
		if (day.checked) {
			if (day.value === 'sunday') {
				document
					.getElementById('facility_schedule_sunday')
					.classList.replace('hidden', 'grid');
			}
		} else if (!day.checked) {
			if (day.value === 'sunday') {
				document
					.getElementById('facility_schedule_sunday')
					.classList.replace('grid', 'hidden');
			}
		}
	});
});

openingDaysCheck.forEach((day) => {
	day.addEventListener('click', () => {
		// Monday Checked
		if (day.checked) {
			if (day.value === 'monday') {
				document
					.getElementById('facility_schedule_monday')
					.classList.replace('hidden', 'grid');
			}
		} else if (!day.checked) {
			if (day.value === 'monday') {
				document
					.getElementById('facility_schedule_monday')
					.classList.replace('grid', 'hidden');
			}
		}

		// Tuesday Checked
		if (day.checked) {
			if (day.value === 'tuesday') {
				document
					.getElementById('facility_schedule_tuesday')
					.classList.replace('hidden', 'grid');
			}
		} else if (!day.checked) {
			if (day.value === 'tuesday') {
				document
					.getElementById('facility_schedule_tuesday')
					.classList.replace('grid', 'hidden');
			}
		}

		// Wednesday Checked
		if (day.checked) {
			if (day.value === 'wednesday') {
				document
					.getElementById('facility_schedule_wednesday')
					.classList.replace('hidden', 'grid');
			}
		} else if (!day.checked) {
			if (day.value === 'wednesday') {
				document
					.getElementById('facility_schedule_wednesday')
					.classList.replace('grid', 'hidden');
			}
		}

		// Thursday Checked
		if (day.checked) {
			if (day.value === 'thursday') {
				document
					.getElementById('facility_schedule_thursday')
					.classList.replace('hidden', 'grid');
			}
		} else if (!day.checked) {
			if (day.value === 'thursday') {
				document
					.getElementById('facility_schedule_thursday')
					.classList.replace('grid', 'hidden');
			}
		}

		// Friday Checked
		if (day.checked) {
			if (day.value === 'friday') {
				document
					.getElementById('facility_schedule_friday')
					.classList.replace('hidden', 'grid');
			}
		} else if (!day.checked) {
			if (day.value === 'friday') {
				document
					.getElementById('facility_schedule_friday')
					.classList.replace('grid', 'hidden');
			}
		}

		// Saturday Checked
		if (day.checked) {
			if (day.value === 'saturday') {
				document
					.getElementById('facility_schedule_saturday')
					.classList.replace('hidden', 'grid');
			}
		} else if (!day.checked) {
			if (day.value === 'saturday') {
				document
					.getElementById('facility_schedule_saturday')
					.classList.replace('grid', 'hidden');
			}
		}

		// Sunday Checked
		if (day.checked) {
			if (day.value === 'sunday') {
				document
					.getElementById('facility_schedule_sunday')
					.classList.replace('hidden', 'grid');
			}
		} else if (!day.checked) {
			if (day.value === 'sunday') {
				document
					.getElementById('facility_schedule_sunday')
					.classList.replace('grid', 'hidden');
			}
		}
	});
});

function setOpeningTimes(time) {
	//console.log(time.value);
	openingTimes.forEach((openingTime) => {
		//console.log(openingTime);
		openingTime.value = time.value;
	});
}

function setClosingTimes(time) {
	//console.log(time.value);
	closingTimes.forEach((closingTime) => {
		//console.log(closingTime);
		closingTime.value = time.value;
	});
}

/* Form Services Area */

/** Clinic or Hospital */
const checkAllPrimaryCareServices = document.getElementById(
	'check_all_primary_care_services'
);
const primaryCareServices = document.querySelectorAll('.primary-care-service');

checkAllPrimaryCareServices.addEventListener('click', () => {
	primaryCareServices.forEach((primaryCareService) => {
		primaryCareService.checked = true;
	});
});

const checkAllSpecialistCareServices = document.getElementById(
	'check_all_specialist_care_services'
);
const specialistCareServices = document.querySelectorAll(
	'.specialist-care-service'
);

checkAllSpecialistCareServices.addEventListener('click', () => {
	specialistCareServices.forEach((specialistCareService) => {
		specialistCareService.checked = true;
	});
});

const checkAllDiagnosticServices = document.getElementById(
	'check_all_diagnostic_services'
);
const diagnosticServices = document.querySelectorAll('.diagnostic-service');

checkAllDiagnosticServices.addEventListener('click', () => {
	diagnosticServices.forEach((diagnosticService) => {
		diagnosticService.checked = true;
	});
});

const checkAllSurgicalServices = document.getElementById(
	'check_all_surgical_services'
);
const surgicalServices = document.querySelectorAll('.surgical-service');

checkAllSurgicalServices.addEventListener('click', () => {
	surgicalServices.forEach((surgicalService) => {
		surgicalService.checked = true;
	});
});

const checkAllEmergencyCareServices = document.getElementById(
	'check_all_emergency_care_services'
);
const emergencyCareServices = document.querySelectorAll(
	'.emergency-care-service'
);

checkAllEmergencyCareServices.addEventListener('click', () => {
	emergencyCareServices.forEach((emergencyCareService) => {
		emergencyCareService.checked = true;
	});
});

const checkAllMaternalServices = document.getElementById(
	'check_all_maternal_services'
);
const maternalServices = document.querySelectorAll('.maternal-service');

checkAllMaternalServices.addEventListener('click', () => {
	maternalServices.forEach((maternalService) => {
		maternalService.checked = true;
	});
});

const checkAllRehabilitationServices = document.getElementById(
	'check_all_rehabilitation_services'
);
const rehabilitationServices = document.querySelectorAll(
	'.rehabilitation-service'
);

checkAllRehabilitationServices.addEventListener('click', () => {
	rehabilitationServices.forEach((rehabilitationService) => {
		rehabilitationService.checked = true;
	});
});

const checkAllMentalHealthServices = document.getElementById(
	'check_all_mental_health_services'
);
const mentalHealthServices = document.querySelectorAll(
	'.mental-health-service'
);

checkAllMentalHealthServices.addEventListener('click', () => {
	mentalHealthServices.forEach((mentalHealthService) => {
		mentalHealthService.checked = true;
	});
});

const checkAllPharmacyServices = document.getElementById(
	'check_all_pharmacy_services'
);
const pharmacyServices = document.querySelectorAll('.pharmacy-service');

checkAllPharmacyServices.addEventListener('click', () => {
	pharmacyServices.forEach((pharmacyService) => {
		pharmacyService.checked = true;
	});
});

const checkAllPreventiveHealthServices = document.getElementById(
	'check_all_preventive_health_services'
);
const preventiveHealthServices = document.querySelectorAll(
	'.preventive-health-service'
);

checkAllPreventiveHealthServices.addEventListener('click', () => {
	preventiveHealthServices.forEach((preventiveHealthService) => {
		preventiveHealthService.checked = true;
	});
});

const checkAllSupportServices = document.getElementById(
	'check_all_support_services'
);
const supportServices = document.querySelectorAll('.support-service');

checkAllSupportServices.addEventListener('click', () => {
	supportServices.forEach((supportService) => {
		supportService.checked = true;
	});
});

/** Pharmacy */
const checkAllPharmaceuticalServices = document.getElementById(
	'check_all_pharmaceutical_services'
);
const pharmaceuticalServices = document.querySelectorAll(
	'.pharmaceutical-service'
);

checkAllPharmaceuticalServices.addEventListener('click', () => {
	pharmaceuticalServices.forEach((pharmaceuticalService) => {
		pharmaceuticalService.checked = true;
	});
});

/** Diagnostic */
const checkAllBloodTestServices = document.getElementById(
	'check_all_blood_test_services'
);
const bloodTestServices = document.querySelectorAll('.blood-test');

checkAllBloodTestServices.addEventListener('click', () => {
	bloodTestServices.forEach((bloodTestService) => {
		bloodTestService.checked = true;
	});
});

const checkAllImagingServices = document.getElementById(
	'check_all_imaging_services'
);
const imagingServices = document.querySelectorAll('.imaging-service');

checkAllImagingServices.addEventListener('click', () => {
	imagingServices.forEach((imagingService) => {
		imagingService.checked = true;
	});
});

const checkAllCardiacDiagnosticTestServices = document.getElementById(
	'check_all_cardiac_diagnostic_test_services'
);
const cardiacDiagnosticTestServices = document.querySelectorAll(
	'.cardiac-diagnostic-test'
);

checkAllCardiacDiagnosticTestServices.addEventListener('click', () => {
	cardiacDiagnosticTestServices.forEach((cardiacDiagnosticTestService) => {
		cardiacDiagnosticTestService.checked = true;
	});
});

const checkAllEndoscopyServices = document.getElementById(
	'check_all_endoscopy_services'
);
const endoscopyServices = document.querySelectorAll('.endoscopy-service');

checkAllEndoscopyServices.addEventListener('click', () => {
	endoscopyServices.forEach((endoscopyService) => {
		endoscopyService.checked = true;
	});
});

const checkAllPathologyServices = document.getElementById(
	'check_all_pathology_services'
);
const pathologyServices = document.querySelectorAll('.pathology-service');

checkAllPathologyServices.addEventListener('click', () => {
	pathologyServices.forEach((pathologyService) => {
		pathologyService.checked = true;
	});
});

const checkAllMicrobiologyServices = document.getElementById(
	'check_all_microbiology_services'
);
const microbiologyServices = document.querySelectorAll('.microbiology-service');

checkAllMicrobiologyServices.addEventListener('click', () => {
	microbiologyServices.forEach((microbiologyService) => {
		microbiologyService.checked = true;
	});
});

const checkAllNeurologicalTestServices = document.getElementById(
	'check_all_neurological_test_services'
);
const neurologicalTestServices =
	document.querySelectorAll('.neurological-test');

checkAllNeurologicalTestServices.addEventListener('click', () => {
	neurologicalTestServices.forEach((neurologicalTestService) => {
		neurologicalTestService.checked = true;
	});
});

const checkAllOtherTestServices = document.getElementById(
	'check_all_other_test_services'
);
const otherTestServices = document.querySelectorAll('.other-test');

checkAllOtherTestServices.addEventListener('click', () => {
	otherTestServices.forEach((otherTestService) => {
		otherTestService.checked = true;
	});
});

/** Ophthalmological or Optical */
const checkAllOpticalServices = document.getElementById(
	'check_all_optical_services'
);
const opticalServices = document.querySelectorAll('.optical-service');

checkAllOpticalServices.addEventListener('click', () => {
	opticalServices.forEach((opticalService) => {
		opticalService.checked = true;
	});
});

/** Dental */
const checkAllStandardDentalServices = document.getElementById(
	'check_all_standard_dental_services'
);
const standardDentalServices = document.querySelectorAll(
	'.standard-dental-service'
);

checkAllStandardDentalServices.addEventListener('click', () => {
	standardDentalServices.forEach((standardDentalService) => {
		standardDentalService.checked = true;
	});
});

const checkAllCosmeticDentistryServices = document.getElementById(
	'check_all_cosmetic_dentistry_services'
);
const cosmeticDentistryServices = document.querySelectorAll(
	'.cosmetic-dentistry'
);

checkAllCosmeticDentistryServices.addEventListener('click', () => {
	cosmeticDentistryServices.forEach((cosmeticDentistryService) => {
		cosmeticDentistryService.checked = true;
	});
});

const checkAllRestorativeDentistryServices = document.getElementById(
	'check_all_restorative_dentistry_services'
);
const restorativeDentistryServices = document.querySelectorAll(
	'.restorative-dentistry'
);

checkAllRestorativeDentistryServices.addEventListener('click', () => {
	restorativeDentistryServices.forEach((restorativeDentistryService) => {
		restorativeDentistryService.checked = true;
	});
});

/** ENT */
const checkAllENTServices = document.getElementById('check_all_ent_services');
const ENTServices = document.querySelectorAll('.ent-service');

checkAllENTServices.addEventListener('click', () => {
	ENTServices.forEach((ENTService) => {
		ENTService.checked = true;
	});
});

/* Form Accreditations Area */

const hefraNumberYes = document.getElementById('hefra_yes');
const hefraNumberNo = document.getElementById('hefra_no');
const pcNumberYes = document.getElementById('pc_yes');
const pcNumberNo = document.getElementById('pc_no');

hefraNumberYes.addEventListener('click', () => {
	hefraNumberYes.checked
		? document
				.getElementById('hefra_number_show')
				.classList.replace('hidden', 'block')
		: null;
});

hefraNumberNo.addEventListener('click', () => {
	hefraNumberNo.checked
		? document
				.getElementById('hefra_number_show')
				.classList.replace('block', 'hidden')
		: null;
});

pcNumberYes.addEventListener('click', () => {
	pcNumberYes.checked
		? document
				.getElementById('pc_number_show')
				.classList.replace('hidden', 'block')
		: null;
});

pcNumberNo.addEventListener('click', () => {
	pcNumberNo.checked
		? document
				.getElementById('pc_number_show')
				.classList.replace('block', 'hidden')
		: null;
});
