/**
 *
 * Created by maixing on 2018/1/18 16:28
 *
 */
export function	uuid() {
	var i, random;
	var uuid = '';
	var uuid = "";
    for (i = 0; i < 10; i++) {
        random = (Math.random() * 10) | 0;
        uuid += i === 12 ? 4 : i === 10 ? (random & 3) | 8 : random;
    }
    return parseFloat(uuid);
}

