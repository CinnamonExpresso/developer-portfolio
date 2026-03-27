import { InlineMath, BlockMath } from "react-katex";

//Renders latex expressons given a string of text
const renderWithInlineMath = (text: string, bold = false) => {
  const parts = text.split(/(\$\$[\s\S]+?\$\$|\$[^$]+\$|\|\|[^|]+\|\|)/g);

  return parts.map((part, i) => {
    // $$...$$ → block math
    if (part.startsWith("$$") && part.endsWith("$$")) {
      return <BlockMath key={i} math={part.slice(2, -2)} />;
    }

    // $...$ or ||...|| → inline math
    if (
      (part.startsWith("$") && part.endsWith("$")) ||
      (part.startsWith("||") && part.endsWith("||"))
    ) {
      const math =
        part.startsWith("$")
          ? part.slice(1, -1)
          : part.slice(2, -2);

      return <InlineMath key={i} math={math} />;
    }

    return bold ? <strong key={i}>{part}</strong> : part;
  });
};


export default renderWithInlineMath;