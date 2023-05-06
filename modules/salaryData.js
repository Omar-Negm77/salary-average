const salaryData = [
	{ role: 'CTO', company: 'Big Data Inc.', salary: 320000 },
	{ role: 'Technical Lead', company: 'Big Data Inc.', salary: 230000 },
	{ role: 'Software Engineer II', company: 'Big Data Inc.', salary: 180000 },
	{ role: 'Software Engineer I', company: 'Big Data Inc.', salary: 140000 },
	{ role: 'CTO', company: 'Medium Data Inc.', salary: 215000 },
	{ role: 'Technical Lead', company: 'Medium Data Inc.', salary: 165000 },
	{ role: 'Software Engineer II', company: 'Medium Data Inc.', salary: 140000 },
	{ role: 'Software Engineer I', company: 'Medium Data Inc.', salary: 115000 },
	{ role: 'CTO', company: 'Small Data Inc.', salary: 175000 },
	{ role: 'Technical Lead', company: 'Small Data Inc.', salary: 135000 },
	{ role: 'Software Engineer II', company: 'Small Data Inc.', salary: 115000 },
	{ role: 'Software Engineer I', company: 'Small Data Inc.', salary: 95000 },
];

export const getRoles = () => {
	return [
		'CTO',
		'Technical Lead',
		'Software Engineer II',
		'Software Engineer I',
	];
};

export const getCompanies = () => {
	return ['Big Data Inc.', 'Medium Data Inc.', 'Small Data Inc.'];
};

export const getDataByRole = (role) => {
	return salaryData.filter((obj) => obj.role === role);
};

export const getDataByCompany = (company) => {
	return salaryData.filter((obj) => obj.company === company);
};

export const getAverageSalaryByRole = (role) => {
	const roleData = getDataByRole(role);
	const salariesOfRole = roleData.map((obj) => obj.salary);
	return calculateAverage(salariesOfRole);
};

// Replace the empty array with the appropriate imported function/value
export const getAverageSalaryByCompany = (company) => {
	const companyData = getDataByCompany(company);
	const salariesAtCompany = companyData.map((obj) => obj.salary);
	return calculateAverage(salariesAtCompany);
};

// Replace the empty array with the appropriate imported function/value

export const getSalaryAtCompany = (role, company) => {
	const companyData = getDataByCompany(company);
	const roleAtCompany = companyData.find((obj) => obj.role === role);
	return roleAtCompany.salary;
};

// Replace the empty array with the appropriate imported function/value
export const getIndustryAverageSalary = () => {
	const allSalaries = salaryData.map((obj) => obj.salary);
	return calculateAverage(allSalaries);
};

// Helper Function. Do not edit.
// Note: This function does not need to be exported since it is only used by the functions contained within this module.
function calculateAverage(arrayOfNumbers) {
	let total = 0;
	arrayOfNumbers.forEach((number) => (total += number));
	return (total / arrayOfNumbers.length).toFixed(2);
}

export default salaryData;
