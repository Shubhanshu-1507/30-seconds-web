export default {
  name: '30 seconds of React',
  dirName: '30react',
  repoUrl: 'https://github.com/30-seconds/30-seconds-of-react',
  snippetPath: 'snippets',
  requirables: [
    'snippet_data/snippets.json',
  ],
  slug: 'react',
  featured: 5,
  reducer: 'jsxReducer',
  resolver: 'jsxResolver',
  theme: {
    backColor: '#282c34',
    foreColor: '#61dafb',
    iconName: 'react',
  },
  biasPenaltyMultiplier: 1.08,
  tagScores: {
    'hooks': 5,
    'visual': 3,
    'input': 2,
    'array': 1,
  },
  keywordScores: {
    'state': 5,
    'animation': 4,
    'effect': 4,
    'component': 3,
    'hook': 3,
    'event': 3,
    'input': 2,
    'fragment': 2,
    'lifecycle': 2,
    'ref': 2,
    'map': 1,
    'css': 1,
    'select': 1,
    'table': 1,
    'props': 1,
    'class': 1,
    'style': 1,
    'children': 1,
  },
};
