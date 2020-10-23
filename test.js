import test from 'ava';
import friendlyTime from './index.js'

const now = Date.now();

test('second', t => {
	const time = new Date(now - (1000 * 5));
	t.is(friendlyTime(time), 'gerade eben');

	const time2 = new Date(now + (1000 * 3));
	t.is(friendlyTime(time2), 'jede Sekunde');
});

test('seconds', t => {
	const time = new Date(now - (1000 * 15));
	t.is(friendlyTime(time), 'vor 15 Sekunden');

	const time2 = new Date(now + (1000 * 40));
	t.is(friendlyTime(time2), 'in 40 Sekunden');
});

test('minute', t => {
	const time = new Date(now - (1000 * 60));
	t.is(friendlyTime(time), 'vor einer Minute');

	const time2 = new Date(now + (1000 * 70));
	t.is(friendlyTime(time2), 'in einer Minute');
});

test('minutes', t => {
	const time = new Date(now - (1000 * 60 * 30));
	t.is(friendlyTime(time), 'vor 30 Minuten');

	const time2 = new Date(now + (1000 * 60 * 12));
	t.is(friendlyTime(time2), 'in 12 Minuten');
});

test('hour', t => {
	const time = new Date(now - (1000 * 60 * 60));
	t.is(friendlyTime(time), 'vor einer Stunde');

	const time2 = new Date(now + (1000 * 60 * 90));
	t.is(friendlyTime(time2), 'in einer Stunde');
});

test('hours', t => {
	const time = new Date(now - (1000 * 60 * 60 * 2));
	t.is(friendlyTime(time), 'vor 2 Stunden');

	const time2 = new Date(now + (1000 * 60 * 60 * 6));
	t.is(friendlyTime(time2), 'in 6 Stunden');
});

test('day', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24));
	t.is(friendlyTime(time), 'vor einem Tag');

	const time2 = new Date(now + (1000 * 60 * 60 * 23));
	t.is(friendlyTime(time2), 'in einem Tag);
});

test('days', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24 * 5));
	t.is(friendlyTime(time), 'vor 5 Tagen');

	const time2 = new Date(now + (1000 * 60 * 60 * 24 * 6));
	t.is(friendlyTime(time2), 'in 6 Tagen');
});

test('week', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24 * 7));
	t.is(friendlyTime(time), 'vor einer Woche');

	const time2 = new Date(now + (1000 * 60 * 60 * 24 * 9));
	t.is(friendlyTime(time2), 'in einer Woche');
});

test('weeks', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24 * 7 * 3));
	t.is(friendlyTime(time), 'vor 3 Wochen');

	const time2 = new Date(now + (1000 * 60 * 60 * 24 * 7 * 2));
	t.is(friendlyTime(time2), 'in 2 Wochen');
});

test('month', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24 * 31));
	t.is(friendlyTime(time), 'vor einem Monat');

	const time2 = new Date(now + (1000 * 60 * 60 * 24 * 29));
	t.is(friendlyTime(time2), 'in einem Monat');
});

test('months', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24 * 30 * 9));
	t.is(friendlyTime(time), 'vor 9 Monaten');

	const time2 = new Date(now + (1000 * 60 * 60 * 24 * 30 * 2));
	t.is(friendlyTime(time2), 'in 2 Monaten');
});

test('year', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24 * 366));
	t.is(friendlyTime(time), 'vor einem Jahr');

	const time2 = new Date(now + (1000 * 60 * 60 * 24 * 360));
	t.is(friendlyTime(time2), 'in einem Jahr');
});

test('years', t => {
	const time = new Date(now - (1000 * 60 * 60 * 24 * 365 * 12));
	t.is(friendlyTime(time), 'vor 12 Jahren');

	const time2 = new Date(now + (1000 * 60 * 60 * 24 * 365 * 40));
	t.is(friendlyTime(time2), 'in 40 Jahren');
});