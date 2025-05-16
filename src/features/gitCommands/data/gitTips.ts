export const gitTips: Record<string, string[]> = {
  'git init': [
    'Use git init para começar um novo repositório em qualquer pasta.',
    'Após inicializar, um diretório oculto .git será criado.',
  ],
  'git add [file]': [
    'Você pode adicionar múltiplos arquivos de uma vez: git add arquivo1 arquivo2.',
    'Use git add . para adicionar todas as mudanças do diretório atual.',
  ],
  'git commit -m "[message]"': [
    'Mensagens de commit devem ser claras e descritivas.',
    'Use commits pequenos e frequentes para facilitar o histórico.',
  ],
  'git status': [
    'git status mostra arquivos modificados, adicionados e não rastreados.',
    'Use frequentemente para evitar surpresas antes de commitar.',
  ],
  'git branch': [
    'Branches permitem trabalhar em múltiplas features sem conflito.',
    'Use nomes descritivos para facilitar a colaboração.',
  ],
  'git merge [branch]': [
    'Antes de mesclar, use git status e git log para revisar o histórico.',
    'Resolva conflitos de merge com atenção e teste o código após mesclar.',
  ],
  'git pull': [
    'Sempre faça git pull antes de começar a trabalhar para evitar conflitos.',
    'git pull é equivalente a git fetch + git merge.',
  ],
  'git push': [
    'git push envia seus commits para o repositório remoto.',
    'Verifique se você está na branch correta antes de dar push.',
  ],
};
