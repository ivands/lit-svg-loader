
module.exports = function loader(source) {
	return `
		import { svg } from 'lit-element';
		export default svg\`${ source }\`;
	`;
}
