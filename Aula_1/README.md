COMANDOS GIT:

- git init = inicia um novo repositório Git local na pasta atual.
- git add <nome do arquivo ou . para tudo> = adiciona arquivos selecionados para a área de stage(pronto para ser commitado).
- git commit -m "mudanças" = grava as alterações feitas na área de stage como uma nova versão do código.
- git status = verifica o status atual do repositório, incluindo arquivos modificados e arquivos na área de stage.
- git log = ver histórico de commits.
- git checkout <nome da brach ou id>  = usado para alterar entre branches ou mudar para uma versão anterior do código em um branch existente.
- git checkout -b <nome da brach> = cria uma nova branch e navega para ela.
- git branch = lista as branches do projeto.
- git branch -d <nome da brach> = Exclui a branch
- git merge <nome da branch> = *você deve estar na principal*. Permite unir o conteúdo de duas ou mais branches em uma única branch. É usado para integrar alterações feitas em uma branch secundária(geralmente uma branch de desenvolvimento) na branch principal(geralmente a branch master).
- git remote add origin https://github.com/<caminho do repositório>.git = conecta o projeto local com o repositório do github.
- git branch -M main = *usa se quiser* renomeia a brach principal de master para main.
- git push -u origin master(ou main se tiver rodado o comando acima) = envia os arquivos para o repositório github.
** O -u indica que a branch master ou main é o padrão.
- git push = envia para o github, depois de ter rodado o envio indicando a origem pode rodar só assim.
- git clone <link do repositório> = baixa/clona o repositório na pasta que voce estiver no terminal.
- git diff = ver modificações antes de commitar.
