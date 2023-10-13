"use strict";

function solveEquation(a, b, c) {
	const arr = [];

	const dis = b * b - 4 * a * c;

	if (dis === 0) {
		const x = -(b / (2 * a))
		arr.push(x);
	}
	if (dis > 0) {
		const x1 = (-b + Math.sqrt(dis)) / (2 * a);
		const x2 = (-b - Math.sqrt(dis)) / (2 * a);
		arr.push(x1, x2);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	const monthEvery = percent / 12 / 100;

	const paymentMonth = (amount - contribution) * (monthEvery + (monthEvery / (((1 + monthEvery) ** countMonths) - 1)));

	const payment = paymentMonth * countMonths;

	return +payment.toFixed(2);
}