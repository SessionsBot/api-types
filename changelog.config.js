// changelog.config.js
module.exports = function() {
  return {
    writerOpts: {
      transform: (commit, context) => {
        const typeMap = {
          feat: '✨ Features',
          fix: '🐛 Bug Fixes',
          docs: '📚 Documentation',
          style: '🎨 Code Style',
          refactor: '🛠 Refactoring',
          perf: '⚡ Performance',
          test: '✅ Tests',
          build: '🏗 Build System',
          ci: '🤖 CI',
          chore: '🧹 Chores',
          wip: '👷‍♀️ WIP'
        };

        // Add section name from the typeMap
        const section = typeMap[commit.type];
        if (section) {
          commit.type = section;
        } else {
          return; // skip unknown types
        }

        return commit;
      },
      groupBy: 'type',
      commitGroupsSort: 'title',
      commitsSort: ['scope', 'subject'],
      noteGroupsSort: 'title',
    }
  };
};
