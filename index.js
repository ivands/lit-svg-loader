
const inlineDetection = [
	'module.exports =',
	'export default',
];

module.exports = function loader(source) {

	// remove inline code if present.
	inlineDetection.forEach((detection) => {
		if(source.indexOf(detection) == 0) {
			source = source.substr(detection.length);
			source = source.trim();
			if(source[source.length - 1] == ';') {
				source = source.substring(0, source.length - 1);
			}
			source = source.substring(1, source.length - 1);
		}
	});

	return `
		import { svg } from 'lit-element';
		export default svg\`${ source }\`;
	`;
}
