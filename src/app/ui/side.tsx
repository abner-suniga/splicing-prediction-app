import React from "react";

export default function Side() {
  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-5xl font-semibold mb-4">
        Plataforma para predição de regiões de splicing
      </h1>
      <p>
        Nessa plataforma você pode inserir um arquivo de sequência de DNA no
        formato FASTA e obter predições utilizando diferentes modelos de
        aprendizado de máquina. Resultados podem ser enviados para seu e-mail.
      </p>
      <p>
        Desenvolvido por Abner Suniga e orientado por Josiane Melchiori
        Pinheiro.
      </p>
    </div>
  );
}
