export function slashiesguilid(): any {
	if (process.env.NODE_ENV == 'development') {
		return ['901374570353790997 '];
	} else {
		return '';
	}
}
