import HeroSection from "@/components/HeroSection";
import TextSection from "@/components/TextSection";
import SpecialQuoteSection from "@/components/SpecialQuoteSection";
import ListSection from "@/components/ListSection";
import RevealSection from "@/components/RevealSection";
import FinalSection from "@/components/FinalSection";

const Index = () => {
  return (
    <main className="bg-romantic min-h-screen">
      <HeroSection />

      <TextSection
        id="antes-de-voce"
        title="Antes de você…"
        paragraphs={[
          "Eu estava vivendo.\nMas não estava inteiro.",
          "Aprendi a ser forte sozinho.\nAprendi a guardar o que eu sentia.\nAprendi a parecer bem mesmo quando não estava.",
          "Eu achava que isso era maturidade.",
          "Mas na verdade…\neu só ainda não tinha encontrado você.",
        ]}
      />

      <TextSection
        title="Quando você entrou na minha vida"
        paragraphs={[
          "Não foi barulhento.\nNão foi exagerado.",
          "Foi profundo.",
          "Foi como se alguma parte minha tivesse reconhecido você antes mesmo de eu entender o que estava acontecendo.",
          "Com você eu senti paz.\nCom você eu senti verdade.\nCom você eu senti algo raro.",
          "E desde então… eu nunca mais fui o mesmo.",
        ]}
      />

      <TextSection
        title="O que eu sinto por você não é raso."
        accent
        paragraphs={[
          "Eu não quero algo passageiro.\nEu não quero algo que dependa só de momentos bons.",
          "Eu quero o amor que permanece.",
          "O amor que protege.\nO amor que acredita.\nO amor que espera.\nO amor que suporta.",
          "Porque amar você não é só sentir.",
          "É escolher.\n\nTodos os dias.",
        ]}
      />

      <SpecialQuoteSection />

      <ListSection />

      <RevealSection />

      <FinalSection />
    </main>
  );
};

export default Index;
