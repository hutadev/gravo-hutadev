## 📝 Documentação do Projecto Gravo - Guia de Contribuição

Este projecto [Next.js](https://nextjs.org) utiliza o _App Router_ e a fonte _Geist_. O repositório é [https://github.com/hutadev/gravo-hutadev](https://github.com/hutadev/gravo-hutadev).

### 1\. ⚙️ Como Clonar o Repositório

Siga estes passos para obter uma cópia local do código:

1.  **Pré-requisito:** Certifique-se de que tem o Git installado no seu sistema.

2.  **Clonar:** Abra o terminal ou a linha de comandos e execute o commando `clone` com a URL do repositório:

    ```bash
    git clone https://github.com/hutadev/gravo-hutadev.git
    ```

3.  **Aceder à Directoria:** Mude para a directoria do projecto recém-clonado:

    ```bash
    cd gravo-hutadev
    ```

### 2\. 🚀 Como Executar o Projecto Localmente

Após clonar o código, siga para a execução do servidor de desenvolvimento:

1.  **Installar Dependências:** Installe todos os pacotes necessários definidos no `package.json`:

    ```bash
    npm install
    ```

2.  **Executar o Servidor:** Inicie o servidor de desenvolvimento do Next.js:

    ```bash
    npm run dev
    ```

3.  **Visualização:** Abra o seu _browser_ e aceda a [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) para ver o resultado da aplicação.

### 3\. ✍️ Como Contribuir (Passo-a-Passo)

Se deseja submeter alterações, siga o fluxo de trabalho de contribuição padrão:

1.  **Criar um Novo _Branch_**: Crie um _branch_ (ramo) para as suas alterações. Substitua `nome-do-seu-branch` por algo descritivo (_e.g., feature/menu-responsivo_):

    ```bash
    git checkout -b nome-do-seu-branch
    ```

2.  **Fazer Alterações:** Edite os ficheiros do projecto (_e.g., app/page.tsx_) e implemente as suas funcionalidades ou correcções.

3.  **Adicionar e Confirmar (_Commit_) Alterações:** Adicione os ficheiros modificados e crie um _commit_ descritivo:

    ```bash
    git add .
    git commit -m "feat: Adiciona menu de navegação responsivo"
    ```

4.  **Enviar (_Push_) o _Branch_**: Envie o seu _branch_ para o repositório remoto no GitHub:

    ```bash
    git push origin nome-do-seu-branch
    ```

5.  **Criar _Pull Request_ (PR):** Aceda ao [repositório no GitHub](https://github.com/hutadev/gravo-hutadev) e crie um **Pull Request (PR)** a partir do seu _branch_. Certifique-se de que a descrição explica claramente o objectivo das suas alterações.
