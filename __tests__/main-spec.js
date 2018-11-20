const check = require('../main');

it ('should be null', () => {
    expect(check(5,3)).toBe(null);
	});
it ('not in range', ()=>{
	expect(check(0,22220)).toBe(null);
});
it ('alignTable', ()=>{
	expect(check(2,4)).toBe('2*2=4'+'\n'+"2*3=6 3*3=9" + '\n' + "2*4=8 3*4=12 4*4=16");
	});
