export const commandDiagrams: Record<string, string> = {
  'git init': 'graph TD; A("git init") --> B(".git directory");',
  'git clone [url]': 'graph TD; A("git clone URL") --> B("Local Copy");',
  'git add [file]': 'graph TD; WD["Working Dir"] -- git add file --> SA["Staging Area"];',
  'git commit -m "[message]"': 'graph TD; SA["Staging Area"] -- "git commit" --> LR["Local Repo"];',
  'git status':
    'graph TD; C("git status") --> WS["Working Dir State"]; C --> SS["Staging Area State"];',

  // Intermediários
  'git branch': 'graph TD; A["main"] --> B["feature"];',
  'git branch [name]': 'graph TD; A["main"] --> B["novo-branch"];',
  'git checkout [name]': 'graph TD; A["main"] -.-> B["feature"];',
  'git merge [branch]': 'graph TD; A["main"] --> B["feature"]; B --> C["main (merge)"];',
  'git pull': 'graph TD; A["origin/main"] --> B["main (local)"];',
  'git push': 'graph TD; A["main (local)"] --> B["origin/main"];',

  // Avançados
  'git rebase [branch]':
    'gitGraph TB:\n  commit\n  branch feature\n  checkout feature\n  commit\n  checkout main\n  commit\n  checkout feature\n  rebase main',
  'git stash':
    'graph TD; A["Working Dir"] -- "git stash" --> B["Stash"]; B -- "git stash pop" --> A;',
  'git cherry-pick [commit]':
    'graph TD; A["main"] --> B["commit X"]; C["feature"] --> D["cherry-pick X"];',
  'git log': 'graph TD; A["commit 1"] --> B["commit 2"] --> C["commit 3"];',
  'git reset [file]': 'graph TD; A["Staging Area"] -- "git reset" --> B["Working Dir"];',
  'git tag [name]': 'graph TD; A["commit"] -- "git tag v1.0" --> B["v1.0"];',
};

// Função para gerar diagrama de branch
export function branchDiagram(main = 'main', branch = 'feature') {
  return `graph TD; A["${main}"] --> B["${branch}"];`;
}

// Função para merge
export function mergeDiagram(main = 'main', branch = 'feature') {
  return `graph TD; A["${main}"] --> B["${branch}"]; B --> C["${main} (merge)"];`;
}

// Função para push/pull
export function pushPullDiagram(
  local = 'main',
  remote = 'origin/main',
  type: 'push' | 'pull' = 'push'
) {
  return type === 'push'
    ? `graph TD; A["${local} (local)"] --> B["${remote}"];`
    : `graph TD; A["${remote}"] --> B["${local} (local)"];`;
}
