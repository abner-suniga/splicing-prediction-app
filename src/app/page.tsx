export default function Home() {
  return (
    <main className="flex flex-col h-screen p-32 justify-between">
      <div className="w-2/3">
        <div className="flex flex-col space-y-4">
          <h1 className="text-5xl font-semibold mb-4">AS Splicing</h1>
          <h3 className="text-3xl">
            Uma plataforma para predição de regiões de splicing
          </h3>
          <p>
            Nessa plataforma você pode inserir um arquivo de sequência de DNA no
            formato FASTA e obter predições utilizando diferentes modelos de
            aprendizado de máquina. Resultados podem ser enviados para seu
            e-mail.
          </p>
          <p>No momento 3 modelos são suportados:</p>
          <ul className="list-disc ml-5">
            <li>
              <a
                href="https://github.com/DSSP-github/DSSP"
                target="_blank"
                rel="noopener noreferrer"
              >
                DSSP
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ElisaFernandezCastillo/DeepSplicer"
                target="_blank"
                rel="noopener noreferrer"
              >
                DeepSplicer
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Illumina/SpliceAI"
                target="_blank"
                rel="noopener noreferrer"
              >
                SpliceAI
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-8">
        <a
          className="inline-block w-fit rounded border border-emerald-600 bg-emerald-600 px-12 py-3 text-md font-medium text-white hover:bg-transparent hover:text-emerald-600 focus:outline-none focus:ring active:text-emerald-500"
          href="/platform/jobs"
        >
          Entrar na plataforma
        </a>

        <p>
          Desenvolvido por Abner Suniga e orientado por Josiane Melchiori
          Pinheiro.
        </p>
      </div>
    </main>
  );
}
