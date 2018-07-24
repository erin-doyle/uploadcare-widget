import { configure } from '@zmoki/storybook-hyperapp';
import '../src/index.css'
import './styles.css'

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
