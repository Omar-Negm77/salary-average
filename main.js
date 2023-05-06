import {
	getRoles,
	getCompanies,
	getAverageSalaryByRole,
	getAverageSalaryByCompany,
	getSalaryAtCompany,
	getIndustryAverageSalary,
} from './modules/salaryData.js';

let companies = getCompanies();
let roles = getRoles();

renderInputButtons(companies, 'company');
renderInputButtons(roles, 'role');

function renderInputButtons(labels, groupName) {
	// Inputs Container
	let container = document.createElement('section');
	container.setAttribute('id', `${groupName}Inputs`);
	// header
	let header = document.createElement('h3');
	header.innerText = `Select a ${groupName}`;
	container.appendChild(header);

	// div element
	labels.forEach((label) => {
		let divElement = document.createElement('div');
		divElement.setAttribute('class', 'option');

		let inputElement = document.createElement('input');
		inputElement.setAttribute('type', 'radio');
		inputElement.setAttribute('name', groupName);
		inputElement.setAttribute('value', label);
		divElement.appendChild(inputElement);

		let labelElement = document.createElement('label');
		labelElement.setAttribute('for', label);
		labelElement.innerText = label;
		divElement.appendChild(labelElement);

		divElement.addEventListener('click', updateResults);
		container.appendChild(divElement);
	});

	// Adding the container to Main section
	document.querySelector('main').prepend(container);
}

function updateResults() {
	const company = document.querySelector("input[name='company']:checked").value;
	const role = document.querySelector("input[name='role']:checked").value;

	if (!company || !role) {
		return;
	}

	//Usefunctions to calculate the needed data.
	const averageSalaryByRole = formatNumber(getAverageSalaryByRole(role));
	const averageSalaryByCompany = formatNumber(
		getAverageSalaryByCompany(company)
	);
	const salary = formatNumber(getSalaryAtCompany(role, company));
	const industryAverageSalary = formatNumber(getIndustryAverageSalary());

	// Render them to the screen.
	document.getElementById(
		'salarySelected'
	).innerText = `The salary for ${role}s at ${company} is \$${salary}`;
	document.getElementById(
		'salaryAverageByRole'
	).innerText = `The industry average salary for ${role} positions is \$${averageSalaryByRole}`;
	document.getElementById(
		'salaryAverageByCompany'
	).innerText = `The average salary at ${company} is \$${averageSalaryByCompany}`;
	document.getElementById(
		'salaryAverageIndustry'
	).innerText = `The average salary in the Tech industry is \$${industryAverageSalary}`;
}

function formatNumber(number) {
	// Get rid of the decimals and convert to a string.
	let numStr = String(Math.floor(number));
	// Starting 3 from the end, add a comma every 3 digits.
	for (let i = numStr.length - 3; i > 0; i -= 3) {
		numStr = numStr.slice(0, i) + ',' + numStr.slice(i);
	}

	return numStr;
}
